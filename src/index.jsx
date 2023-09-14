import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAZ8RvL0lqyAWewTcP0_2Edt1rbpczzM14",
  authDomain: "coderhouse-ecommerce-b4adc.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b4adc",
  storageBucket: "coderhouse-ecommerce-b4adc.appspot.com",
  messagingSenderId: "623404079851",
  appId: "1:623404079851:web:1865295182b128d2ed3cae",
  measurementId: "G-FL4FBLKRKH"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
