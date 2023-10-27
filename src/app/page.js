import HeroComponent from "./components/HeroComponent"
import InclusionPage from "./components/InclusionPageTitle"
import Advantages from "./components/Advantages"
import HowItWorks from "./components/HowItWorks"
import { HowItWorksContent } from "./components/HowItWorks/HowItWorksContent"
import Navbar from "./components/Navbar"
import InclusionStats from "./components/InclusionStats"

export default function Home() {
  return (
    <>
      <HeroComponent/>
      <InclusionPage />
      <Advantages/>
      <InclusionStats/>
      <HowItWorks data={HowItWorksContent}/>
    </>
  );
};

