import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../Buttons/BackButton";
import AddButton from "../Buttons/AddButton";
import './ItemDetailContainer.css'

const ItemDetailContainer = ({cartList, setCartList , cantidad , setCantidad}) => {
    const { id } = useParams()

    const [producto, setProducto] = useState([]);

    useEffect(()=>{
        setCantidad(localStorage.getItem('cantidad'))
        setCartList(JSON.parse(localStorage.getItem('carrito')));
    },[setCantidad,setCartList])

    const addCart =(producto)=>{
        const updatedCart = [...cartList, producto];
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        localStorage.setItem('carrito',JSON.stringify(updatedCart));
        localStorage.setItem('cantidad',cantidad);
    }

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProducto(json))


    return (
        <>
            <BackButton className="mt-5"/>
            <section className="DetailItemList">
                <div className="card" key={producto.id}>
                    <img className="card-img-top" src={producto.image} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-description">{producto.description}</p>
                    </div>
                    <p className="fw-bold fs-4 m-0">Precio: ${producto.price}</p>
                </div>
                <AddButton onClick={() => addCart(producto)} />
            </section>
        </>
    );
}

export default ItemDetailContainer;