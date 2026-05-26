export const siteConfig = {
  name: "Anesh",
  fullName: "Anesh Parvatha",
  title: "Anesh | Full Stack & AI Engineer",
  description: "Full Stack & AI Engineer with 11+ years of experience — fintech, AI-powered automation, and products built end-to-end.",
  tagline: "full stack & AI engineer",
  url: "https://0xc0d3r.github.io",
  github: "0xc0d3r",
  avatar: "/Anesh_Professional_Pic.png",
  email: "anesh.codes@gmail.com",
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
