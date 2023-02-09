import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Open_Sans, Poppins } from '@next/font/google'
import Image from 'next/image'

const heading = Poppins({ subsets: ['latin'], weight: '600', preload: true })
const paragraph = Open_Sans({ subsets: ['latin'], weight: '400', preload: true })

function Hero() {
  return (
    <Flex
      minHeight={{ xl: 'calc(100vh - 88px)' }}
      textAlign={'center'}
      flexDir={'column'}
      justifyContent={'space-between'}
      justifyItems={'center'}
      alignItems={'center'}
    >
      <Box>
        <Heading
          as='h1'
          pt={{ xl: '104px' }}
          fontFamily={heading.style.fontFamily}
          fontSize={{ xl: '6xl' }}
          color={'gray.700'}
        >
          Gerenciamento médico facilitado
        </Heading>
        <Text
          pt={{ xl: '32px' }}
          fontFamily={paragraph.style.fontFamily}
          fontSize={{ xl: 'xl' }}
          color={'gray.500'}
        >
          Mude a forma como controla, registra e analisa as informações<br></br> dos
          seus pacientes com o MedDash
        </Text>
      </Box>
      <Image src='/images/hero-image.webp' width={1350} height={859} alt='Image' priority />
    </Flex>
  )
}

export { Hero }
