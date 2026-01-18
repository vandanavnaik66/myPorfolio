import { getProfileApi, getProjectsApi } from "@/lib/api";
import { Hero } from "@/app/components/Hero";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { site } from "@/lib/site";

export default async function Home() {
  const [profile, projects] = await Promise.all([getProfileApi(), getProjectsApi()]);

  return (
    <div className="space-y-14">
      <Hero
        name={profile.name}
        title={profile.heroTitle ?? profile.title}
        summary={profile.heroSummary ?? profile.summary}
        photoSrc={profile.photo.src}
        resumeUrl={site.resumeUrl}
      />

      <ProjectsSection projects={projects} />
    </div>
  );
}
