import { Grid, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import { Navbar } from "@/components/Nav";
import { VerifyButton } from "@/components/VerifyButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>GrinKit - Web3</title>
        <meta name="description" content="Template for web3 frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Grid h="100%" placeItems="center">
        <VerifyButton />
      </Grid>
    </>
  );
}
