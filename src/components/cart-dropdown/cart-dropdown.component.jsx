import React from 'react';
// in order to use CartItem we need to pull off the 'item' using connect
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
//122
import { selectCartItems } from '../../redux/cart/cart.selectors';
//129. import action reuse
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';
//destructure cartitems
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
        </div>
        <CustomButton onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
            </CustomButton>
    </div>
)

//this is pulling what we need from our root 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));