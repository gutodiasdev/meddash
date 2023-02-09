import { Inter } from '@next/font/google'
import { Footer, Header } from '../components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <h1>App is working!</h1>
      <Footer />
    </>
  )
}
