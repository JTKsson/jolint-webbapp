'use client'
import Link from 'next/link'
import Image from 'next/image'
import Styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={Styles.Navbar}>
      <Link className={Styles.logo} href="#" target="_blank">
        <Image
          
          src="/JOLINT-logo.svg"
          width={120}
          height={35.518}
          alt="Jolint logo"
        />
      </Link>
      <div className={Styles.navbarButton}>
        <ul>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Inclusion</a>
          </li>
          <li>
            <a href="#">Faq</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <a href="#"><button className={Styles.consentButton}>Consent form</button></a>
    </nav>
  )
}
export default Navbar