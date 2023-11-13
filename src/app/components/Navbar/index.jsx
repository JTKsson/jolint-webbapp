'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.logoContainer}>
        <Link className={Styles.logo} href="/">
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

      <div
        className={`${Styles.navbarButton} ${isMenuOpen ? Styles.open : ''}`}
      >
        <ul>
          <li>
            <Link href="/" as="/#how-it-works">
              How it works
            </Link>
          </li>
          <li>
            <a href="https://jolint-webbapp.vercel.app/inclusion">
              {' '}
              Why Inclusion
            </a>
          </li>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link
              href="https://jolint-consent-form.vercel.app/"
              target="_blank"
            >
              <button className={Styles.consentButton}>Consent form</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
