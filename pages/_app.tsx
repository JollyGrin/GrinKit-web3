import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { defaultTheme } from '@/styles/defaultTheme';



const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: "" }),
  publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: "",
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
