import CoreCta from "@/components/layout/main/CoreCta";
import CTASection from "@/components/layout/main/CTASection";
import FeaturedCategories from "@/components/layout/main/FeaturedCategories";
import HeroStart from "@/components/layout/main/HeroStart";
import RecentJobs from "@/components/layout/main/RecentJobs";
import TopFreelancer from "@/components/layout/main/TopFreelancer";


export default function Home() {
  return (
    <>
      <HeroStart />
      <FeaturedCategories />
      <CTASection />
      <RecentJobs />
      <TopFreelancer />
      <CoreCta />
    </>
  );
}
