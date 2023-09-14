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
        <section className="nav align-items-center justify-content-between">
            <Link to='/' className='logo d-flex flex-column text-center px-4 text-decoration-none text-white'>
                <h1 className='nav-h1 my-lg-0 p-2'>OLIMPIA</h1>
            </Link>
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <div className="container-fluid d-flex justify-content-center mb-2 mb-lg-0" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <DropdownList/>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to='/orders'>Ordenes</Link>
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