import { Box, ChakraProvider, List } from "@chakra-ui/react";
import Link from "next/link";


export default function Header() {

    return(
        <>
        <ChakraProvider>
            <Box>
                <List>
                <Link href={"./"} passHref >HOME</Link>
                <Link href={"./About"} passHref >About</Link>
                </List>
            </Box>
        </ChakraProvider>
        </>
    )
}
