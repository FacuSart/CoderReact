import React, { useEffect, useState } from "react";
import './ItemCount.css'

const ItemCount =(props)=>{
    const [cantidadItemCount, setCantidadItemCount] = useState(1);

    const incrementItemCount = () => {
        setCantidadItemCount((prevCount) => prevCount + 1);
    }
    
    const decrementItemCount = () => {
        if (cantidadItemCount > 1) {
            setCantidadItemCount((prevCount) => prevCount - 1);
        }
    }
    const sendDataToParent = (counter) => {
            const data = counter;
            props.onDataFromChild(data);
        };

    useEffect(()=>{
        sendDataToParent(cantidadItemCount)
    },[cantidadItemCount])
   

    return (
        <div className="item-count">
            <button onClick={decrementItemCount} className="btn-item-count" >-</button>
            <p onChange={sendDataToParent} className="m-0">{cantidadItemCount}</p>
            <button onClick={incrementItemCount} className="btn-item-count">+</button>
        </div>
    );
};

export default ItemCount;