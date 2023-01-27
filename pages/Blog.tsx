import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer ';

export default function BlogPage() {

    return(
        <>
    <Head>
        <title>Create Next App</title>
    </Head>
        <ChakraProvider>
        <Header />
        <HeaderNav />
        <Container h='500px'>
        <Heading fontSize={'md'}>This is Blog</Heading>
        </Container>
        </ChakraProvider>
        <Footer />
        </>
    )
}