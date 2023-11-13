'use client'
import Styles from './howItWorks.module.css'

const HowItWorks = ({ data }) => {
  return (
    <div className={Styles.contentBox} id="how-it-works">
      <h1 className={Styles.mainTitle}>How it works</h1>
      {data.map((item, index) => (
        <section className={Styles.contentCard} key={index}>
          <img className={Styles.image} src={item.image} />
          <div className={Styles.eclipseDesktop}></div>
          <div className={Styles.cardContent}>
            <h2 className={Styles.cardTitle}>{item.title}</h2>
            <p className={Styles.contentText}>{item.content}</p>
          </div>
          {index >= 0 && index <= 3 && (
            <div className={Styles.eclipseMobile}></div>
          )}{' '}
        </section>
      ))}
    </div>
  )
}
export default HowItWorks
