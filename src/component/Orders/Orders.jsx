import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart =useLoaderData()
    const [cart,setCart] = useState(savedCart)

    const handleFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>

          <div className="review-container">
         {
            cart.map(product => <Reviewitem
            product={product}
            handleFromCart={handleFromCart}
            key={product.id}></Reviewitem>)
         }
        
        
        </div >  
       

        <div  className="cart-Container">
      
        <Cart cart={cart}
        handleClearCart={handleClearCart}>

            <Link className='processed-link' to='/checkOut'><button className='btn-processed'>Processed check out</button></Link>

        </Cart>
       
        </div>
       
    
      </div>
    );
};

export default Orders;