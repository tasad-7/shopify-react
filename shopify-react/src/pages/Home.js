import React from "react"
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/shopContext"
import { Box, Grid, Text, Image } from "@chakra-ui/react"
import ImageWithText from "../components/imageWithText"
import RichText from "../components/richText"

const Home = () => {

const { fetchAllProducts, products } = React.useContext(ShopContext)

React.useEffect(()=>{
    fetchAllProducts()
}, [fetchAllProducts])

if(!products) return <div>loading...</div>

    return (
        <Box>
          <Hero />
          <RichText 
          heading="The relaxation you've been waiting for."
          text="Our Bath bombs guarantee a fun, relaxing, and colorful night."
          />
          <Grid templateColumns="repeat(3,1fr)">
            {products.map((product) => 
            (
              <Link to={`/products/${product.handle}`} key={product.id}>
                <Box _hover={{ opacity: "80%" }} textAlign="center" position="relative">
                <Image src={product.images[0].src}/>
                <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
                </Text>
                <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                ${product.variants[0].price}
                </Text>
                </Box>
              </Link>
            )
            )}
          </Grid>
          <RichText 
            heading="Treat Yourself!"
          />
          <ImageWithText image="https://picsum.photos/200" heading="Heading" text="Click me to buy ...."/>
          <ImageWithText reverse image="https://picsum.photos/200" heading="Heading" text="Click me to buy ...."/>
        </Box>
    )
}
export default Home