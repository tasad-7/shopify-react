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
  } from '@chakra-ui/react'
import { ShopContext } from "../context/shopContext";

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = React.useContext(ShopContext)

    return (
   <>
    <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            This is your cart
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </>
    )
}

export default Cart