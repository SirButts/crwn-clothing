//using reselect, : selectors in our app
import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    //input selector
    [selectCart],
    //our state cart returns cart.cartitems: a snippet of our state
    cart => cart.cartItems
);

//count selector

export const selectCartItemsCount = createSelector(
    //we pass in a smaller more specific state above
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
            0
        )
)



