import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { posts } from "#site/content";

export function RecentPosts() {
  const recentPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (recentPosts.length === 0) return null;

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
        {recentPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slugAsParams}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </time>
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
        ))}
      </div>
    </section>
  );
}
