import { createStore, combineReducers, applyMiddleware } from 'redux';


import { Auth } from './auth';
import { VendorList } from './VendorList';
import { ActiveDish } from './activedish';
import { CartList } from './cart';
import { GmailVerify } from './gmail';


import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            vendorlist:VendorList,
            activedish:ActiveDish,
            cartlist:CartList,
            gmail:GmailVerify
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}