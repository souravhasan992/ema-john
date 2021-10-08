import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    const reducer = (previous, product)=>previous + product.price;
    const total = cart.reduce(reducer, 0);
    // let total = 0;
    // for (const pd of cart){
    //     total = total + pd.price;
    // }
    const shipping = 15;
    const tax = (total + shipping) * .10;
    const grandTotal = (total+shipping+tax);
    
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Orders:{props.cart.length}</h5>
            <h4>Total:{total.toFixed(2)}</h4>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)} </p>
            <p><b>Grand Total: {grandTotal.toFixed(2)}</b></p>
        </div>
    );
};

export default Cart;