import { AdvantagesContent } from '../../assets/advantages-content'
import Styles from './advantages.module.css'

const Advantages = () => {
  return (
    <div className={Styles.advantages}>
      <h2 className={Styles.title}>Advantages with Jolint at your workplace</h2>
      <div className={Styles.contentBox}>
        {AdvantagesContent.map((item, index) => (
          <div className={Styles.contentCard}>
            <p key={index}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advantages
