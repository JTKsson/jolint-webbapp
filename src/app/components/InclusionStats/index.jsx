import { InclusionStatsContent } from '@/assets/inclutionStatsContent'
import Styles from './inclusionStats.module.css'

const InclusionStats = () => {
  return (
    <div className={Styles.contentBox}>
      <h3>Inclusion makes a difference</h3>
      <p>
        Organisations with higher inclusion among coworkers have according to
        [source]:{' '}
      </p>
      <div className={Styles.contentCards}>
        {InclusionStatsContent.map((stat, index) => (
          <div className={Styles.contentCard} key={index}>
            <p>{stat.number}</p>
            <p>{stat.numberOf}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InclusionStats
