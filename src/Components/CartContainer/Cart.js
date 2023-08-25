import React, { useEffect } from "react";
import './Cart.css';
import DeleteButton from "../Buttons/DeleteButton";
import { useCart } from "../../Contexts/CartContext";

const Cart = () => {
    const { cartList, setCartList, total} = useCart();
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
            setCartList(storedCart);
        }
    }, [setCartList]);


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cartList));
    }, [cartList]);


    return (
        <div className="cart">
            <h2 className="text-center text-white pt-5 fs-1 fw-bold text-decoration-underline">Tu Carrito</h2>
            <section className="CartList">
                {cartList.map((prod) => (
                    <>
                        <div className="CartItem" key={prod.id}>
                            <img className="card-img-top" src={prod.image} alt="Card" /><div className="d-flex align-items-center flex-column">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{prod.title}</h5>
                            </div>
                            
                                <p></p>
                                <DeleteButton/>
                                <p className="fw-bold fs-4 m-0">${prod.price}</p>
                            </div>
                            
                        </div>
                    </>
                ))}
            </section>
            <div className="cart-footer"><p className="cart-total">Total: ${total}</p><button className="cart-comprar-btn">Comprar</button></div>
        </div>
    )
}


export default Cart;