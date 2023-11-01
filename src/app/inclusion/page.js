import InclusionDropdownComponent from "../components/InclusionDropdownComponent"
import React from 'react'
import mentalHealth from '../assets/mental-health'

const InclusionPage = () => {
  return (
    <div>
      <h2>Inclusion page</h2>
      <InclusionDropdownComponent/>
      <div>
        <h3>About mental health at work</h3>
        {mentalHealth.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InclusionPage
