//we make the action 

//import our type
import CartActionTypes from './cart.types';

//this is our action method
export const toggleCartHidden = () => ({
    // payload
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//action add items into our cart. type is defined in our cart.types.js, the payload it delivers is the item  which we parsed into the function.
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});