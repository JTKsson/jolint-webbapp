import React from 'react'
import Styles from './about.module.css'
import Image from 'next/image'
import Klaudia from '@/../public/Klaudia.png'
import Faheem from '@/../public/Faheem.png'

function About() {
  return (
    <div className={Styles.aboutBody}>
      <h1 className={Styles.title}>About us</h1>
      <div className={Styles.contentBox}>
        <h2 className={Styles.subTitle}>Our mission</h2>
        <p className={Styles.content}>
          At Jolint, we are driven by a passion for{' '}
          <span className={Styles.bold}>improving workplaces</span> and creating
          a better world for everyone. We make sure to keep ethics and privacy
          at the forefront when gathering data. Throughout our journey, we've
          stayed committed to these principles, ensuring that
          <span className={Styles.bold}>
            individuals' information is handled with care and respect.
          </span>
          Discover the journey of Jolint, and join us in our quest to make the
          world a better place, one company at a time. With our innovative
          approach, cutting-edge technologies, and a team of experts, we are
          committed to creating a
          <span className={Styles.bold}>
            more inclusive and equitable work culture for all.
          </span>
        </p>
        <h2 className={Styles.subTitle}>Co-founders:</h2>
        <div className={Styles.founderBox}>
          <div className={Styles.founder}>
            <Image className={Styles.image} src={Klaudia} alt="Klaudia Mur" />
            <div className={Styles.founderContent}>
              <h3 className={Styles.founderName}>Klaudia Mur</h3>
              <p className={Styles.content}>
                I am a data scientist and physicist. My background in Complex
                Adaptive Systems has fueled my passion for understanding how
                people interact, communicate, and collaborate in the workplace.
                My mission is to use data-driven analysis to make the workplace
                a better place for employees, by understanding the complexities
                of human interactions and finding ways to improve them. Join me
                on my journey to enhance workplace culture and improve the work
                environment. With my expertise in data analysis and
                understanding of human behavior, I am committed to leading the
                way towards a more inclusive and equitable work culture for all.
              </p>
            </div>
          </div>
          <div className={Styles.founder}>
            <Image className={Styles.image} src={Faheem} alt="Faheem Shah" />
            <div className={Styles.founderContent}>
              <h3 className={Styles.founderName}>Faheem Shah</h3>
              <p className={Styles.content}>
                As the co-founder of Jolint, I bring a wealth of expertise in
                organizational communication and collaboration to the table.
                With a background in international politics, communication
                studies, and specialized training in these areas, I understand
                the intricacies and nuances of effective communication within
                organizations. My passion for this field led me to start Jolint,
                with the goal of empowering companies to create more inclusive
                and equitable work cultures. Join me in my journey with Jolint,
                as we work together to improve communication and collaboration
                within organizations for a more inclusive work environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
