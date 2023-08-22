import React from "react";
import './AddButton.css';

const AddButton = ({ onClick }) => {
    return (
        <button className="add-button" onClick={onClick}>
            Agregar al Carrito
        </button>
    );
};

export default AddButton;