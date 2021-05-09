import * as ActionTypes from './ActionTypes';

export const GmailVerify = (state = {
        isLoading: true,
        isVerified:false,
       
    }, action) => {
    switch(action.type) {
        case ActionTypes.REQUEST_MAIL_VERIFY:
            return {...state, isVerified: true};

        case ActionTypes.FAILED_MAIL_VERIFY:
            return {...state, isVerified: false};


        default:
            return state;
    }
}