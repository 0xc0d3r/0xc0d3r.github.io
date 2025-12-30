import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart, Coffee } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-sm font-bold">
                {"</>"}
              </div>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.tagline} — building things for the web and having fun doing it.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="mr-2">{item.emoji}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold">Let&apos;s Connect</h3>
            <p className="text-sm text-muted-foreground">
              Got an idea? Want to collaborate? Or just want to say hi? I&apos;d love to hear from you!
            </p>
            <div className="flex items-center space-x-3">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and{" "}
              <Coffee className="h-4 w-4 text-amber-600" /> by{" "}
              <Link href="/" className="font-medium text-foreground hover:text-primary transition-colors">
                {siteConfig.name}
              </Link>
            </p>
            <p>© {currentYear} • All rights reserved (jk, it&apos;s open source)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
