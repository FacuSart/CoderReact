import React from "react";
import './ItemListContainer.css';

const ItemListContainer = ({texto}) =>{


    return (
        <div className="item_list_container d-flex justify-content-center align-items-center">
            <h2 className="titulo fs-1 fw-bold">{texto}</h2>
        </div>
    )
}

export default ItemListContainer;