import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Design Gallery | Living Room, Kitchen, Bedroom Ideas",
  description:
    "Browse Grow More Interior gallery images for living rooms, bedrooms, modular kitchens, bathrooms, office interiors, luxury apartments, and commercial spaces.",
  path: "/gallery",
  keywords: ["interior design gallery Nepal", "living room design ideas", "kitchen interior design Kathmandu", "bedroom design Nepal"],
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
