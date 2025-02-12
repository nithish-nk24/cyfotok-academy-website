import HeroSection from "../sections/Home/HeroSection";
import CompanyAbout from "../sections/Home/CompanyAbout";
import Contact from "../sections/Home/Contact";
import ExternalLinks from "../sections/Home/ExternalLinks";
import Hackathon from "../sections/Home/Hackathon";
import Learn from "../sections/Home/Learn";
import Partners from "../sections/Home/Partners";
import Testimonials from "../sections/Home/Testimonials";
import TrainingFacilities from "../sections/Home/TrainingFacilities";

export default function Home() {
  return (
    <main>
      <HeroSection /> {/* hero section */}
      <Partners /> {/* partners section */}
      <Learn /> {/* learn section */}
      <TrainingFacilities /> {/* training facilities section */}
      <Hackathon /> {/* hackathon banner section */}
      <CompanyAbout /> {/* company about banner section */}
      <ExternalLinks /> {/* external links section */}
      <Testimonials /> {/* testimonials section */}
      <Contact /> {/* contact section */}
    </main>
  );
}
