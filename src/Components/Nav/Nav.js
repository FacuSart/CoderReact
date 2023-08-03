import React from 'react'
import CartWidget from './Components/CartWidget'
import './Nav.css'
const Nav = () => {
    
    return(
        
        <section className="nav flex-row align-items-center justify-content-between">
            <div className='d-flex flex-column text-center'>
                <h1 className='m-0'>OLIMPIA</h1>
                <p className='m-0'>Tienda fitness</p>
            </div>
            <div className='d-flex align-items-center'>
                <ul className="navbar-nav fs-5 text-center d-flex flex-row">
                    <li className="mx-3">
                        <a className="nav-link" href="#.">Inicio</a>
                    </li>
                    <li className="mx-3">
                        <a className="nav-link" href="#.">Categorias</a>
                    </li>
                    <li className="mx-3">
                        <a className="nav-link" href="#.">Acerca de</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </section>
       
    );
}

export default Nav;