'use client'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="">
      <Link href="#" target="_blank">
        <Image
          src="/JOLINT-logo.svg"
          width={120}
          height={35.518}
          alt="Jolint logo"
        />
      </Link>
      <div className="navbar">
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
            <a href="#">Contact Us</a>
          </li>
          <li className="consent Button">
            <a href="#">consent form</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
