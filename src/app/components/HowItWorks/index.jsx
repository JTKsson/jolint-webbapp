'use client'
import Styles from './howItWorks.module.css'

const HowItWorks = ({ data }) => {
  return (
    <div id="how-it-works" className={Styles.contentBox}>
      <h1 className={Styles.mainTitle}>How it works</h1>
      <div className={Styles.timeline}>
        {data.map((item, index) => (
          <div className={Styles.timelineItem} key={index}>
            <section className={Styles.contentCard}>
              <img className={Styles.image} src={item.image} alt={item.title} />
              <div className={Styles.eclipseDesktop}></div>
              <div className={Styles.cardContent}>
                <h2 className={Styles.cardTitle}>{item.title}</h2>
                <p className={Styles.contentText}>{item.content}</p>
              </div>
              {index >= 0 && index <= 3 && (
                <div className={Styles.eclipseMobile}></div>
              )}
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
