import Footer from '@/components/Footer '
import Head from 'next/head';
import HeaderNav from '@/components/Header'
import { Box, ChakraProvider, Container, Heading, Text } from '@chakra-ui/react'

export default function ContactPage() {

    return(
        <>
        <Head>
        <title>Bright Feelings</title>
        </Head>
        <ChakraProvider>
        <HeaderNav />
        <Container mt={'8'} maxW='800px'>
        <Heading fontSize={'2xl'} fontFamily={'body'}>お問い合わせ</Heading>
        <Text>お問い合わせはこちらのフォームから受け付けております。お気軽にお問い合わせください！</Text>
        </Container>
        <Box mt={'4'}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXtSSUTsuCr5040D0_Ynyf7APUEDU42FMzmLC4famcuLlBuw/viewform?embedded=true" width="100%" height="1000px" scrolling="no">読み込んでいます…</iframe>
        </Box>
        <Footer />
        </ChakraProvider>
        </>
    )

}