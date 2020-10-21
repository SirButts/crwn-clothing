
import { createStore, applyMiddleware } from 'redux';
//134. Redux Persist; allows us to cache our store 
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//134. adding persistance to our store 
export const persistor = persistStore(store);



