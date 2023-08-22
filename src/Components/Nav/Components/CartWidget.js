import React from "react";
import './CartWidget.css';
import { Link } from "react-router-dom";

const CartWidget = ({cantidad}) =>{
    
    return (
        <div className="cart_widget d-flex align-items-center position-relative">
            <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-xl px-5"></i></Link>
            <p className="notificacion">{cantidad}</p>
        </div>
    )
}

export default CartWidget;