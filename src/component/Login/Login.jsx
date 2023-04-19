import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const Login = () => {

    const {signIn} = useContext(AuthContext)

    
    const handleLogin = (event)=> {
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value
        console.log(email,password)

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user 
            console.log(loggedUser)
            form.reset()
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
        <input type="password" name="password" id="" required placeholder="Your password"/>
        </div>
        <input className="btn-submit" type="submit" value="login" />
      </form>

      <p><small>New to Ema-john ? <Link to='/signUp'>Create new account</Link> </small></p>


    </div>
  );
};

export default Login;
