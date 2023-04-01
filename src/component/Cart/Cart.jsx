import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart} = props
    console.log(cart)

    let total = 0;
    let totalShipping= 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
         total = total + product.price * product.quantity
         totalShipping = totalShipping + product.shipping
         quantity = quantity + product.quantity
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Item : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : {totalShipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand Total : ${grandTotal} </p>
        </div>
    );
};

export default Cart;