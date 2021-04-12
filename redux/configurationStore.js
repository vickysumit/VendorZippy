import { createStore, combineReducers, applyMiddleware } from 'redux';


import { Auth } from './auth';
import { VendorList } from './VendorList';
import { ActiveDish } from './activedish';


import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            vendorlist:VendorList,
            activedish:ActiveDish
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}