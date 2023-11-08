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
        {content}
      </div>
      {expand && <div className="cardExtended">{content}</div>}
    </div>
  )
}

const InclusionDropdownComponent = () => {
  return (
    <>
      <h2>About inclusion at workplace</h2>
      <div className="container1">
        <ContentCard
          imageSrc="/bild1.png"
        />
        <ContentCard
          imageSrc="/bild2.png"
        />
        <ContentCard
          imageSrc="/bild3.png"
        />
      </div>

      <h2>About diversity in organizations</h2>
      <div className="container2">
        <ContentCard
          imageSrc="/bild4.png"
        />
        <ContentCard
          imageSrc="/bild5.png"
        />
        <ContentCard
          imageSrc="/bild6.png"
        />
      </div>

      <h2>About mental health at work</h2>
      <div className="container3">
        <ContentCard
          imageSrc="/bild7.png"
          />
        <ContentCard
          imageSrc="/bild8.png"
        />
        <ContentCard
          imageSrc="/bild9.png"
        />
      </div>
    </>
  )
}

export default InclusionDropdownComponent
