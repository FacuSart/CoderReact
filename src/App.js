import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/CartContainer/Cart';
import { CartProvider, useCart } from './Contexts/CartContext.jsx';

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

const AppContent = () => {
  const { cartList, setCartList, cantidad, setCantidad} = useCart();
  
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
