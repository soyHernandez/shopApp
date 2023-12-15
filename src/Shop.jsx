import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { BarNav } from "./components/BarNav"
import { ShopScreen } from "./pages/ShopScreen"
import { CartScreen } from "./pages/CartScreen"
import { ShopProvide } from "./context/ShopProvide"
import { CartProvider } from "./context/CartProvider"
import { useEffect} from "react"



export const Shop = () => {
    const locationHref = useLocation()
    const changePage = ()=>{
        if (locationHref.pathname == '/home') {
            const element = document.querySelector('.container');
            element.classList.add('container-cart')

        } else {
            const element = document.querySelector('.container');
            element.classList.remove('container-cart')
        }
    }
    useEffect(() => {
        changePage()
    }, [locationHref.pathname]);


    return (
        <ShopProvide>
            <CartProvider>
                <BarNav />
                <div className="container">
                    <Routes>
                        <Route path="/home" element={<ShopScreen></ShopScreen>}></Route>
                        <Route path="/carrito" element={<CartScreen></CartScreen>}></Route>
                        <Route path="/*" element={<Navigate to='/home'></Navigate>}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ShopProvide>
    )
}
