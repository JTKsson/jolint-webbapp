import { HeroContent } from '../../assets/heroContent'
import Image from 'next/image'
import Styles from './hero.module.css'
import HeroImage from 'public/ellipse-34.png'
import Link from 'next/link'

const HeroComponent = () => {
  return (
    <section className={Styles.mainBox}>
      <div className={Styles.contentBox}>
        <div>
          <h2 className={Styles.title}>{HeroContent.title}</h2>
          <p className={Styles.content}>{HeroContent.content}</p>
        </div>
        <div className={Styles.buttons}>
          <Link href="/inclusion">
            <button className={`${Styles.button} ${Styles.inclusion}`}>
              Why inclusion
            </button>
          </Link>
          <Link href="#how-it-works">
            <button className={`${Styles.button} ${Styles.howItWorks}`}>
              How it works
            </button>
          </Link>
          <Link href="https://jolint-consent-form.vercel.app/">
            <button className={`${Styles.button} ${Styles.consentForm}`}>
              Consent form
            </button>
          </Link>
        </div>
      </div>

      <div className={Styles.imageContainer}>
        <Image
          className={Styles.image}
          src={HeroImage}
          alt="Image of three happy women"
        />
      </div>
    </section>
  )
}

export default HeroComponent
