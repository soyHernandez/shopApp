import React, { useReducer } from 'react'
import { CartContext } from './CartContext'

const initialValue = [];

export const CartProvider = ({children}) => {

    const addBuy = (compra) =>{
        compra.cantidad = 1
        const action = {
            type: '[CART] add',
            payload: compra
        }
        dispatch(action)
    }
    const increaseProduct = (id) =>{
        const action = {
            type: '[CART] increase',
            payload: id
        }
        dispatch(action)
    }    
    const decreaseProduct = (id) =>{
        const action = {
            type: '[CART] decrease',
            payload: id
        }
        dispatch(action)
    }  
    const removeProduct = (id) =>{
        const action = {
            type: '[CART] remove',
            payload: id
        }
        dispatch(action)
    }
    
    const buyReducer = (state = initialValue, action = {}) =>{
        switch (action.type) {
            case '[CART] add':
                return [...state, action.payload]
            case '[CART] remove':
                return state.filter(compra => compra.id !== action.payload)
            case '[CART] increase':
                return state.map(item =>{
                        const cant = item.cantidad + 1
                        if(item.id === action.payload) return{...item, cantidad: cant}
                        return item
                })
            case '[CART] decrease':
                return state.map(item =>{
                        const cant = item.cantidad - 1
                        if(item.id === action.payload && item.cantidad > 1) return{...item, cantidad: cant}
                        console.log(item)
                    return item
                })
            default:
                return state
        }
    }
    const [listCart, dispatch] = useReducer(buyReducer, initialValue)
    return (
        <CartContext.Provider value={{listCart, addBuy, removeProduct, increaseProduct, decreaseProduct}}>
            {children}
        </CartContext.Provider>
    )
}
