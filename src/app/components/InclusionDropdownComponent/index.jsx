'use client'
import { useState } from 'react'
import Image from 'next/image'
import Styles from './inclusionDropdownStyleComponent.module.css'

const ContentCard = ({ title, imageSrc, content }) => {
  const [expand, setExpand] = useState(false)

  const handleCardClick = () => {
    setExpand(!expand)
  }

  const handleMouseLeave = () => {
    setExpand(!expand)
  }

  return (
    <div className={Styles.cardContent}>
      <div className={Styles.cardHeader} onClick={handleCardClick}>
        <Image src={imageSrc} width={349} height={266} alt="" />
        <p className={Styles.cardTitle}>{title}</p>
      </div>

      {expand && (
        <div className={Styles.cardExtended} onMouseLeave={handleMouseLeave}>
          {content}
        </div>
      )}
    </div>
  )
}

const InclusionDropdownComponent = ({
  inclusionContent,
  inclusionDiversity,
  mentalHealth,
}) => {
  return (
    <div className={Styles.inclusionBody}>
      <div className={Styles.titleContent}>
        <h1>Why inclusion is important</h1>
        <p>
          Inclusion and diversity play crucial roles in helping a workplace
          thrive. By fostering an inclusive environment, several positive
          outcomes can be achieved, including happiness, creativity, innovation,
          and success. Let's explore each of these aspects.
        </p>
      </div>

      <div className={Styles.containerBox}>
        <h2 className={Styles.titleTwo}>About inclusion at workplace</h2>
        <div className={Styles.cardsContainer}>
          {inclusionContent.map((item, index) => (
            <ContentCard
              key={`inclusion-${index}`}
              title={item.title}
              content={item.content}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>

      <div className={Styles.containerBox}>
        <h2 className={Styles.titleTwo}>About diversity in organizations</h2>
        <div className={Styles.cardsContainer}>
          {inclusionDiversity.map((item, index) => (
            <ContentCard
              key={`diversity-${index}`}
              title={item.title}
              content={item.content}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>

      <div className={Styles.containerBox}>
        <h2 className={Styles.titleTwo}>About mental health at work</h2>
        <div className={Styles.cardsContainer}>
          {mentalHealth.map((item, index) => (
            <ContentCard
              key={`mental-health-${index}`}
              title={item.title}
              content={item.content}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InclusionDropdownComponent
