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
          title="How diversity helps in work"
          imageSrc="/bild1.png"
          content=" By welcoming individuals from diverse backgrounds, experiences, and perspectives, businesses open doors to a wealth of fresh ideas and insights."
        />
        <ContentCard
          title="Creating an inclusive culture"
          imageSrc="/bild2.png"
          content="Show solidarity with marginalized groups and actively support their inclusion. Advocate for equal opportunities, fair treatment, and representation in decision-making processes."
        />
        <ContentCard
          title="The power of diversity"
          imageSrc="/bild3.png"
          content="Appreciate and value the diverse backgrounds, experiences, and perspectives of your colleagues. Engage in conversations and initiatives that celebrate diversity, diversity-focused training programs."
        />
      </div>

      <h2>About diversity in organizations</h2>
      <div className="container2">
        <ContentCard
          title="How inclusion helps in work"
          imageSrc="/bild4.png"
          content="Be willing to lend a hand to your colleagues when they need assistance. Collaborate and share knowledge and resources to foster a sense of teamwork."
        />
        <ContentCard
          title="Building a culture of inclusion"
          imageSrc="/bild5.png"
          content="Increased employee engagement and satisfaction: In an inclusive culture, employees feel a sense of belonging and acceptance. They are more engaged and motivated to perform at their best."
        />
        <ContentCard
          title="Why equality is important"
          imageSrc="/bild6.png"
          content="Equality ensures that every individual is treated fairly and without discrimination. It upholds the principle that all employees, regardless of their race, gender, age, or other, should have equal opportunities."
        />
      </div>

      <h2>About mental health at work</h2>
      <div className="container3">
        <ContentCard
          title="Creating a supportive work environment"
          imageSrc="/bild7.png"
          content="Be willing to lend a hand to your colleagues when they need assistance. Collaborate and share knowledge and resources to foster a sense of teamwork."
        />
        <ContentCard
          title="Addressing mental health in the workplace"
          imageSrc="/bild8.png"
          content="Offer support during challenging times. Be there for your coworkers during difficult periods, such as personal crises or work-related challenges."
        />
        <ContentCard
          title="Work-life balance"
          imageSrc="/bild9.png"
          content="Promote work-life balance. Encourage a healthy work-life balance among your peers. Respect personal boundaries and avoid unnecessarily pressuring colleagues to work beyond their capacity."
        />
      </div>
    </>
  )
}

export default InclusionDropdownComponent
