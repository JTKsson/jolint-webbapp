'use client'

import { AdvantagesContent } from '../../assets/advantages-content'
import Styles from './advantages.module.css'
import { useState } from 'react'

const Advantages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [clickedIndex, setClickedIndex] = useState(null)

  const handleItemClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index)
  }

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div className={Styles.advantages}>
      <h2>Advantages with Jolint at your workplace</h2>
      <div className={`${Styles.contentBox} ${Styles.hoverEffect}`}>
        {AdvantagesContent.map((item, index) => (
          <div
            className={Styles.contentCard}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === index ? item.hoverContent : item.content}
          </div>
        ))}
      </div>

      <div className={`${Styles.contentBox} ${Styles.onClickEffect}`}>
        {AdvantagesContent.map((item, index) => (
          <div
            className={Styles.contentCard}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            {clickedIndex === index ? item.hoverContent : item.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advantages
