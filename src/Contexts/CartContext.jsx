import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) =>{
  
    const [cartList,setCartList] = useState([]);
    const [cantidad,setCantidad] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
          setCartList(storedCart);
          setCantidad(storedCart.length);
          setTotal(parseFloat(localStorage.getItem('total')))
        }
      }, []);
      
      useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(cartList))
        localStorage.setItem('cantidad',cantidad)
        localStorage.setItem('total',total)
      },[cartList, cantidad, total]);

    return(
        <CartContext.Provider value={{cartList, setCartList, cantidad, setCantidad, total, setTotal}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () =>{
    return useContext(CartContext)
}

export {CartProvider,useCart};

