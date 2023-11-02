import React from 'react'
import inclusionDiversity from '../assets/inclusion-diversity'

const InclusionPage = () => {
  return (
    <div>
      {inclusionDiversity.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default InclusionPage;
