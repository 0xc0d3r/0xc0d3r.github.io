import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my experience, and skills.",
};

const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Rust", "Go"],
  frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
};

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading frontend architecture and building scalable web applications.",
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    location: "Remote",
    period: "2020 - 2022",
    description: "Full-stack development with React, Node.js, and cloud services.",
  },
  {
    title: "Junior Developer",
    company: "Agency XYZ",
    location: "New York, NY",
    period: "2018 - 2020",
    description: "Building websites and web applications for various clients.",
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <Avatar className="h-32 w-32 border-4 border-primary/10">
          <AvatarImage src={`https://github.com/${siteConfig.github}.png`} alt={siteConfig.name} />
          <AvatarFallback className="text-3xl">{siteConfig.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Hi! I&apos;m a passionate software engineer with a love for building things that live on the internet.
            I enjoy creating elegant solutions to complex problems and contributing to open source projects.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            When I&apos;m not coding, you can find me exploring new technologies, reading tech blogs,
            or contributing to the developer community.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>Open to opportunities</span>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.company}</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
