import Hero from "./Hero";
import ProblemSolution from "./ProblemSolution";
import EventDetails from "./EventDetails";
import BonusesSection from "./BonusesSection";
import PricingSection from "./PricingSection";
import SocialProof from "./SocialProof";
import AboutSection from "./AboutSection";
import UrgencySection from "./UrgencySection";
import FAQ from "./FAQ";
import UrgencyBar from "./UrgencyBar";
import Footer from "./Footer";

const SalesPage = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBar />
      <Hero />
      <ProblemSolution />
      <EventDetails />
      <BonusesSection />
      <PricingSection />
      <SocialProof />
      <AboutSection />
      <UrgencySection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default SalesPage;