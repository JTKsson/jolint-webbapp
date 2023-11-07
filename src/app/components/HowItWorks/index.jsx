'use client'
import Styles from './howItWorks.module.css'

const HowItWorks = ({ data }) => {
  return (
    <div className={Styles.contentBox}>
      <h1 className={Styles.mainTitle}>How it works</h1>
      {data.map((item, index) => (
        <section className={Styles.contentCard} key={index}>
          <img className={Styles.image} src={item.image} />
          <div className={Styles.eclipse}></div>
          <div className={Styles.cardContent}>
            <h2 className={Styles.cardTitle}>{item.title}</h2>
            <p className={Styles.textContent}>{item.content}</p>
          </div>
        </section>
      ))}
    </div>
  )
}
export default HowItWorks
