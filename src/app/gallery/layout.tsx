import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery Cavallery",
  description: "Galeri foto Erine JKT48.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
