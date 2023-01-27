import Footer from '@/components/Footer '
import HeaderNav from '@/components/HeaderNav'
import { ChakraProvider, Container, Heading } from '@chakra-ui/react'

export default function ContactPage() {

    return(
        <>
        <ChakraProvider>
        <HeaderNav />
        <Container h={'500px'}>
        <Heading fontSize={'md'}>This is Contact</Heading>
        </Container>
        <Footer />
        </ChakraProvider>
        </>
    )

}