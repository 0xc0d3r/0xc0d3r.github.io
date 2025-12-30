import { Hero } from "@/components/sections/hero";
import { PhotoCarousel } from "@/components/sections/photo-carousel";
import { GitHubActivity } from "@/components/sections/github-activity";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { RecentPosts } from "@/components/sections/recent-posts";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PhotoCarousel />
      <Separator className="my-4" />
      <GitHubActivity />
      <Separator className="my-4" />
      <FeaturedProjects />
      <Separator className="my-4" />
      <RecentPosts />
    </div>
  );
}
