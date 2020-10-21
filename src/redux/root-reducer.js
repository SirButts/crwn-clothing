
import { combineReducers } from 'redux';
//134. persist our reducer
import { persistReducer } from 'redux-persist';
//134. below we set our local storage as our storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//134.
const persistConfig = {
    //start from the root to start storing 
    key: 'root',
    storage,
    //whitelist is what we want to persist (state)
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);