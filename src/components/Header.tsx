import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { Poppins } from '@next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const poppins = Poppins({ weight: '600', subsets: ['latin'] })

const headerLink = [
  {
    destination: '/quem-somos',
    name: 'Quem somos',
  },
  {
    destination: '/solucoes',
    name: 'Soluções',
  },
  {
    destination: '/preços',
    name: 'Preços',
  },
  {
    destination: '/contato',
    name: 'Contato',
  },
  {
    destination: '/login',
    name: 'Login',
  },
]

function Header() {
  return (
    <>
      <Head>
        <title>Meddash - Gerenciamento médico simplificado</title>
      </Head>
      <Box>
        <Grid
          maxWidth={{ xl: '1440px' }}
          margin='0 auto'
          height={{ xl: '88px' }}
          alignItems={{ xl: 'center' }}
          gridTemplateColumns={{ xl: '150px 10fr 1fr' }}
          gap={{ xl: '56px' }}
        >
          <Image src='/images/logo.png' width={150} height={50} alt='Logo MedDash' />
          <Flex
            as={'nav'}
            gap={{ xl: '32px' }}
            justifyContent={{ xl: 'flex-end' }}
            fontFamily={poppins.style.fontFamily}
            fontWeight={poppins.style.fontWeight}
            color={'gray.600'}
          >
            {headerLink.map((link, i) => {
              return (
                <Link href={link.destination} key={i}>
                  {link.name}
                </Link>
              )
            })}
          </Flex>
          <Button
            colorScheme={'purple'}
            boxShadow={'xl'}
          >
            Criar conta
          </Button>
        </Grid>
      </Box>
    </>
  )
}

export { Header }
