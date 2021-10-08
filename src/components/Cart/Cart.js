import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    // using reduce 
    // const totalQuantity =cart.reduce((pre,cur)=>pre+ cur.quantity, 0);
    // const reducer = (previous, product)=>previous + product.price;
    // const total = cart.reduce(reducer, 0);
    let total = 0;
    let totalQuantity= 0;
    for (const pd of cart){
        if(!pd.quantity){
            pd.quantity =1;
        }
        total = total + pd.price * pd.quantity;
        totalQuantity = totalQuantity + pd.quantity;
    }
    const shipping = total >0 ? 15: 0;
    const tax = (total + shipping) * .10;
    const grandTotal = (total+shipping+tax);
    
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Orders:{totalQuantity}</h5>
            <h4>Total:{total.toFixed(2)}</h4>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)} </p>
            <p><b>Grand Total: {grandTotal.toFixed(2)}</b></p>
        </div>
    );
};

export default Cart;