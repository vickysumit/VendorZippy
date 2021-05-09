import * as ActionTypes from './ActionTypes';
import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}




export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://192.168.43.241:3000/users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
           // SecureStore.setItemAsync('token', response.token);
            AsyncStorage.setItem('token',response.token) 
             .catch((error) => console.log('Could not save user info', error));
           // SecureStore.setItemAsync('creds', JSON.stringify(creds));
            AsyncStorage.setItem('creds',JSON.stringify(creds))
            .catch((error) => console.log('Could not save user info', error));

            // Dispatch the success action
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};


export const signIn = (username,password) => async(dispatch) => {
    let userToken;
    userToken= null;

    fetch('http://192.168.43.241:3000/users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify({username,password})
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(async(response) => {
        if (response.success) {
           
            userToken=response.token;
            try{
                await AsyncStorage.setItem('userToken',userToken)
            }catch(e){console.log(e)}
            dispatch({type:'LOGIN',id:username,token:userToken})
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error =>console.log(error.message))
    // if(username=='sumit' && password=='123')
    // {
    //     userToken='abab';
    //     try{
    //         await AsyncStorage.setItem('userToken',userToken)
    //     }catch(e){console.log(e)}
        
    // }
    // dispatch({type:'LOGIN',id:username,token:userToken})
    
}

export const signOut = ()=> async(dispatch) => {
    try{
        await AsyncStorage.removeItem('userToken')
    }catch(e){console.log(e)}   
    dispatch({type:'LOGOUT'})
}


export const registerUser = (userToken)=> (dispatch) => {
    dispatch({type:'REGISTER',token:userToken})
    
}


export const fetchVendorList = () => (dispatch) => {
    dispatch(vendorlistLoading(true));

    return fetch('http://192.168.43.241:3000/' + 'vendorlist')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(vendors => dispatch(addVendorlist(vendors)))
        .catch(error => dispatch(vendorlistFailed(error.message)));
}

export const vendorlistLoading = () => ({
    type: ActionTypes.VENDORLIST_LOADING
});

export const vendorlistFailed = (errmess) => ({
    type: ActionTypes.VENDORLIST_FAILED,
    payload: errmess
});

export const addVendorlist = (vendors) => ({
    type: ActionTypes.ADD_VENDORLIST,
    payload: vendors
});


export const changeActive = () => (dispatch) => {
    dispatch(activeLoading(true));

    return fetch('http://192.168.43.241:3000/' + 'active')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(activedish => dispatch(addActive(activedish)))
        .catch(error => dispatch(activeFailed(error.message)));
}

export const activeLoading = () => ({
    type: ActionTypes.ACTIVEDISH_LOADING
});

export const activeFailed = (errmess) => ({
    type: ActionTypes.ACTIVEDISH_FAILED,
    payload: errmess
});

export const addActive = (activedish) => ({
    type: ActionTypes.ADD_ACTIVEDISH,
    payload: activedish
});




export const markActive = (id) => (dispatch) => {
    

    return fetch('http://192.168.43.241:3000/active/' + id , {
        method: 'PUT',
        headers: { 
            'Content-Type':'application/json' 
        },
    })
        .then(response => {
            if (response.ok) {
                console.log('done')
                return response;
            }
            else {
                console.log('not done')
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .catch(error => console.log(error.message));
}

export const addToCart = (product)=>(dispatch)=>{
    console.log(product);
    dispatch(addtocartFunction(product));
}


export const addtocartFunction = (product) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: product
});


export const gmailVerifyRequest  = (mail) => (dispatch) => {
    
    console.log(mail);
    
    return fetch('http://192.168.43.241:3000/gmail/signup' , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            email: mail
          })
    })
        .then(response => {
            if (response.ok) {
                console.log('done')
                return response;
            }
            else {
                console.log('not done')
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .catch(error => {console.log(error)});
}

export const isVerified = () => ({
    type: ActionTypes.REQUEST_MAIL_VERIFY
});

export const otp  = () => (dispatch) => {
    

    return fetch('http://192.168.43.241:3000/gmail/random' , {
        method: 'POST',
        
    })
        .then(response => {
            if (response.ok) {
                console.log('done')
                return response;
            }
            else {
                console.log('not done')
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then((response)=>{console.log(response);global.random_num=response.rnum ;})
        .catch(error => {{console.log(error)}});
}
