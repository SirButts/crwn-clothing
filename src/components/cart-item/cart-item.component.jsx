import React from 'react';
import './cart-item.styles.scss';

//we pass in our item but we destructure the properties off item to be used in our component
const CartItem = ({ item: { imageURL, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageURL} alt="item" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
)

export default CartItem; 