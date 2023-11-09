'use client'
import CountUp from 'react-countup'
import Styles from './inclusionPageTitle.module.css'

const InclusionPage = () => {
  return (
    <div className={Styles.inclusionStats}>
      <h1 className={Styles.title}>Inclusion makes a difference</h1>
      <p className={Styles.subTitle}>
        Organisations with higher inclusion among coworkers have according to
        [source]:{' '}
      </p>
      <div className={Styles.contentBox}>
        <div className={Styles.contentCard}>
          <CountUp className={Styles.number} end={31} duration={7} suffix="%" />
          <p className={Styles.statName}>Less isolation</p>
        </div>
        <div className={Styles.contentCard}>
          <CountUp className={Styles.number} end={41} duration={7} suffix="%" />
          <p className={Styles.statName}>Lower sick leave</p>
        </div>
        <div className={Styles.contentCard}>
          <CountUp className={Styles.number} end={59} duration={7} suffix="%" />
          <p className={Styles.statName}>Lower staff turnover</p>
        </div>
        <div className={Styles.contentCard}>
          <CountUp className={Styles.number} end={61} duration={7} suffix="%" />
          <p className={Styles.statName}>More satisfied employees</p>
        </div>
      </div>
    </div>
  )
}
export default InclusionPage
