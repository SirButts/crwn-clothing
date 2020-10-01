//we make the action 

//import our type
import CartActionTypes from './cart.types';

//this is our action method
export const toggleCartHidden = () => ({
    // payload
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});