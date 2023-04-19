import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleSignOut =() => {
       
    }
    
    return (
        <div className='header'>
            <img src={logo} alt="" />
          
           <div className='nav'>

           <Link to="/">shop</Link>
            <Link to="/Orders">Orders</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signUp">SignUp</Link>

            {
                user && <span className='user-text'>Welcome {user.email}
                <button onClick={handleSignOut}>SignOut</button>
                </span>
            }
           </div>
        
        </div>
    );
};

export default Header;