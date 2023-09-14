import React from "react";
import './Cart.css';
import DeleteButton from "../Buttons/DeleteButton";
import { useCart } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import IncrementBtn from "./Components/IncrementBtn";
import DecrementBtn from "./Components/DecrementBtn";

const Cart = () => {

    const { cartList, total } = useCart();
    return (
        <div className="cart">
            <h2 className="text-center text-white pt-5 fs-1 fw-bold text-decoration-underline">Tu Carrito</h2>
            <section className="cart-list">
                {cartList.map((prod) => (
                        <div className="cart-item" key={prod.id}>
                            <Link className="d-flex text-decoration-none text-dark" to={`/item/${prod.id}`}><img className="card-img-top" src={prod.img} alt="Card" /></Link> 
                            <div className="d-flex align-items-center flex-column">
                                <div className="card-body">
                                <Link className="d-flex text-decoration-none text-dark" to={`/item/${prod.id}`}><h4 className="card-title fw-bold">{prod.title}</h4></Link>
                                    <p className="card-description">{prod.description}</p>
                                    <div className="d-flex flex-row align-items-center justify-content-center">
                                        <DecrementBtn producto={prod}/>
                                        <p className="fw-bold my-0 mx-5 fs-4">{prod.cantidad}</p>
                                        <IncrementBtn producto={prod}/>
                                    </div>
                                </div>
                                <DeleteButton producto={prod}/>
                                <p className="fw-bold fs-4 m-0">${prod.price}</p>
                            </div>
                            
                        </div>
                ))}
            </section>
           
            <div className="cart-footer">
                <p className="cart-total">Total: ${total.toFixed(2)}</p>
                {cartList.length !== 0 ? (<Link className="cart-comprar-btn" to='/checkout'>Comprar</Link>) : (<Link className="cart-comprar-btn">Comprar</Link>)   }
                
            </div>
            
        </div>
    )
}

export default Cart;