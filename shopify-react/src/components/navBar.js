import React from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md"

const NavBar = () => {

    const { openCart, openMenu, checkout } = React.useContext(ShopContext)

    return (
    <Flex flexDirection="row" justifyContent="space-between" padding="2rem" backgroundColor="#FFA8E2">
       <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}/>
       {/* <Image src={} w={100} h={100}/> */}
       <Icon fill="white" cursor="pointer" as={MdShoppingBasket} w={30} h={30} onClick={()=>openCart()}/>
    </Flex>
    )
}

export default NavBar