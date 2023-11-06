import React from 'react'
import inclusionContent from '../assets/inclusion-content'
import InclusionDropdownComponent from '../components/InclusionDropdownComponent'

const InclusionPage = () => {
  return (
    <>
      <div>
        <h2>Inclusion page</h2>
        {inclusionContent.map((inclusionItem, index) => (
          <div key={index}>
            <h3>{inclusionItem.title}</h3>
            <p>{inclusionItem.content}</p>
          </div>
        ))}
      </div>
      <InclusionDropdownComponent />
    </>
  )
}

export default InclusionPage
