import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Design Portfolio in Nepal | Grow More Projects",
  description:
    "View Grow More Interior residential, commercial, hospitality, retail, luxury apartment, office, and turnkey interior design projects.",
  path: "/projects",
  keywords: ["interior design portfolio Nepal", "Kathmandu interior projects", "luxury home interiors Nepal"],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
