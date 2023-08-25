import './ItemList.css';
import { useParams } from "react-router-dom";
import Joyeria from "../../../Routes/Joyeria";
import Indumentaria from "../../../Routes/Indumentaria";
import Electronica from "../../../Routes/Electronica";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AddButton from '../../Buttons/AddButton';
import { useCart } from '../../../Contexts/CartContext';

const ItemList = () => {
    const {id} = useParams();
    const [productsList, setproductsList] = useState([]);
    const {cartList, setCartList, setCantidad} = useCart();
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
            .then(res => res.json())
            .then(json => setproductsList(json));    
    }, [])

    const addCart =(producto)=>{
        const updatedCart = [...cartList, producto];
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        localStorage.setItem('carrito',JSON.stringify(updatedCart));
        localStorage.setItem('cantidad',updatedCart.length);
    }
    
    if(id === "1"){
        return(<Indumentaria/>)
    }else
    if(id === "2"){
        return(<Joyeria/>)
    }else
    if(id === "3"){
        return(<Electronica/>)
    }

    
    return (
        <section className="itemList">
            {productsList.map((producto) => (
            <div className='CardList'>
            
                <div className="card p-3" key={producto.id}>
                    <img className="card-img" src={producto.image} alt="Card"/>
                    <div className="card-body">
                    <Link className="d-flex text-decoration-none text-dark" to={`/item/${producto.id}`}><h5 className="card-title">{producto.title}</h5></Link>
                        <p className="card-description">{producto.description}</p>
                    </div>
                    <p className="fw-bold fs-4 m-0">${producto.price}</p>
                </div>
            <AddButton onClick={()=>addCart(producto)}/>
            </div>
        ))}
        </section>
    );
}

export default ItemList;