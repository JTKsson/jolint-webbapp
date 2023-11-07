import HeroComponent from "./components/HeroComponent"
import Advantages from "./components/Advantages"
import HowItWorks from "./components/HowItWorks"
import { HowItWorksContent } from "./assets/HowItWorksContent"

export default function Home() {
  return (
    <>
      <HeroComponent/>
      <Advantages/>
      <HowItWorks data={HowItWorksContent}/>
    </>
  )
}
