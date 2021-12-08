import React from "react";
import {
    Drawer,
    Button,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,
    Flex,
    Image,
    Text,
    Link,
    Box
  } from '@chakra-ui/react'
import {CloseIcon} from "@chakra-ui/icons"
import { ShopContext } from "../context/shopContext";

const Cart = () => {

  const { isCartOpen, closeCart, checkout, removeLineItem } = React.useContext(ShopContext)

  return (
  <>
    <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
        size="sm"
    >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? checkout.lineItems.map((item) => (
                    <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                        <Flex alignItems="center" justifyContent="center">
                            <CloseIcon cursor="pointer" onClick={()=> removeLineItem(item.id)}/>
                        </Flex>
                        <Flex alignItems="center" justifyContent="center">
                            <Image src={item.variant.image.src}/>
                        </Flex>
                        <Flex alignItems="center" justifyContent="center">
                            <Text>{item.title}</Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent="center">
                            <Text>{item.variant.price}</Text>
                        </Flex>
                    </Grid>
                )) : 
                <Box h="100%" w="100%">
                  <Text h="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >Your Cart is Empty!</Text>
                </Box>}
          </DrawerBody>

          {checkout.lineItems?.length ?
            <DrawerFooter>
            <Button w ="100%"><Link href={checkout.webUrl}>Checkout</Link></Button>
          </DrawerFooter> : null}
        </DrawerContent>
      </Drawer>
  </>
)}

export default Cart