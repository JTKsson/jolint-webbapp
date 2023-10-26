import HeroComponent from "./components/HeroComponent"
import Advantages from "./components/Advantages"
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
    </>
  );
};

