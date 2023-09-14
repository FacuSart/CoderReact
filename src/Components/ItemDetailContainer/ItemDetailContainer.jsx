import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../Buttons/BackButton";
import AddButton from "../Buttons/AddButton";
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useAddCart } from "../../Contexts/addCartContext";
import ItemCount from "./Components/ItemCount";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addCart } = useAddCart();
    const [producto, setProducto] = useState([]);
    const [dataFromChild, setDataFromChild] = useState(0);

    const handleDataFromChild = (data) => {
      setDataFromChild(data);
    };

    const handleClickAdd = (producto, cantidad) => {
        addCart(producto, cantidad)
    }

    useEffect(() => {
        const db = getFirestore();
        
        const productoRef = doc(db, "items", id);
        
        getDoc(productoRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                setProducto(snapshot.data());
            } else {
                console.log("No se encontró el producto con ese ID ");
            }
        })
        producto.id = id;
    }, [id, producto]);
    
    
  
    return (
        <>
            <BackButton className="mt-5"/>
            <section className="detail-item-list">
                <div className="detail-card" key={producto.id}>
                    <img className="detail-card-img" src={producto.img} alt="Card" />
                    <div className="detail-card-body">
                        <h5 className="detail-card-title fs-3 fw-bold">{producto.title}</h5>
                        <p className="detail-card-description fs-4">{producto.description}.</p>
                        <p className="fs-4 m-0">Precio: ${producto.price}</p>
                    </div>
                </div>
                <ItemCount onDataFromChild={handleDataFromChild}/>
            </section>
            <AddButton onClick={() => handleClickAdd(producto,dataFromChild)} />
        </>
    );
}

export default ItemDetailContainer;