import React, { useEffect } from "react";
import './Cart.css';


const Cart =({cartList,setCartList})=>{

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
            setCartList(storedCart);
        }
    }, [setCartList]); 
    
    
    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(cartList));
    },[cartList]);
    

    return(
        <>
        <h2 className="text-center text-white pt-5 fs-1 fw-bold text-decoration-underline">Tu Carrito</h2>
        <section className="CartList">
            {cartList.map((prod) => (
            <>
                <div className="CartItem" key={prod.id}>
                    <img className="card-img-top" src={prod.image} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{prod.title}</h5>
                        <p className="card-description">{prod.description}</p>
                    </div>
                        <button className="cartBtnEliminar">Eliminar</button>
                        <p className="fw-bold fs-4 m-0">Precio: ${prod.price}</p>
                </div>
            </>
        ))}
        <button className="cartBtnComprar">Comprar</button>
            
        </section>
        </>
    )
}


export default Cart;