import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer ';

export default function AboutPage() {

    return(
        <>
    <Head>
        <title>Create Next App</title>
    </Head>
        <ChakraProvider>
        <Header />
        <HeaderNav />
        <Container h='500px'>
        <Heading fontSize={'md'}>This is About</Heading>
        </Container>
        </ChakraProvider>
        <Footer />
        </>
    )
}