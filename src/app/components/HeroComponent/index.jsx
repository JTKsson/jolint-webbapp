import { HeroContent } from '../../assets/heroContent'
import Image from 'next/image'
import Styles from './hero.module.css'
import HeroImage from 'public/heroimage.png'

const HeroComponent = () => {
  return (
    <section className={Styles.mainBox}>
      <div className={Styles.contentCard}>
        <h2 className={Styles.title}>{HeroContent.title}</h2>
        <p className={Styles.content}>{HeroContent.content}</p>
        <div className={Styles.buttons}>
          <button className={Styles.button}>Fubar</button>
          <button className={Styles.button}>Fubar</button>
          <button className={Styles.button}>Fubar</button>
        </div>
      </div>

      <Image
        className={Styles.image}
        src={HeroImage}
        alt="Image of three happy women"
      />
    </section>
  )
}

export default HeroComponent
