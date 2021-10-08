import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(() =>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart =[];
            for (const key in savedCart){
            const addedProduct = products.find( product => product.key === key);
            // console.log(addedProduct)
            if (addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
            }
            setCart(storedCart);
        }
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage for now
        addToDb(product.key);
    }
    

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>Products:{products.length}</h2>
                {products.map(product=><Product 
                product={product} 
                key={product.key}            
                handleAddToCart = {handleAddToCart}
                >

                </Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;