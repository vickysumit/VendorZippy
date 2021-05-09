import * as ActionTypes from './ActionTypes';
import CartItem from "../model/cart_item";
export const CartList = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            if(state.some((item)=>item._id==action.payload._id))
            {
                var f= state.find((item)=>item._id== action.payload._id);
                f["quantity"]= f["quantity"] + 1;
                // var arr = state.filter((item=>item._id==action.payload._id))
                // arr.push({"quantity":"1"})
                // return {state:{state,[action.payload._id]:arr}};
                return state;
            }
             else{
                var  f1 = action.payload;
                f1["quantity"]=1
                return[...state,f1] 
             }
            
                   
        default:
            return state;
    }
}

