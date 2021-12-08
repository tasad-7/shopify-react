import React, { Component } from "react"
import Client from "shopify-buy"

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
  });

class ShopProvider extends Component {
    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false,

    }

    componentDidMount() {
        if(localStorage.checkout_id){
            this.fetchCheckout(localStorage.checkout_id)
        }
        else {
            this.createCheckout()
        }
    }

    createCheckout = async ()=>{
        // Create an empty checkout
        const checkout = await client.checkout.create(); // gives you checkout id
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({checkout: checkout})
    }

    fetchCheckout = (checkoutId)=>{
        client.checkout.fetch(checkoutId).then((checkout) => {
            this.setState({checkout: checkout})
        })
    }

    addItemtoCheckout = async (variantId, quantity)=>{
        const lineItemsToAdd = [
          {
            variantId: variantId,
            quantity: parseInt(quantity, 10)
          }
        ]

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({checkout: checkout})
        this.openCart();
    }

    removeLineItem = async (lineItemIdstoRemove)=>{
     const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdstoRemove)
     this.setState({checkout: checkout})
    }

    fetchAllProducts = async ()=>{
        // Fetch all products in your shop
        const products = await client.product.fetchAll();
        this.setState({products: products})
    }

    fetchProductWithHandle = async (handle)=>{
        const product = await client.product.fetchByHandle(handle)
        this.setState({product: product})
    }

    closeCart =()=>{this.setState({isCartOpen: false})}

    openCart =()=>{this.setState({isCartOpen: true})}

    closeMenu =()=>{this.setState({isMenuOpen: false})}

    openMenu =()=>{this.setState({isMenuOpen: true})}

    render () {
        return (
           <ShopContext.Provider 
           value={{...this.state,
           fetchAllProducts: this.fetchAllProducts,
           fetchProductWithHandle: this.fetchProductWithHandle,
           addItemtoCheckout: this.addItemtoCheckout,
           removeLineItem: this.removeLineItem,
           closeCart: this.closeCart,
           openCart: this.openCart,
           closeMenu: this.closeMenu,
           openMenu: this.openMenu

    }}
           >
            {this.props.children}
           </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export {ShopContext, ShopConsumer}

export default ShopProvider