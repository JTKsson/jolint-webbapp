import { AdvantagesContent } from '../../assets/advantages-content'
import Styles from './advantages.module.css'

const Advantages = () => {
  return (
    <div className={Styles.advantages}>
      <h2>Advantages with Jolint at your workplace</h2>
      <div className={Styles.contentBox}>
        {AdvantagesContent.map((item, index) => (
          <p className={Styles.contentCard} key={index}>
            {item.content}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Advantages
