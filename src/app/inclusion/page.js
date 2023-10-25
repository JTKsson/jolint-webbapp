import React from 'react'
import inclusionDiversity from '../assets/inclusion-diversity'

const inclusion = () => {
  return (
    <div>
      {inclusionDiversity.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <p>{item.readmore}</p>
        </div>
      ))}
    </div>
  )
}

export default inclusion;
