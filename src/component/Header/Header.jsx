import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
          
           <div className='nav'>

           <Link to="/">shop</Link>
            <Link to="/Orders">Orders</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/login">Login</Link>

           </div>
        
        </div>
    );
};

export default Header;