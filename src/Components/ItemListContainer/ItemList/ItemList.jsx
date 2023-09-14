import './ItemList.css';
import { useParams } from "react-router-dom";
import Bcaa from "../../../Routes/Bcaa";
import Proteinas from '../../../Routes/Proteinas';
import Creatinas from '../../../Routes/Creatinas';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CardProduct from './CardProduct/CardProduct';

const ItemList = () => {
    const { id } = useParams();

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const db = getFirestore();
    
        const itemsCollection = collection(db, 'items');
    
        getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProductsList(docs);
        });
      }, []);
      
    switch (id) {
    case "1":
        return <Bcaa />;
    case "2":
        return <Creatinas />;
    case "3":
        return <Proteinas />;
    default:
        return (
            <section className="itemList">
                {productsList.map((producto) => (
                    <CardProduct  key={producto.id} producto={producto}/>
                ))}
            </section>
        )
    }

    
}

export default ItemList;