import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    let total = 0;
    for (const pd of cart){
        total = total + pd.price;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Orders:{props.cart.length}</h5>
            <h4>Total:{total}</h4>
        </div>
    );
};

export default Cart;