'use client'
import { useState } from 'react'
import Image from 'next/image'
import Styles from './inclusionDropdownStyleComponent.module.css'

const ContentCard = ({ title, imageSrc, content }) => {
  const [expand, setExpand] = useState(false)

  const handleCardClick = () => {
    setExpand(!expand)
  }

  return (
    <div className={Styles.cardContent}>
      <div className={Styles.cardHeader} onClick={handleCardClick}>
        <Image src={imageSrc} width={278} height={219} alt="" />
        <h2>{title}</h2>
      </div>
      {expand && <div className={Styles.cardExtended}>{content}</div>}
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
      <div className={Styles.container1}>
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
      <div className={Styles.container2}>
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
      <div className={Styles.container3}>
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
