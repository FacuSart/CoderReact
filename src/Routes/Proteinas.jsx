import React, { useState, useEffect } from "react";
import '../Components/ItemListContainer/ItemList/ItemList.css';
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from 'firebase/firestore';
import CardProduct from "../Components/ItemListContainer/ItemList/CardProduct/CardProduct";

const Proteinas = () => {
    
    const [proteinasList, setProteinasList] = useState([]);


    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection, where('category', '==', "proteinas"));

        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProteinasList(docs);
        });
    }, []);
   

    return (
        <section className="itemList">
            {proteinasList.map((producto) => (
               <CardProduct producto={producto} key={producto.id}/>
            ))}
        </section>
    );
}

export default Proteinas;