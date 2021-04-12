import * as ActionTypes from './ActionTypes';

export const MarkActive = (state = {
        isLoading: true,
        errMess: null,
        activedish: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_MARKACTIVE:
            return {...state, isLoading: false, errMess: null, activedish: action.payload};

        case ActionTypes.MARKACTIVE_LOADING:
            return {...state, isLoading: true, errMess: null, activedish: []};

        case ActionTypes.MARKACTIVE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, activedish: []};

        default:
            return state;
    }
}