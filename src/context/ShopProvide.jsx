import { ShopContext } from "./ShopContext"
import { useEffect } from "react";
import { useState } from "react"

export const ShopProvide = ({ children }) => {
    const url = 'https://fakestoreapi.com/products';

    const [Store, setStore] = useState([])

    const [Search, setSearch] = useState('')

    const fetchStore = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setStore(data)
    }
    useEffect(() => {
        fetchStore()
    }, [])

    return (
        <ShopContext.Provider value={{Store,Search,setSearch}}>
            {children}
        </ShopContext.Provider>
    )
}
