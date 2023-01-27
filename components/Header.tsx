import { Box, ChakraProvider, Flex, Heading, List, useBreakpointValue, Text, Stack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Link from "next/link";

export const  Header =() => {

    const isPc = useBreakpointValue({ base: false, md: true });

    if(isPc) {
        return(
            <>
            <ChakraProvider>
            <Stack as='nav' w='40%'>
                <Flex>
                    <Box>
                    <Link href={'./'}>
                        {/* <Text>HOME</Text> */}
                    </Link>
                    </Box>
                </Flex>
            </Stack>
            </ChakraProvider>
            </>
        )
    }

    return(
        <>
        <ChakraProvider>
          <Heading>This is Moblie</Heading>
        </ChakraProvider>
        </>
    )

    
}

const sSample = css`
 color: #red;
`

