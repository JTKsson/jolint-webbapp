'use client'
import React, { useState } from 'react'
import faqContent from '../assets/faq-content'
import style from './faq.module.css'

const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null) // If clicked on the expanded item, collapse it
    } else {
      setExpandedIndex(index) // Otherwise, expand the clicked item
    }
  }

  return (
    <div className={style.faqPage}>
      <div className={style.questionsFlexContainer}>
        {faqContent.map((faqItem, index) => (
          <div
            className={style.questionContainer}
            key={index}
            onClick={() => toggleAnswer(index)}
          >
            <h3>Q: {faqItem.Q}</h3>
            {expandedIndex === index && <p>A: {faqItem.A}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqPage
