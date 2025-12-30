import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A collection of photos and moments.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    alt: "Coding on laptop",
    category: "Work",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    alt: "Developer workspace",
    category: "Work",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    alt: "Code on screen",
    category: "Work",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    alt: "Programming setup",
    category: "Work",
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
    alt: "Technology and innovation",
    category: "Tech",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    alt: "Team collaboration",
    category: "Work",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    alt: "Team meeting",
    category: "Work",
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    alt: "Technology abstract",
    category: "Tech",
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    alt: "Cybersecurity concept",
    category: "Tech",
  },
];

export default function GalleryPage() {
  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of photos from my work, travels, and everyday moments.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative break-inside-avoid overflow-hidden rounded-xl group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-white font-medium">{image.alt}</p>
                <p className="text-white/80 text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
