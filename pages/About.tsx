import { ChakraProvider, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '@/components/Footer ';
import Header from '@/components/Header';

export default function AboutPage() {

    return(
        <>
    <Head>
        <title>Bright Feelings</title>
    </Head>
        <ChakraProvider>
        <Header />
        <Container h='500px'>

        </Container>
        </ChakraProvider>
        <Footer />
        </>
    )
}