import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav'

function App() {
  
  return (
    <div className="App">
      <Nav/> 
      <ItemListContainer texto="Hola Mundo!"/>
    </div>
  );
}

export default App;
