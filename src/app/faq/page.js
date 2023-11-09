'use client'
import React, { useState } from 'react'
import faqContent from '../assets/faq-content'
import style from './faq.module.css'

const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className={style.faqPage}>
      <h1 className={style.h1}></h1>
      <p className={style.p}></p>
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
                    ? style.arrowIcon + ' ' + style.rotateArrow
                    : style.arrowIcon
                }
              ></span>
            </h3>
            {expandedIndex === index && (
              <div className={style.answerContainer}>
                <p>{faqItem.A}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqPage
