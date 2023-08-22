import React from "react";
import './ItemListContainer.css';
import ItemList from "./ItemList/ItemList";


const ItemListContainer = ({cartList, setCartList, cantidad , setCantidad}) =>{
    return (
        <div className="item_list_container d-flex justify-content-center align-items-center">
            <h1 className="pt-5 text-white">Nuestros Productos</h1>
            <ItemList cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>
        </div>
    )
}

export default ItemListContainer;