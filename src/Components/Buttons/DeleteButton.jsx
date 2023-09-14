import React from "react";
import './DeleteButton.css';
import { useCart } from "../../Contexts/CartContext";

const DeleteButton = ({producto}) => {

    const { cartList, total, setCartList, setCantidad, setTotal} = useCart();

    const eliminarItem =(producto)=>{

        const updatedCart = cartList.map((item) => {
            if (item.id === producto.id) {
                setTotal(total - (producto.price * producto.cantidad))
                item.cantidad -= producto.cantidad;
            }
            return item;
          }).filter((item) => item.cantidad > 0)
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        localStorage.setItem('total', parseFloat(total))
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        localStorage.setItem('cantidad', updatedCart.length);
    }
    return (
        <button className="delete-button" onClick={()=>eliminarItem(producto)}>
            Eliminar
        </button>
    );
};

export default DeleteButton;