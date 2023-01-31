import { ChakraProvider, Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer ';
import { BlogCard } from '@/components/BlogCard';

export default function BlogPage() {

    return(
        <>
    <Head>
        <title>Create Next App</title>
    </Head>
        <ChakraProvider>
        <Header />
        <HeaderNav />
        <Container>
        <Heading fontSize={'2xl'}>ブログ</Heading>
        <Text>生活が豊かになるブログ発信中です！</Text>
        <BlogCard link={'/'} img={'/'} />
        <BlogCard link={'/'} img={'/'} />
        <BlogCard link={'/'} img={'/'} />
        <BlogCard link={'/'} img={'/'} />
        </Container>
        </ChakraProvider>
        <Footer />
        </>
    )
}