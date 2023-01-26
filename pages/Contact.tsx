import { ChakraProvider, Heading, extendTheme } from '@chakra-ui/react'
import Header from '@/components/Header'

export default function ContactPage() {

    return(
        <>
        <ChakraProvider theme={extendTheme({
            fonts: {
                heading: `cursive,"Hiragino Kaku Gothic ProN"`,
                body: `cursive,"Hiragino Kaku Gothic ProN"`,
            }
        })}>
            <Header />
        <Heading>This is Contact page</Heading>
        </ChakraProvider>
        </>
    )

}