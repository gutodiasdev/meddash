import { Box } from '@chakra-ui/react'
import { Header, Hero } from '../components'

export default function Home() {
  return (
    <>
      <Header />
      <Box>
        <Box
          maxWidth={{ xl: '1440px' }}
          margin={'0 auto'}
        >
          <Hero />
        </Box>
      </Box>
    </>
  )
}
