import React, { useState, useEffect } from "react";
import '../Components/ItemListContainer/ItemList/ItemList.css';
import { Link } from 'react-router-dom';
import AddButton from "../Components/Buttons/AddButton";
import { useCart } from "../Contexts/CartContext";

const Electronics = () => {
    const [electronicsList, setElectronicsList] = useState([]);
    const { cartList, setCartList, setCantidad } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setElectronicsList(json))
    }, [])


    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
            setCartList(storedCart);
        }
    }, [setCartList]);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cartList));
    }, [cartList])

    const addCart = (producto) => {
        const updatedCart = [...cartList, producto];
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        localStorage.setItem('cantidad', updatedCart.length);
    }
    return (
        <section className="itemList">
            {electronicsList.map((producto) => {
                return (
                    <div className='CardList'>
                        <div className="card p-3" key={producto.id}>
                            <img className="card-img-top" src={producto.image} alt="Card" />
                            <div className="card-body">
                                <Link className="text-decoration-none text-dark" to={`/item/${producto.id}`}><h5 className="card-title">{producto.title}</h5></Link>
                                <p className="card-description">{producto.description}</p>
                            </div>
                            <p className="fw-bold fs-4 m-0">${producto.price}</p>
                        </div>
                        <AddButton onClick={() => addCart(producto)} />
                    </div>
                )
            })}

        </section>
    );
}

export default Electronics;