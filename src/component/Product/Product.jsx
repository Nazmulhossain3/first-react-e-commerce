import React from "react";
import "./Product.css";

const Product = (props) => {
    console.log(props)
  const { img, name, price, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart

  return (
    <div className="product">
        <img src={img} alt="" />
       
        <div className="product-info">
       
        <h6 className="product-name">{name}</h6>
        <p> price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratings : {ratings}</p>
    
        </div>

        <button onClick={()=> handleAddToCart(props.product)} className="btn-cart">Add to Cart</button>
  </div>
  )
};

export default Product;
