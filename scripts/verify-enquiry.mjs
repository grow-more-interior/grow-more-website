import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise the real submit handler with mocked hooks and transport. No emails sent.
const compiled = ts.transpileModule(readFileSync('app/enquiry/EnquiryForm.tsx', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const fields = [['name', 'Test Visitor'], ['phone', '9800000000'], ['email', 'test@example.com'], ['space', 'Kitchen'], ['message', 'Test project'], ['website', '']];
function setup(transport) {
  const calls = { requests: [], events: [], routes: [], states: [], successes: 0 };
  class TestFormData extends FormData {
    constructor(entries) { super(); for (const [key, value] of entries) this.append(key, value); }
  }
  const imports = {
    react: { useRef: (value) => ({ current: value }), useState: (value) => [value, (next) => calls.states.push(next)] },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) },
    'next/link': { default: () => null },
    'next/navigation': { useRouter: () => ({ push: (path) => calls.routes.push(path) }) },
    '@/lib/tracking': { trackEvent: (...args) => calls.events.push(args) },
  };
  const context = { Error, exports: {}, require: (name) => imports[name], FormData: TestFormData, crypto,
    fetch: async (url, options) => { calls.requests.push({ url, ...options }); return transport(); },
  };
  vm.runInNewContext(compiled, context);
  const form = context.exports.default({ onSuccess: () => calls.successes++ });
  return { calls, submit: (values = fields) => form.props.onSubmit({ preventDefault() {}, currentTarget: values }) };
}
const success = setup(async () => ({ ok: true, json: async () => ({ success: true }) }));
await success.submit();
const request = success.calls.requests[0];
assert.equal(request.url, 'https://api.web3forms.com/submit');
assert.equal(request.method, 'POST');
assert.equal(request.body.get('access_key'), 'b1df685b-580f-448b-9541-17754d63cbf7');
for (const [key, value] of fields.filter(([key]) => key !== 'website')) assert.equal(request.body.get(key), value);
assert.equal(request.body.has('website'), false);
assert.equal(success.calls.routes[0], '/thank-you');
assert.equal(success.calls.successes, 1);
assert.equal(success.calls.events[0][0], 'generate_lead');
assert.equal(Object.keys(success.calls.events[0][1]).sort().join(','), 'form_id,lead_id');
const rejected = setup(async () => ({ ok: false, json: async () => ({ success: false, message: 'Please try again.' }) }));
await rejected.submit();
assert.ok(rejected.calls.states.includes('Please try again.'));
assert.equal(rejected.calls.events.length, 0);
assert.equal(rejected.calls.routes.length, 0);
await rejected.submit();
assert.equal(rejected.calls.requests.length, 2, 'Retry must be possible after failure');
const network = setup(async () => { throw new Error('Network unavailable'); });
await network.submit();
assert.ok(network.calls.states.includes('Network unavailable'));
assert.equal(network.calls.routes.length, 0);
let resolve;
const duplicate = setup(() => new Promise((done) => { resolve = done; }));
const first = duplicate.submit();
await duplicate.submit();
assert.equal(duplicate.calls.requests.length, 1, 'Duplicate submit must not send another request');
resolve({ ok: true, json: async () => ({ success: true }) });
await first;
const bot = setup(async () => { throw new Error('Should not request'); });
await bot.submit([...fields.filter(([key]) => key !== 'website'), ['website', 'spam']]);
assert.equal(bot.calls.requests.length, 0);
console.log('PASS: Web3Forms fields, success redirect/event, provider and network errors, retry, duplicate prevention, spam field. No live submission sent.');
