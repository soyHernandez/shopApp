import React, { useState } from 'react'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ShopContext } from "../context/ShopContext";
export const BarNav = () => {
    const { listCart } = useContext(CartContext)
    const {Search,setSearch} = useContext(ShopContext) 

    const onInputChange = (e) => {
        setSearch(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">MyApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="carrito collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active" aria-current="page" href="#">Shop</NavLink>
                            </li>
                        </ul>
                            <form onSubmit={onSubmit} className="gap-3 d-flex p-2 col-sm-5">
                                <input type="text" onChange={onInputChange} value={Search} className="input-form" placeholder='search...' />
                            </form>
                        <NavLink to='carrito'>
                            <Badge badgeContent={listCart.length} color="secondary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
