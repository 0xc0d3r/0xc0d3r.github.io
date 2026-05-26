import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Full Stack & AI Engineer with 11+ years of experience in fintech and AI-powered automation.",
};

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "TanStack Query"],
  "DevOps & Infra": ["Google Cloud Platform", "Docker", "Git", "CI/CD", "AWS (S3, CloudFront, Route53, WAF)"],
  "AI & Automation": ["Claude Code", "n8n", "AI Agents", "Context Engineering", "Prompt Engineering"],
  Architecture: ["gRPC", "Microservices", "REST APIs", "System Design", "Clean Architecture", "TDD"],
};

const experience = [
  {
    title: "Full Stack Engineer — FinInfra",
    company: "Wingspan",
    location: "Remote, India",
    period: "May 2025 – Present",
    bullets: [
      "Built an incoming payments verification system to detect and control fraudulent transactions, improving fraud prevention and operational visibility for the Finance & Ops teams",
      "Implemented a critical alerts system that automatically paged relevant teams, reducing response time for high-severity production incidents",
      "Architected AI agents using n8n and Claude to autonomously debug critical payment processing issues, reducing time-to-resolution for the engineering team",
      "Built an internal tool for Operations & Support teams that saved ~5–10 hrs/week by eliminating routine engineering dependencies",
      "Contributed to the risk-signals project enabling the Compliance team to proactively identify and act on high-risk users",
      "Served as on-call engineer for critical payroll and funds-movement issues",
    ],
    tools: ["MERN stack", "Next.js", "TanStack Query", "Google Cloud Platform", "n8n", "Claude Code", "AI Agents"],
  },
  {
    title: "Full Stack Engineer — Platform",
    company: "Wingspan",
    location: "Remote, India",
    period: "Jul 2020 – Apr 2025",
    bullets: [
      "Owned the payer invoicing configuration project end-to-end from system design through deployment, significantly improving invoicing experience for major enterprise clients",
      "Reduced bulk upload time by 50% and implemented bulk payables & contractor onboarding, enabling large clients to process payrolls at scale",
      "Built the notifications microservice from scratch and integrated it across services via gRPC, decoupling a critical communication layer from the monolith",
      "Automated internal library releases and set up Storybook style-guide, saving ~15–20 hrs/month in developer overhead",
    ],
    tools: ["MERN stack", "Next.js", "Storybook", "TanStack Query", "gRPC", "GCP", "Testcafe", "Browserstack"],
  },
  {
    title: "Lead Software Engineer",
    company: "CyberEye",
    location: "Hyderabad, India",
    period: "Apr 2019 – Feb 2020",
    bullets: [
      "Led a frontend team across the full SDLC — sprint planning, architecture decisions, and delivery ownership",
      "Drove adoption of Clean Code principles and Clean Architecture across the team, raising code quality and maintainability standards",
      "Championed frontend modernisation initiatives including TypeScript migration, Apollo GraphQL, and React Hooks via POCs",
    ],
    tools: [],
  },
  {
    title: "Senior Software Engineer",
    company: "CyberEye",
    location: "Hyderabad, India",
    period: "Apr 2017 – Mar 2019",
    bullets: [
      "Introduced a services layer in the frontend architecture, decoupling UI from backend REST APIs and enabling fully testable data storage classes",
      "Reduced CI/CD build time by 50% and configured pipelines for web and mobile applications",
      "Built reusable React/React Native component library, saving 15–20 hrs of developer time",
    ],
    tools: ["Codeship", "CloudFront", "S3", "IAM", "Route53", "WAF"],
  },
  {
    title: "Software Engineer",
    company: "CyberEye",
    location: "Hyderabad, India",
    period: "May 2015 – Mar 2017",
    bullets: [
      "Developed responsive, cross-browser web apps and cross-platform mobile apps as part of an agile team",
      "Contributed across the stack — UI components, API integration, state management, and unit testing",
    ],
    tools: ["React", "React Native", "MobX", "Redux"],
  },
];

const education = {
  institution: "RGUKT IIIT Nuzvid",
  degree: "B.Tech, Computer Science",
  grade: "CGPA: 8.5",
  period: "Jun 2011 – Apr 2015",
};

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <Avatar className="h-32 w-32 border-4 border-primary/10 shrink-0">
          <AvatarImage src={siteConfig.avatar} alt={siteConfig.name} className="object-cover object-top" />
          <AvatarFallback className="text-3xl">{siteConfig.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Anesh Parvatha</h1>
          <p className="text-xl text-primary font-medium mb-4">Full Stack & AI Engineer</p>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Hey! I&apos;m Anesh, a full stack engineer from Hyderabad. I&apos;ve been building for the web
            for 11 years and still find it genuinely interesting. Most days that looks like React, TypeScript,
            and Node.js. Some days it looks like debugging something that &quot;should definitely be working.&quot;
          </p>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Most of my career has been in fintech. Nothing glamorous, just systems that needed to work and
            learning to care about the details that make that happen.
          </p>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Lately I&apos;ve been spending a lot of time with AI, building agents with Claude and wiring up
            n8n workflows. I write here mostly to figure things out for myself, but if it helps someone
            else too, even better.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Outside of work, I&apos;m a dad first. I listen to a lot of music, play virtual reality cricket
            (yes, that&apos;s a real thing and yes, it&apos;s great), and try to keep up with personal finance
            and fitness. I cook too, which helps with the healthy eating part.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Briefcase className="h-4 w-4" />
              <span>Full Stack Engineer at Wingspan</span>
            </div>
          </div>
          <Button asChild>
            <Link href="/Anesh_Parvatha_Resume.pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <p className="text-primary font-medium text-sm mt-0.5">{job.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {job.tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Education</h2>
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <CardTitle className="text-lg">{education.degree}</CardTitle>
                <p className="text-primary font-medium text-sm mt-0.5">{education.institution}</p>
              </div>
              <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground shrink-0">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>{education.grade}</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}
