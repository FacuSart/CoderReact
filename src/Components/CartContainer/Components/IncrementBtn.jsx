import React from "react";
import { useCart } from "../../../Contexts/CartContext";

const IncrementBtn = (producto) =>{
    const { cartList, total, setCartList, setCantidad, setTotal} = useCart();

    const increment = () =>{
        const updatedCart = cartList.map((item) => {
            if (item.id === producto.producto.id) {
              item.cantidad += 1;
            }
            return item;
          });

        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        setTotal(total + producto.producto.price);

        localStorage.setItem('total', parseFloat(total));
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        localStorage.setItem('cantidad', updatedCart.length);
    }
    return(
        <button className="increment-decrement-btn" onClick={increment}>+</button>
    )
}

export default IncrementBtn;