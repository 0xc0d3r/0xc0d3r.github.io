"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/lib/constants";

interface GitHubActivityProps {
  username?: string;
}

export function GitHubActivity({ username = siteConfig.github }: GitHubActivityProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  if (!mounted) {
    return (
      <section className="container px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">GitHub Activity</h2>
        <Skeleton className="h-[160px] w-full" />
      </section>
    );
  }

  return (
    <section className="container px-4 md:px-8 py-12 md:py-16">
      <h2 className="text-2xl font-bold tracking-tight mb-8">GitHub Activity</h2>
      <div className="overflow-x-auto pb-4">
        <GitHubCalendar
          username={username}
          colorScheme={currentTheme === "dark" ? "dark" : "light"}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </section>
  );
}
