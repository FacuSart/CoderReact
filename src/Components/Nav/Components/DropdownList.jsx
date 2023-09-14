import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './DropdownList.css';
import { Link } from 'react-router-dom';

const DropdownList = () => {
    const [dropdown, setDropdown] = useState(false);

    const dropdownHandler = () => {
        setDropdown(!dropdown)
    }

    return (
        
        <Dropdown isOpen={dropdown} toggle={dropdownHandler} className="position- d-flex justify-content-center">
            <DropdownToggle className="dropdownToggle bg-transparent border-0 nav-link">Categorias</DropdownToggle>
            <DropdownMenu className="dropdownMenu bg-dark">
                <Link to='/' className=" text-decoration-none"><DropdownItem className="dropdownItem fw-bold">Ver todo</DropdownItem></Link>
                <Link to='/category/1' className=" text-decoration-none"><DropdownItem className="dropdownItem fw-bold">BCAA</DropdownItem></Link>
                <Link to='/category/2' className=" text-decoration-none"><DropdownItem className="dropdownItem fw-bold">Creatinas</DropdownItem></Link>
                <Link to='/category/3' className=" text-decoration-none"><DropdownItem className="dropdownItem fw-bold">Proteinas</DropdownItem></Link>
            </DropdownMenu>
        </Dropdown>
        
    )
};

export default DropdownList;