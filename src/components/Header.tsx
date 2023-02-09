import { Box } from '@chakra-ui/react'
import Head from 'next/head'

type HeaderProps = {
  title?: string
}

function Header(props: HeaderProps) {
  return (
    <>
      <Head>
        <title>Meddash - {props.title ?? 'Gerenciamento médico simplificado'}</title>
      </Head>
      <Box>
        This is the header
      </Box>
    </>
  )
}

export { Header }
