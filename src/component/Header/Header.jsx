import React, { useContext, useState } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const Header = () => {
    // const[reload,setReload] = useState(false)
    const {user,logOut} = useContext(AuthContext)
    const [loggedIn,setLoggedIn] = useState(!!user)

    const handleSignOut =() => {
        // setReload(false)
       logOut()

       .then(result => {setLoggedIn(false)})
       .catch(error => {
        console.log(error.message)
       })
    //    setReload(true)
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
                <button onClick={handleSignOut}>LogOut</button>
                </span> 
            }
           </div>
        
        </div>
    );
};

export default Header;