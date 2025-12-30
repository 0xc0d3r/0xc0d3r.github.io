import { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { posts } from "#site/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on software development.",
};

// Sort posts by date (newest first) and filter published
function getSortedPosts() {
  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const sortedPosts = getSortedPosts();

  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Thoughts, tutorials, and insights on software development, technology, and building things on the internet.
        </p>
      </div>

      <div className="grid gap-6">
        {sortedPosts.map((post) => (
          <Link key={post.slugAsParams} href={`/blog/${post.slugAsParams}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                {post.description && (
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                )}
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
        ))}
      </div>

      {sortedPosts.length === 0 && (
        <p className="text-muted-foreground text-center py-12">
          No posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}
