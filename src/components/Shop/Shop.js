import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>Products:{products.length}</h2>
                {products.map(product=><Product product={product} key={product.key}></Product>)}
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h5>Items Orders:</h5>
            </div>
        </div>
    );
};

export default Shop;