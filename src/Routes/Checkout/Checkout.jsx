import React, { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './Checkout.css'

const Checkout = () => {
  const [form, setForm] = useState({
    Buyer: [{ nombre: '', email: '', celular: '' }],
    Items: [],
  });

  const [id, setId] = useState();

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('carrito'));

      setForm((prevForm) => ({
        ...prevForm,
        Items: carrito,
      }));
    
  }, []);

  const changeHandler = (ev) => {
    const { name, value } = ev.target;
    const updatedBuyer = { ...form.Buyer[0], [name]: value };
    setForm((prevForm) => ({
      ...prevForm,
      Buyer: [updatedBuyer],
    }));
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
  
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    
    const buyerData = {
      nombre: form.Buyer[0].nombre,
      email: form.Buyer[0].email,
      celular: form.Buyer[0].celular,
    };
  
    const formData = {
      ...form,
      Buyer: buyerData,
    };
  

    addDoc(ordersCollection, formData).then((snapshot) => setId(snapshot.id));
  };
  

  return (
    <div>
      {typeof id !== 'undefined' ? (
        <h3 className='order-confirmed-h3'>Listo! <span className='d-block my-5'>El id de su orden es {id}</span> Muchas gracias por elegirnos!</h3>
      ) : (
        <div className='form-container'>
            <h3 className='form-container-h3'>Complete los siguientes datos</h3>
            <form onSubmit={submitHandler} className='form'>
            <div className='form-div'>
                <label htmlFor='nombre'>Nombre:</label>
                <input className='mx-5'
                required
                id='nombre'
                type="text"
                name="nombre"
                value={form.Buyer[0].nombre}
                onChange={changeHandler}
                />
            </div>

            <div className='form-div'>
                <label htmlFor="email">Email:</label>
                <input className='mx-5'
                required
                type="email"
                id="email"
                name="email"
                placeholder='example@email.com'
                value={form.Buyer[0].email}
                onChange={changeHandler}
                />
            </div>

            <div className='form-div'>
                <label htmlFor="phone">Celular:</label>
                <input  className='mx-5'
                required
                type="text"
                id="phone"
                name="celular"
                value={form.Buyer[0].celular}
                onChange={changeHandler}
                />
            </div>

            <button className='form-btn'>Enviar</button>
            </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
