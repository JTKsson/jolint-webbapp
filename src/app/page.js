import InclusionPage from './components/InclusionPageTitle'
import HeroComponent from './components/HeroComponent'
import Advantages from './components/Advantages'
import HowItWorks from './components/HowItWorks'
import { HowItWorksContent } from './assets/HowItWorksContent'

export default function Home() {
  return (
    <>
      <HeroComponent />
      <InclusionPage />
      <Advantages />
      <HowItWorks data={HowItWorksContent} />
    </>
  )
}
