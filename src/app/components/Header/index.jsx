import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <Link href= "https://jolint.com/" target="_blank">
      <Image
        src="/JOLINT-logo.svg.jpg"

        width={120}
        height={35.518}
        alt="Jolint logo"
        />
    </Link>
    </>
  )
}

export default Header
