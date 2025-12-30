"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const featuredProjects: Project[] = [
  {
    title: "Project Alpha",
    description: "A modern web application built with Next.js and TypeScript. Features real-time updates, authentication, and a beautiful UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/0xc0d3r/project-alpha",
    demo: "https://project-alpha.vercel.app",
  },
  {
    title: "CLI Tool",
    description: "A powerful command-line tool for automating development workflows. Supports multiple languages and integrates with popular services.",
    tags: ["Rust", "CLI", "Automation"],
    github: "https://github.com/0xc0d3r/cli-tool",
  },
  {
    title: "Open Source Library",
    description: "A lightweight utility library for JavaScript/TypeScript projects. Zero dependencies, fully typed, and tree-shakeable.",
    tags: ["TypeScript", "Library", "Open Source"],
    github: "https://github.com/0xc0d3r/utility-lib",
    demo: "https://utility-lib.dev",
  },
];

export function FeaturedProjects() {
  return (
    <section className="container px-4 md:px-8 py-12 md:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
        <Button asChild variant="ghost" size="sm">
          <Link href="/projects">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm">
                      <Link href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
