import React from 'react'
import inclusionContent from '../assets/inclusion-content'
import inclusionDiversity from '../assets/inclusion-diversity'
import mentalHealth from '../assets/mental-health'
import InclusionDropdownComponent from '../components/InclusionDropdownComponent'

const InclusionPage = () => {
  return (
    <>
      <div>
        <h2>About Inclusion at the Workplace</h2>
        {inclusionContent.map((inclusionItem, index) => (
          <div key={`inclusion-${index}`}>
            <h3>{inclusionItem.title}</h3>
            <p>{inclusionItem.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>About Diversity in Organizations</h2>
        {inclusionDiversity.map((item, index) => (
          <div key={`diversity-${index}`}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>About Mental Health at Work</h2>
        {mentalHealth.map((item, index) => (
          <div key={`mental-health-${index}`}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <InclusionDropdownComponent />
    </>
  )
}

export default InclusionPage
