import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: `'Open Sans', sans-serif, 'Raleway', sans-serif`,
                fontSize: "0.8125rem",
                lineHeight: "1.5",
            },
        },
    },
})
export default theme

