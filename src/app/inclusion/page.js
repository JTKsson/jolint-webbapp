import React from 'react'
import inclusionContent from '../assets/inclusion-content'
import inclusionDiversity from '../assets/inclusion-diversity'
import mentalHealth from '../assets/mental-health'
import InclusionDropdownComponent from '../components/InclusionDropdownComponent'

const InclusionPage = () => {
  return (
    <>
      <InclusionDropdownComponent
        inclusionContent={inclusionContent}
        inclusionDiversity={inclusionDiversity}
        mentalHealth={mentalHealth}
      />
    </>
  )
}
export default InclusionPage
