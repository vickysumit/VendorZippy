import * as ActionTypes from './ActionTypes';

export const VendorList = (state = {
        isLoading: true,
        errMess: null,
        vendors: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_VENDORLIST:
            return {...state, isLoading: false, errMess: null, vendors: action.payload};

        case ActionTypes.VENDORLIST_LOADING:
            return {...state, isLoading: true, errMess: null, vendors: []};

        case ActionTypes.VENDORLIST_FAILED:
            return {...state, isLoading: false, errMess: action.payload, vendors: []};

        default:
            return state;
    }
}