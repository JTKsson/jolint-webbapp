import React from 'react'
import mentalHealth from '../assets/mental-health'

const MentalHealth = () => {
  return (
    <div>
      {mentalHealth.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <p>{item.readmore}</p>
        </div>
      ))}
    </div>
  )
}

export default MentalHealth
