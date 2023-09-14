import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/CartContainer/Cart';
import { CartProvider, useCart } from './Contexts/CartContext.jsx';
import { AddCartProvider } from './Contexts/addCartContext';
import Checkout from './Routes/Checkout/Checkout';
import OrderFinder from './Routes/Orderfinder/Orderfinder';

const App = () => {
  return (
    <CartProvider>
      <AddCartProvider>
        <AppContent />
      </AddCartProvider>
    </CartProvider>
  );
}

const AppContent = () => {
  const { cantidad, setCantidad} = useCart();
  
  return (
      <BrowserRouter>
          <Nav cantidad={cantidad} setCantidad={setCantidad}/> 
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}></Route>
            <Route exact path="/category/:id" element={<ItemListContainer/>}></Route>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/checkout" element={<Checkout/>}></Route>
            <Route exact path="/orders" element={<OrderFinder/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
