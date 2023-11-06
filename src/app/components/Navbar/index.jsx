'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Styles from "./navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.logoContainer}>
        <Link className={Styles.logo} href="#" target="_blank">
          <Image
            src="/JOLINT-logo.svg"
            width={120}
            height={35.518}
            alt="Jolint logo"
            />
        </Link>
      </div>

      <button className={Styles.hamburgerButton} onClick={handleMenu}>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
      </button>

      <div className={`${Styles.navbarButton} ${isMenuOpen ? Styles.open : ''}`}>
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
          <li>    
            <a href="#"><button className={Styles.consentButton}>Consent form</button></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar