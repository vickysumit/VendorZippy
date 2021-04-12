import * as ActionTypes from './ActionTypes';
import CartItem from "../model/cart_item";
export const CartList = (state = {
        item: {},
        totalAmount: 0
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            const addedProduct = action.payload;
            const productName = addedProduct.itemname;

            if(state.item[addedProduct._id]){
                const updatedCartItem = new CartItem(
                    state.item[addedProduct._id].quantity + 1,
                    productName
                )

                return{
                    ...state,
                    item:{...state.item,[addedProduct._id]:newCartItem}
                }
            }
            
            else{
                const newCartItem = new CartItem(1,productName);
                return{
                    ...state,
                    item:{...state.item,[addedProduct._id]:newCartItem}
                }
            }
        default:
            return state;
    }
}

