const https = require('https');
const sizes = [
  'https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?w=900&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1652161468447-d8abb529b464?w=900&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596639410348-8470f7fa9f84?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532135468830-e51699205b70?w=900&auto=format&fit=crop&q=60'
];

const execSync = require('child_process').execSync;

sizes.forEach((url, i) => {
  try {
     execSync(`curl -sL "${url}" -o img${i}`);
     const out = execSync(`file img${i} || true`).toString();
     console.log(`img${i}: ${out.trim()}`);
  } catch (e) {
     console.error(e);
  }
});
