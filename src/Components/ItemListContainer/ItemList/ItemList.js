import './ItemList.css';
import { useParams } from "react-router-dom";
import Joyeria from "../../../Routes/Joyeria";
import Indumentaria from "../../../Routes/Indumentaria";
import Electronica from "../../../Routes/Electronica";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AddButton from '../../Buttons/AddButton';

const ItemList = ({cartList, setCartList, cantidad , setCantidad}) => {
    const {id} = useParams()
    const [productsList, setproductsList] = useState([]);
    
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
        return(<Indumentaria cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>)
    }else
    if(id === "2"){
        return(<Joyeria cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>)
    }else
    if(id === "3"){
        return(<Electronica cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>)
    }

    
    
    return (
        <section className="itemList">
            {productsList.map((producto) => (
            <div className='CardList'>
            
                <div className="card" key={producto.id}>
                    <img className="card-img" src={producto.image} alt="Card"/>
                    <div className="card-body">
                    <Link className="d-flex text-decoration-none text-dark" to={`/item/${producto.id}`}><h5 className="card-title">{producto.title}</h5></Link>
                        <p className="card-description">{producto.description}</p>
                    </div>
                </div>
            <AddButton onClick={()=>addCart(producto)}/>
            </div>
        ))}
        </section>
    );
}

export default ItemList;