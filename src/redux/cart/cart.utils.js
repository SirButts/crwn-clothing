export const addItemToCart = (cartItems, cartItemToAdd) => {
    //check if there is multiple cart items with the same id as the one we want to add and saving to variable
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    // add conditional if exist then we want to make a new array 
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}