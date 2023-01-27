import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <ChakraProvider theme={extendTheme({
            fonts: {
                heading: `cursive,"Hiragino Kaku Gothic ProN"`,
                body: `cursive,"Hiragino Kaku Gothic ProN"`,
            }
        })}>
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}