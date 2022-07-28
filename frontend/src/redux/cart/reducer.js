import * as actionTypes from "./actionType";

const initState = {
    cart: [],
    currentItem: null
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        // case actionTypes.REMOVE_FROM_CART:
        //     return {

        //     }
        // case actionTypes.ADJUST_QTY:
        //     return {

        //     }
        default:
            return state
    }
}
