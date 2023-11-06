import React from 'react'
import faqContent from '../assets/faq-content'

const faqPage = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Learn more about Jolint and our work method</p>
      {faqContent.map((faqPage, index) => (
        <div key={index}>
          <h3>{faqPage.Q}</h3>
          <p>{faqPage.A}</p>
        </div>
      ))}
    </div>
  )
}

export default faqPage
