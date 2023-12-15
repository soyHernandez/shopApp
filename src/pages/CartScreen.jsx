import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const CartScreen = () => {
    const { listCart, addBuy, removeProduct, increaseProduct, decreaseProduct } = useContext(CartContext)
    const calculoTotal = () => {
        return listCart.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }
    const handleBuy = ()=>{
        print()
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {listCart.map(item => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-ouline-primary" onClick={() => decreaseProduct(item.id)}>-</button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button className="btn btn-ouline-primary" onClick={() => increaseProduct(item.id)}>+</button>
                                </td>
                                <td><button type="button" className="btn btn-danger" onClick={() => removeProduct(item.id)}>Remove</button></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th><b>TOTAL:</b></th>
                        <td>${calculoTotal()}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button type="buttom" onClick={() => handleBuy()} disabled={listCart < 1} className="btn btn-primary">BUY</button>
            </div>
        </>
    )
}
