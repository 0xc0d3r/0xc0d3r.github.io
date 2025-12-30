export const siteConfig = {
  name: "0xc0d3r",
  fullName: "Anesh Parvatha", // Update with your real name
  title: "0xc0d3r | Builder of Internet Things",
  description: "Hey! I'm a developer who loves building things for the web. I tinker with code, ship side projects, and write about what I learn along the way.",
  tagline: "your friendly neighborhood developer",
  url: "https://0xc0d3r.dev",
  github: "0xc0d3r",
  email: "hello@0xc0d3r.dev",
  location: "The Internet",
  status: "Building cool stuff",
  links: {
    github: "https://github.com/0xc0d3r",
    twitter: "https://x.com/anesh_parvatha",
    linkedin: "https://linkedin.com/in/0xc0d3r",
  },
  navItems: [
    { name: "Home", href: "/", emoji: "🏠" },
    { name: "About", href: "/about", emoji: "👋" },
    { name: "Projects", href: "/projects", emoji: "🚀" },
    { name: "Blog", href: "/blog", emoji: "✍️" },
    { name: "Gallery", href: "/gallery", emoji: "📸" },
  ],
  // Personal touches
  currentlyLearning: ["Rust", "AI/ML", "System Design"],
  favoriteTools: ["VS Code", "Arc Browser", "Raycast", "Figma"],
  funFacts: [
    "I debug with console.log and I'm not sorry",
    "Coffee-to-code conversion machine",
    "My code works, I have no idea why",
  ],
};

// Fun messages for different times of day
export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 6) return "Burning the midnight oil? 🌙";
  if (hour < 12) return "Good morning! ☀️";
  if (hour < 17) return "Good afternoon! 🌤️";
  if (hour < 21) return "Good evening! 🌅";
  return "Night owl, huh? 🦉";
}
