import { ChakraProvider, Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import HeaderNav from '@/components/Header';
import Footer from '@/components/Footer ';
import { BlogCard } from '@/components/BlogCard';

export default function BlogPage() {

    return(
        <>
    <Head>
        <title>Bright Feelings</title>
    </Head>
        <ChakraProvider>
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