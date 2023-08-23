import React, { useState, useEffect } from "react";
import '../Components/ItemListContainer/ItemList/ItemList.css'
import { Link } from 'react-router-dom';
import AddButton from "../Components/Buttons/AddButton";

const Indumentaria = ({cartList, setCartList, setCantidad}) => {

    const [indumentariaList, setIndumentariaList] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => {
                const womenClothing = data.filter(item => item.category === "women's clothing");
                const menClothing = data.filter(item => item.category === "men's clothing");
                const combinedClothing = [...womenClothing, ...menClothing];
                setIndumentariaList(combinedClothing);
            })
            .catch(error => console.error('Error fetching clothing:', error));
    }, []);
    
   
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
            setCartList(storedCart);
        }
    }, [setCartList]);

    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(cartList));
    },[cartList])
    
    const addCart =(producto)=>{
        const updatedCart = [...cartList, producto];
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        localStorage.setItem('carrito',JSON.stringify(updatedCart));
        localStorage.setItem('cantidad',updatedCart.length);
    }
       
    return (
        <section className="itemList">
            {indumentariaList.map((producto) => { return (
                <div className='CardList'>
                <div className="card p-3" key={producto.id}>
                    <img className="card-img-top" src={producto.image} alt="Card" />
                    <div className="card-body">
                        <Link className="text-decoration-none text-dark" to={`/item/${producto.id}`}><h5 className="card-title">{producto.title}</h5></Link>
                        <p className="card-description">{producto.description}</p>
                    </div>
                    <p className="fw-bold fs-4 m-0">Precio: ${producto.price}</p>
                </div>
                <AddButton onClick={()=>addCart(producto)}/>
            </div>) 
            })}
        </section>
    );
}

export default Indumentaria;