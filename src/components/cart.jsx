import { useState } from 'react'

export const Cart = ({ id, listCart, image, title, description, price, handleAdd, handleRemove }) => {
    const changeAdd = () => {
        handleAdd()
    }

    const changeRemove = () => {
        handleRemove()
    }
    
    return (
        <div className='tarjeta'>
            <img className='tarjeta-imagen' src={image} alt={title} />
            <div className="tarjeta-contenido">
                <h2 className='tarjeta-titulo'>{title}</h2>
                <p className='tarjeta-descripcion'>{description}</p>
            </div>
            <div className='price-action'>
                    <p className='tarjeta-precio'><strong>{'$' + price}</strong></p>
                    {
                        listCart.some(res => res.id === id) ?
                            <button onClick={() => changeRemove()} className='btn btn-danger'>Remove</button>
                            :
                            <button onClick={() => changeAdd()} type='button' className='btn btn-primary'>add</button>
                    }
                </div>
        </div>
    )
}

