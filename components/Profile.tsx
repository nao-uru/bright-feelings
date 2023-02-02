import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Profile() {
    return (
      <Center py={6}>
        <Box
          maxW={'full'}
          w={'full'}
        //   bg={useColorModeValue('white', 'gray.900')}
        //   boxShadow={'2xl'}
        //   rounded={'lg'}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              '/icon.png'
            }
            mb={4}
            // pos={'relative'}
            // _after={{
            //   content: '""',
            //   w: 4,
            //   h: 4,
            //   bg: 'green.300',
            //   border: '2px solid white',
            //   rounded: 'full',
            //   pos: 'absolute',
            //   bottom: 0,
            //   right: 3,
            // }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            かりこみ けいこ
          </Heading>
          {/* <Text fontWeight={600} color={'gray.500'} mb={4}>
            @lindsey_jam3s
          </Text> */}
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')} >
            「輝かしいセカンドライフを整える提案」<br />
            突然の引越しをきっかけに得た片付けの大切さを
            多くの人に伝えるために片付けアドバイザー
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={4}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #片付け
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #セカンドライフ
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #断捨離
            </Badge>
          </Stack>
  
          {/* <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack> */}
        </Box>
      </Center>
    );
  }