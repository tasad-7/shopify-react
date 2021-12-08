import React from "react"
import Link from "react-router-dom"
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box backgroundColor="#FFA8E2">
            <Grid templateColumns="repeat(3, 1fr)">
                <Image src={{uri: "@assets/Bath-Bombs.jpg"}}/>
                </Grid>
        </Box>
    )
}

export default Footer