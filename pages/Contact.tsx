import Footer from '@/components/Footer '
import HeaderNav from '@/components/HeaderNav'
import { Box, ChakraProvider, Container, Heading, Text } from '@chakra-ui/react'

export default function ContactPage() {

    return(
        <>
        <ChakraProvider>
        <HeaderNav />
        <Container mt={'8'}>
        <Heading fontSize={'2xl'}>お問い合わせ</Heading>
        <Text>お問い合わせはこちらのフォームから受け付けております。お気軽にお問い合わせください！</Text>
        <Box mt={'4'} mb={'16'} w={'full'}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXtSSUTsuCr5040D0_Ynyf7APUEDU42FMzmLC4famcuLlBuw/viewform?embedded=true" width="100%" height="1000px" scrolling="no">読み込んでいます…</iframe>
        </Box>
        </Container>
        <Footer />
        </ChakraProvider>
        </>
    )

}