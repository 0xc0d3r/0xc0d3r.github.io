import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container px-4 md:px-8 py-12 md:py-16 max-w-3xl mx-auto">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-xl text-muted-foreground mb-6">
            {post.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator />
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary prose-pre:bg-zinc-950 prose-pre:dark:bg-zinc-900">
        <MDXContent code={post.body} />
      </div>

      <Separator className="my-8" />

      <footer className="flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            More Posts
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </footer>
    </article>
  );
}

export function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slugAsParams,
    }));
}
