import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const Login = () => {
    const [show,setShow] = useState(false)
    const {user,signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
       

        const from = location.state?.from?.pathname || '/'
    

    
    const handleLogin = (event)=> {
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value
        console.log(email,password)

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user 
            
            form.reset()
            navigate(from, {replace : true})
        })

        .catch(error => {
            console.log(error.message)
        })
    }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleLogin}>
        <div className="form-control">
        <label htmlFor="email"> Email </label>
        <input type="email" name="email" id="" required placeholder="Your email"/>

       </div>
      
        <div className="form-control">
        <label htmlFor="password"> Password </label>
        <input type={show ? "text" : 'password'} name="password" id="" required placeholder="Your password"/>

        <p onClick={()=> setShow(!show)}><small>
            {
                show ? <span>Hide password</span> : <span>Show password</span>
            }
            
        </small></p>

        </div>
        <input className="btn-submit" type="submit" value="login" />
      </form>

      <p><small>New to Ema-john ? <Link to='/signUp'>Create new account</Link> </small></p>


    </div>
  );
};

export default Login;
