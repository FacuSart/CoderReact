import React, { useState, useEffect } from "react";
import '../Components/ItemListContainer/ItemList/ItemList.css'
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from 'firebase/firestore';
import CardProduct from "../Components/ItemListContainer/ItemList/CardProduct/CardProduct";

const Creatinas = () => {
    
    const [creatinasList, setCreatinasList] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection, where('category', '==', "creatinas"));

        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setCreatinasList(docs);
        });
    }, []);


    return (
        <section className="itemList">
            {creatinasList.map((producto) => (
               <CardProduct producto={producto} key={producto.id}/>
            ))}
        </section>
    );
}

export default Creatinas;