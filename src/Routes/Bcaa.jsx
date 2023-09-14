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

const Bcaa = () => {

    const [bcaaList, setBcaaList] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection, where('category', '==', "bcaa"));

        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBcaaList(docs);
        });
    }, []);

    return (
        <section className="itemList">
            {bcaaList.map((producto) => (
               <CardProduct producto={producto} key={producto.id}/>
            ))}
        </section>
    );
}

export default Bcaa;