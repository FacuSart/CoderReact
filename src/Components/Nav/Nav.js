import React, { useEffect } from 'react'
import CartWidget from './Components/CartWidget'
import './Nav.css';
import DropdownList from './Components/DropdownList';
import { Link } from 'react-router-dom';


const Nav = ({cantidad, setCantidad}) => {
    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("carrito"));
        if (storedCart) {
            setCantidad(storedCart.length);
        }
    }, [setCantidad]);
    return (
        <section className="nav flex-row align-items-center justify-content-between">
            <Link to='/' className='logo d-flex flex-column text-center px-4 text-decoration-none text-white'>
                <h1 className='my-0'>AMORO</h1>
            </Link>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <DropdownList/>
                            <li className="nav-item mx-3">
                                <Link className="nav-link fw-bold" to='/'>Mi cuenta</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link fw-bold" to='/'>Acerca de</Link>
                            </li>
                        </ul>
                        <CartWidget cantidad={cantidad} />
                    </div>
                </div>
            </nav>
        </section>

    );
}

export default Nav;