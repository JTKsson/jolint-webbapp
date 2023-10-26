import { HeroContent } from '../../assets/heroContent'
import Image from 'next/image'
import Styles from './hero.module.css'
import HeroImage from 'public/ellipse-34.png'

const HeroComponent = () => {
  return (
    <section className={Styles.mainBox}>
      <div className={Styles.contentBox}>
        <h2 className={Styles.title}>{HeroContent.title}</h2>
        <p className={Styles.content}>{HeroContent.content}</p>
        <div className={Styles.buttons}>
          <button className={Styles.button}>Why inclusion</button>
          <button className={Styles.button}>How it works</button>
          <button className={Styles.button}>Consent form</button>
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
