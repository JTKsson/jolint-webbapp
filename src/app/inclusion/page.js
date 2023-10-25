import React from 'react'
import inclusionContent from '../assets/inclusion-content'
;('../assets/inclusion-content')

const InclusionPage = () => {
  return (
    <div>
      {inclusionContent.map((inclusionItem, index) => (
        <div key={index}>
          <h3>{inclusionItem.title}</h3>
          <p>{inclusionItem.content}</p>
        </div>
      ))}
    </div>
  )
}

export default InclusionPage
