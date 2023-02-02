import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import HeaderNav from '@/components/Header';
import Footer from '@/components/Footer ';

export default function AboutPage() {

    return(
        <>
    <Head>
        <title>Bright Feelings</title>
    </Head>
        <ChakraProvider>
        <HeaderNav />
        <Container h='500px'>

        </Container>
        </ChakraProvider>
        <Footer />
        </>
    )
}