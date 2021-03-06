import React from 'react';

//we want to have our redux state so we connect to redux and import our action
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';

//122
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

//we can access toggleCartHidden
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    //and because we have access in our CartIcon component we can bind it onClick
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

//redux
const mapDispatchToProps = dispatch => ({
    //function that triggers the dispatch of toggleCartHidden 
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//.121 
const mapStatetoProps = createStructuredSelector({
    itemCount: selectCartItemsCount // <---selector call
});

//connect function we pass null as the default and our dispatch 
export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(CartIcon);