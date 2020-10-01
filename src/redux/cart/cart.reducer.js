//importing our action 
import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
};
// We want our shopping cart to be hidden in the beginning. (initial state)


//our reducer takes in two parameters, the state (if state has no value then the default is  state = INITIAL_STATE)
const cartReducer = (state = INITIAL_STATE, action) => {
    //below we have a switch, functions like an if else, where our switch will check for (action.type) and case is our action 'TOGGLE_CART_HIDDEN if true return...
    //all of the state and have the hidden key to hold value of !state.hidden (false)
    //default (else) return the state as is
    switch (action.type) {
        //we defined our conditional type (action is CartActionTypes. type is TOGGLE_CART_HIDDEN)
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            //if true
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            //else
            return state;
    }
}

//export the reducer
export default cartReducer;