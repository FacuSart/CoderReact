import React from "react";
import { useAddCart } from '../../../../Contexts/addCartContext';
import { Link } from "react-router-dom";
import AddButton from "../../../Buttons/AddButton";

const CardProduct = ({producto}) => {

    const { addCart } = useAddCart();

    const handleClickAdd = (producto) => {
        addCart(producto,1)
    }
    
    return (
        <>
        
            <div className='card-product'>
                <div className="card p-3">
                <Link className="d-flex text-decoration-none text-dark" to={`/item/${producto.id}`}><img className="card-img" src={producto.img} alt="Card" /></Link> 
                    <div className="card-body">
                        <Link className="d-flex text-decoration-none text-dark" to={`/item/${producto.id}`}><h5 className="card-title">{producto.title}</h5></Link> 
                        <p className="card-description">{producto.description}</p>
                    </div>
                    <p className="fw-bold fs-4 m-0">${producto.price}</p>
                </div>
                <AddButton onClick={() => handleClickAdd(producto)} />
            </div>
        
        </>
    )

}

export default CardProduct;