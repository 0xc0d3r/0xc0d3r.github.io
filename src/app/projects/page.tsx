import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've worked on.",
};

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
}

const projects: Project[] = [];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Here are some of the projects I&apos;ve worked on. From open source libraries to full-stack applications,
          I love building things that solve real problems.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    {project.stars && (
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks && (
                      <span className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button asChild variant="ghost" size="icon">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild variant="ghost" size="icon">
                        <Link href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Other Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    {project.stars && (
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks && (
                      <span className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button asChild variant="ghost" size="icon">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild variant="ghost" size="icon">
                        <Link href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
