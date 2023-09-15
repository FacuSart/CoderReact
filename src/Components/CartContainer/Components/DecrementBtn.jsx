import React from "react";
import { useCart } from "../../../Contexts/CartContext";

const DecrementBtn = (producto) =>{
    const { cartList, total, setCartList, setCantidad, setTotal} = useCart();

    const decrement = () =>{
        const updatedCart = cartList.map((item) => {
            if (item.id === producto.producto.id) {
              item.cantidad -= 1;
            }
            return item;
          }).filter((item) => item.cantidad > 0);
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        setTotal(total - producto.producto.price)
        localStorage.setItem('total', parseFloat(total))
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        localStorage.setItem('cantidad', updatedCart.length);
    }
    return(
        <button className="increment-decrement-btn" onClick={decrement}>-</button>
    )
}

export default DecrementBtn;