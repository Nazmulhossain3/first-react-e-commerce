import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart} = props

    let total = 0;
    for(const product of cart){
         total = total + product.price
    }



    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : {total}</p>
            <p>Total Shipping :</p>
            <p>Tax :</p>
            <p>Grand Total : </p>
        </div>
    );
};

export default Cart;