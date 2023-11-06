import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jolint | Info',
  description: 'Employee info page for getting to know Jolint',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
