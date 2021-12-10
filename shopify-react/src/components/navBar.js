import React from "react";
import {Link} from "react-router-dom"
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md"

const NavBar = () => {

    const { openCart, openMenu, checkout } = React.useContext(ShopContext)

    return (
    <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" alignItems="center" p="2rem" >
       <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30} onClick={()=>openMenu()}/>
       <Link to="/"><Image src={"https://picsum.photos/200"}/></Link>
       <Box alignContent="center">
       <Icon fill="white" cursor="pointer" as={MdShoppingBasket} w={30} h={30} onClick={()=>openCart()}/>
       {checkout.lineItems?.length > 0 ? <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge> : null}
       </Box>
    </Flex>
    )
}

export default NavBar