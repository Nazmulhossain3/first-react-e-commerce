import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))


    },[])



    useEffect(()=>{
        const savedCart = [];
        const storedCart = getShoppingCart()
        //    get the id
         for(const id in storedCart){
    
         // step-2 get the product by using id
         const addedProduct = products.find(product => product.id===id)
            
         if(addedProduct){
        // get quantity of product
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        // step-4 add the added product to the saveCart
        savedCart.push(addedProduct)
              
    }
    // step-5 save the Cart
    setCart(savedCart)
              
            
        }
    
     
    },[products])



    const  handleAddToCart = (product)=> {
       const newCart = [...cart,product]
       setCart(newCart)
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
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
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link className='processed-link' to="/orders"><button className='btn-processed'>Review order</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;