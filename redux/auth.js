import * as ActionTypes from './ActionTypes';
import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Auth = (state = {        
        isLoading: true,
        userName: null,
        userToken:null
    }, action) => {
    switch (action.type) {
        case 'RETRIEVE_TOKEN':
            return {...state,
                userToken: action.token,
                isLoading:false
            };
        case 'LOGIN':
            return {...state,
                isLoading: false,
                userName:action.id,
                userToken:action.token
            };
        case 'LOGOUT':
            return {...state,
                isLoading: false,
                userName:null,
                userToken:null
            };
        case 'REGISTER':
            return {...state,
                isLoading: false,
                userToken:action.token
            };
        default:
            return state
    }
}