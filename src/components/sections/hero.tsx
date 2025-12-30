"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/constants";

interface HeroProps {
  name?: string;
  bio?: string;
  avatarUrl?: string;
}

export function Hero({ name, bio, avatarUrl }: HeroProps) {
  const displayName = name || siteConfig.name;

  return (
    <section className="container px-4 md:px-8 py-16 md:py-28 lg:py-36 bg-pattern">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Avatar with glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl scale-150" />
          <Avatar className="h-36 w-36 md:h-44 md:w-44 border-4 border-background shadow-2xl relative glow">
            <AvatarImage src={avatarUrl || `https://github.com/${siteConfig.github}.png`} alt={displayName} />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
              {displayName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Waving hand */}
          <p className="text-2xl md:text-3xl">
            Hey there! <span className="animate-wave">👋</span>
          </p>

          {/* Name with gradient */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I&apos;m{" "}
            <span className="gradient-text animate-gradient">
              {displayName}
            </span>
          </h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground"
          >
            <Sparkles className="h-5 w-5 text-accent" />
            <span>your friendly neighborhood developer</span>
            <Sparkles className="h-5 w-5 text-accent" />
          </motion.div>

          {/* Bio */}
          <p className="mx-auto max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
            I build things for the web, tinker with side projects, and occasionally write about
            what I learn. Currently obsessed with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and making the internet a little more fun.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              See what I&apos;ve built
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Stalk my GitHub
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/blog">
              Read my thoughts →
            </Link>
          </Button>
        </motion.div>

        {/* Fun status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-2 text-sm text-muted-foreground pt-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Available for interesting projects & collaborations</span>
        </motion.div>
      </div>
    </section>
  );
}
