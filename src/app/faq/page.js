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
      <div className={style.wrapper}>
        <div className={style.heading}>
          <h1 className={style.h1}>FAQ</h1>
          <p className={style.p}>Learn more about Jolint and our work method</p>
        </div>
        <div className={style.questionsFlexContainer}>
          {faqContent.map((faqItem, index) => (
            <div
              className={style.questionContainer}
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className={style.questionHeader}>
                <h3>{faqItem.Q}</h3>
                <span
                  className={
                    expandedIndex === index
                      ? style.arrowIcon + ' ' + style.rotateArrow
                      : style.arrowIcon
                  }
                ></span>
              </div>
              {expandedIndex === index && (
                <div className={style.answerContainer}>
                  <p>{faqItem.A}</p>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default FaqPage
