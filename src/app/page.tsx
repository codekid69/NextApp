import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Scroll from "@/components/Scroll";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/Webinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center" ></h1>
      <HeroSection/>
      <FeaturedSection/>
      <Scroll/>
      <Testimonials/>
      <Webinars/>
      <Instructors/>
      {/* <Footer/> */}
    </main>
      
  );
}
