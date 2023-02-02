import { ChakraProvider, Heading, useBreakpointValue, Text, Stack, CardBody,Image, Card, Divider, ButtonGroup, Button, CardFooter } from "@chakra-ui/react";
import Link from "next/link";
import { UrlObject } from "url";

export const BlogCard =( props: { link: string | UrlObject; img: string | undefined; } ) => {

    const isPc = useBreakpointValue({ base: false, md: true });

    return(
        <>
        <ChakraProvider>
        <Link href={props.link}>
      <Card maxW='sm' mt={'8'} p={'4'} shadow={'base'}>
      <Image src={props.img} alt='ブログカードのイメージ' borderRadius='lg' w={'auto'} h={'56'} sizes={'contain'} />
      <CardBody px={'1'} py={'2'}>
        <Stack spacing='1'>
          <Heading size='md'>タイトル</Heading>
          <Text>
            こんな内容
          </Text>
        </Stack>
      </CardBody>
      <CardFooter p={'1'}>
        <ButtonGroup display={'flex'} justifyContent={'flex-end'} w={'full'}>
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
