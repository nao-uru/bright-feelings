import { ChakraProvider, Heading, extendTheme } from '@chakra-ui/react'
import Header from '@/components/Header'

export default function AboutPage() {

    return(
        <>
        <ChakraProvider theme={extendTheme({
            fonts: {
                heading: `cursive,"Hiragino Kaku Gothic ProN"`,
                body: `cursive,"Hiragino Kaku Gothic ProN"`,
            }
        })}>
            <Header />
        <Heading>This is Aout page</Heading>
        </ChakraProvider>
        </>
    )

}