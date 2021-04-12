import * as ActionTypes from './ActionTypes';

export const ActiveDish = (state = {
        isLoading: true,
        errMess: null,
        activedish: [],
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ACTIVEDISH:
            return {...state, isLoading: false, errMess: null, activedish: action.payload};

        case ActionTypes.ACTIVEDISH_LOADING:
            return {...state, isLoading: true, errMess: null, activedish: []};

        case ActionTypes.ACTIVEDISH_FAILED:
            return {...state, isLoading: false, errMess: action.payload, activedish: []};

        default:
            return state;
    }
}