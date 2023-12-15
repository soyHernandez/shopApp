import { useContext, useEffect, useState } from "react";
import { Cart } from "../components/cart";
import '../style/styleShop.css'
import { ShopContext } from "../context/ShopContext";
import { CartContext } from "../context/CartContext"

export const ShopScreen = () => {
    const { Store, Search } = useContext(ShopContext)
    const { listCart, addBuy, removeProduct, increaseProduct, decreaseProduct } = useContext(CartContext)
    const handleAdd = (compra) => {
        addBuy(compra)
    }
    let resultSearch = []
    if(!Search){
        resultSearch = Store
    }else{
        resultSearch = Store.filter((data)=>{
            return data.title.toLowerCase().includes(Search.toLowerCase())
        })
    }
    const handleRemove = (id) => {
        removeProduct(id)
    }
    const handleIncrease = (id) => {

    }
    const handleDecrease = (id) => {

    }
    return (
        <>
            {resultSearch.map(storeData => (
                <Cart
                    key={storeData.id}
                    id={storeData.id}
                    image={storeData.image}
                    title={storeData.title}
                    description={storeData.description}
                    price={storeData.price}
                    handleAdd={() => handleAdd(storeData)}
                    handleRemove={() => handleRemove(storeData.id)}
                    listCart={listCart}
                >

                </Cart>
            ))}
        </>
    )
}
