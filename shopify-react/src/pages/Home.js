import React from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/shopContext"
import { Box, Grid, Text, Image } from "@chakra-ui/react"

const Home = () => {

const { fetchAllProducts, products } = React.useContext(ShopContext)

React.useEffect(()=>{
    fetchAllProducts()
}, [fetchAllProducts])


if(!products) return <div>loading...</div>

    return (
        <Box>
            <Grid templateColumns="repeat(3,1fr)">
            {products.map((product) => 
            (
              <Link to={`/products/${product.handle}`} key={product.id}>
                <Box _hover={{ opacity: "80%" }} textAlign="center">
                <Image src={product.images[0].src}/>
                <Text>
                {product.title}
                </Text>
                <Text>
                ${product.variants[0].price}
                </Text>
                </Box>
              </Link>
            )
            )}
            </Grid>
        </Box>
    )
}
export default Home