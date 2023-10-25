import HowItWorks from "./components/HowItWorks"
import { HowItWorksContent } from "./components/HowItWorks/HowItWorksContent"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <HowItWorks data={HowItWorksContent}/>
    </>
  )
}
