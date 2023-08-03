import React from "react";
import './CartWidget.css';

const CartWidget = () =>{
    return (
        <div className="cart_widget d-flex align-items-center position-relative">
            <i className="fa-solid fa-cart-shopping fa-xl text-white px-5"></i>
            <p className="notificacion">{0}</p>
        </div>
    )
}

export default CartWidget;