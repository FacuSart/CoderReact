import React, { useContext } from "react";
import { useCart } from "./CartContext";

const addCartContext = React.createContext();

const AddCartProvider = ({children}) =>{

    const { cartList, setCartList, setCantidad, total, setTotal } = useCart();
    

    const addCart = (producto, cantidad) => {
        let productoExistente = false;

        cartList.map((item) => {
            if(item.id === producto.id){
                item.cantidad += cantidad;
                productoExistente = true;
            }
            return productoExistente;
        })


        if(productoExistente){
            const updatedCart = [...cartList];
            actualizarCart(updatedCart,producto,cantidad)
        }else{
            producto = { ...producto, cantidad: cantidad };
            const updatedCart = [...cartList, producto];
            actualizarCart(updatedCart,producto, cantidad)
        }
    }

    const actualizarCart=(updatedCart,producto,cantidad)=>{
        if(cantidad === undefined){
            cantidad = 1;
        }
        setCartList(updatedCart);
        setCantidad(updatedCart.length);
        setTotal(total + cantidad * producto.price)
        localStorage.setItem('total', parseFloat(total))
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        localStorage.setItem('cantidad', updatedCart.length);
    }

    return(
        <addCartContext.Provider value={{addCart}}>
            {children}
        </addCartContext.Provider>
    )
}

const useAddCart = () =>{
    return useContext(addCartContext)
}

export {AddCartProvider,useAddCart};
