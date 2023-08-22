import React, { useEffect, useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/CartContainer/Cart';




const App= () => {
  const [cartList,setCartList] = useState([]);
  const [cantidad,setCantidad] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('carrito'));
    if (storedCart) {
      setCartList(storedCart);
      setCantidad(storedCart.length);
    }
  
  }, []);
  useEffect(()=>{
    localStorage.setItem('carrito',JSON.stringify(cartList))
    localStorage.setItem('cantidad',cantidad)
  },[cartList, cantidad]);

  return (
    <BrowserRouter>
      <Nav cantidad={cantidad} setCantidad={setCantidad}/> 
      <Routes>
        <Route exact path="/" element={<ItemListContainer cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>}></Route>
        <Route exact path="/category/:id" element={<ItemListContainer cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer cartList={cartList} setCartList={setCartList} cantidad={cantidad} setCantidad={setCantidad}/>}></Route>
        <Route exact path="/cart" element={<Cart cartList={cartList} setCartList={setCartList}/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
