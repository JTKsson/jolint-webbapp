'use client'
import { useState } from 'react'
import Image from 'next/image'

const ContentCard = ({ title, imageSrc, content }) => {
  const [expand, setExpand] = useState(false)

  const handleCardClick = () => {
    setExpand(!expand)
  }

  return (
    <div className="cardContent">
      <div className="cardHeader" onClick={handleCardClick}>
        <Image src={imageSrc} width={278} height={219} alt="" />
        <h2>{title}</h2>
      </div>
      {expand && <div className="cardExtended">{content}</div>}
    </div>
  )
}

const InclusionDropdownComponent = ({
  inclusionContent,
  inclusionDiversity,
  mentalHealth,
}) => {
  return (
    <>
      <h2>About inclusion at workplace</h2>
      <div className="container1">
        {inclusionContent.map((item, index) => (
          <ContentCard
            key={`inclusion-${index}`}
            title={item.title}
            content={item.content}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      <h2>About diversity in organizations</h2>
      <div className="container2">
        {inclusionDiversity.map((item, index) => (
          <ContentCard
            key={`diversity-${index}`}
            title={item.title}
            content={item.content}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      <h2>About mental health at work</h2>
      <div className="container3">
        {mentalHealth.map((item, index) => (
          <ContentCard
            key={`mental-health-${index}`}
            title={item.title}
            content={item.content}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </>
  )
}

export default InclusionDropdownComponent
