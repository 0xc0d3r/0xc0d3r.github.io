"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  readingTime?: string;
}

const recentPosts: Post[] = [
  {
    title: "Building a Modern Portfolio with Next.js 15",
    description: "A comprehensive guide to creating a portfolio website using the latest Next.js features, Tailwind CSS, and shadcn/ui components.",
    date: "2024-12-30",
    slug: "building-modern-portfolio-nextjs-15",
    tags: ["Next.js", "React", "Tutorial"],
    readingTime: "8 min read",
  },
  {
    title: "The Art of Clean Code",
    description: "Exploring best practices for writing maintainable, readable, and efficient code. Learn patterns that will make your codebase shine.",
    date: "2024-12-25",
    slug: "art-of-clean-code",
    tags: ["Programming", "Best Practices"],
    readingTime: "6 min read",
  },
  {
    title: "Getting Started with TypeScript",
    description: "A beginner-friendly introduction to TypeScript. Learn why type safety matters and how to start using TypeScript in your projects.",
    date: "2024-12-20",
    slug: "getting-started-typescript",
    tags: ["TypeScript", "JavaScript"],
    readingTime: "5 min read",
  },
];

export function RecentPosts() {
  return (
    <section className="container px-4 md:px-8 py-12 md:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Recent Posts</h2>
        <Button asChild variant="ghost" size="sm">
          <Link href="/blog">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "MMM d, yyyy")}
                    </time>
                    {post.readingTime && (
                      <>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
