import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../../App';
import app from '../../firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

  
const Authprovider = ({children}) => {
   
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
  
    const createUser = (email,password)=> {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
     return   signInWithEmailAndPassword(auth,email,password)
    }
   
    const logOut = () => {
     return  signOut(auth)
     .then(() => {
        updateUser(null)
     })

    }

    const updateUser = (newUser) => {
        setUser(newUser)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser)
            // if (currentUser?.uid) {
            //     setUser(currentUser)
            // }
            // else{
            //     setUser(null)
            // }

            if(currentUser){
                setUser(currentUser)
                setLoading(false)

            }

        })

        return () => {
         
            unsubscribe();
        }
    }, [])
  
    const AuthInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,

}
   
    return (

       <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;