import { Grid, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GrinKit - Web3</title>
        <meta name="description" content="Template for web3 frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid bg='red' h='100%' placeItems='center' >
        <Text>
          GrinKit - Web3
        </Text>

      </Grid>
    </>
  )
}
