import { ChakraProvider, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '@/components/Footer ';
import Hero from '@/components/Heoro';
import Profile from '@/components/Profile';
import { BlogCard } from '@/components/BlogCard';
import SnsButton from '@/components/SnsButton';
import Header from '@/components/Header';

export default function AboutPage() {

    return(
        <>
    <Head>
        <title>Bright Feelings</title>
    </Head>
        <ChakraProvider>
        <Header />
        <Hero />
        <Container>
            <Profile />
            <SnsButton />
            <BlogCard link={'/'} img={'./heroSample.jpg'}/>
            <BlogCard link={'/'} img={'./heroSample.jpg'}/>
            <BlogCard link={'/'} img={'./heroSample.jpg'}/>
        </Container>
        </ChakraProvider>
        <Footer />
        </>
    )
}