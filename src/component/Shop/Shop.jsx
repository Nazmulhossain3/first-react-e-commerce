import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))


    },[])

    const  handleAddToCart = (product)=> {
        console.log(product)

    }


    return (
        <div className='shop-container'>

            {/* this is Shop container */}

            <div className="products-Container">
            {
                products.map(product => <Product
                key={product.id}
                product={product} handleAddToCart={handleAddToCart}>

                </Product>)
            }
            </div>

           
           
           {/* this is cart container */}
           
            <div className="cart-Container">
                <h4>Please Order submit</h4>
            </div>
            
        </div>
    );
};

export default Shop;