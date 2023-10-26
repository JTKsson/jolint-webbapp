import HeroComponent from "./components/HeroComponent"
import Advantages from "./components/Advantages"
import HowItWorks from "./components/HowItWorks"
import { HowItWorksContent } from "./components/HowItWorks/HowItWorksContent"
import Navbar from "./components/Navbar"
import InclusionStats from "./components/InclusionStats"
import InclusionDropdownComponent from './components/InclusionDropdownComponent'

export default function Home() {
  return (
    <>
      <HeroComponent/>
      <Advantages/>
      <InclusionStats/>
      <InclusionDropdownComponent />
      <HowItWorks data={HowItWorksContent}/>
    </>
  );
};

