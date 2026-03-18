import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import GitHubRepos from "../components/GitHubRepos";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      {/* <GitHubRepos /> */}
    </>
  );
}
