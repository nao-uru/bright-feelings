import { Box, ChakraProvider, Flex, Heading, List, useBreakpointValue, Text, Stack, CardBody,Image, Card, Divider, ButtonGroup, Button, CardFooter } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";
import { UrlObject } from "url";

export const BlogCard =( props: { link: string | UrlObject; img: string | undefined; } ) => {

    const isPc = useBreakpointValue({ base: false, md: true });

    // if(isPc) {
    //     return(
    //         <>
            
    //         </>
    //     )
    // }

    return(
        <>
        <ChakraProvider>
        <Link href={props.link}>
      <Card maxW='sm' mt={'8'}>
      <Image src={props.img} alt='ブログカードのイメージ' borderRadius='lg'/>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>タイトル</Heading>
          <Text>
            こんな内容
          </Text>
          
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2' display={'flex'} justifyContent={'flex-end'} w={'full'}>
          <Button variant='solid' colorScheme='blue' >
            ブログを読む
          </Button>
        </ButtonGroup>
      </CardFooter>
      </Card>
        </Link>
        </ChakraProvider>
        </>
    )

    
}
