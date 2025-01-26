import AthleteSlider from "@/components/pagesComponents/Home/AthleteSlider";
import Banner from "@/components/pagesComponents/Home/Banner";
import NewsSection from "@/components/pagesComponents/Home/NewsSection";
import RecruitsSection from "@/components/pagesComponents/Home/RecruitsSection";
import Schedule from "@/components/pagesComponents/Home/Schedule";
import SocialMediaFeeds from "@/components/pagesComponents/Home/SocialMediaFeeds";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <NewsSection />
      <Schedule />
      <AthleteSlider />
      <RecruitsSection />
      <SocialMediaFeeds />
    </div>
  );
}
