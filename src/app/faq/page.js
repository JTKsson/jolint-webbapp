import React, { useState } from 'react'
import faqContent from '../assets/faq-content'
import style from './faq.module.css'

const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className={style.faqPage}>
      <h1>FAQ</h1>
      <p>Learn more about Jolint and our work method</p>
      <div className={style.questionsFlexContainer}>
        {faqContent.map((faqItem, index) => (
          <div
            className={style.questionContainer}
            key={index}
            onClick={() => toggleAnswer(index)}
          >
            <h3>
              {faqItem.Q}
              <span
                className={
                  expandedIndex === index
                    ? `${style.arrowIcon} ${style.rotateArrow}`
                    : style.arrowIcon
                }
              />
            </h3>
            {expandedIndex === index && <p>{faqItem.A}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqPage
