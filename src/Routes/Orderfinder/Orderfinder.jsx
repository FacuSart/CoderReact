import React, { useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import './Orderfinder.css'

const OrderFinder = () =>{

    const [id, setId] = useState("")
    const [order, setOrder] = useState([])
    
        
    const handleSearch = () => {
        if(id!==""){
            const db = getFirestore();
            
            const orderCollection = doc(db, "orders", id);
            
            getDoc(orderCollection)
            .then((snapshot) => {
                if(snapshot.exists()){
                    setOrder(snapshot.data());
                }
            })
        }
    };
        
      
    
    return(
        <>
        <div className="order-finder">
            <h2 className="order-finder-title" >Busque su orden aquí:</h2>
            <input
            placeholder="Ingrese el Id aquí"
            className="order-finder-input"
            type="text"
            name="orderId"
            id="orderId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
            <button className="order-finder-btn" onClick={handleSearch}>Buscar</button>
        </div>
        
        {order.length !== 0 ?(
            <div className="search-result">
                <h2 className="search-result-title py-4 justify-content-center fs-1">Resultado de la búsqueda</h2>
                <h3 className="search-result-title">Comprador:</h3>
                <ul className="search-result-ul-buyer">
                    <li className="search-result-li-buyer"><span className="fw-bold text-decoration-underline">Nombre:</span> {order.Buyer.nombre}</li>
                    <li className="search-result-li-buyer"><span className="fw-bold text-decoration-underline">Celular:</span> {order.Buyer.celular}</li>
                    <li className="search-result-li-buyer"><span className="fw-bold text-decoration-underline">eMail:</span> {order.Buyer.email}</li>
                </ul>
                <h3 className="search-result-title">Items:</h3>
                <ul className="search-result-ul-item">
                    {order.Items.map((item) => (
                        <li key={item.id} className="search-result-li-item">
                            <div className="search-result-li-item-div">
                                <h4>{item.title}</h4>
                                <p><span className="fw-bold">Descripción:</span> {item.description}</p>
                                <p><span className="fw-bold">Precio:</span> ${item.price}</p>
                                <p><span className="fw-bold">Cantidad:</span> {item.cantidad}</p>
                                <p><span className="fw-bold">Categoría:</span> {item.category}</p>
                                <p><span className="fw-bold">Marca:</span> {item.brand}</p>
                            </div>
                            <div className="search-result-li-item-div">
                                <img src={item.img} alt={item.title} className="search-result-li-item-img"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        ):<></>}

        </>
    )
}

export default OrderFinder;