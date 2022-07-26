import * as types from "../product/action";

const initState = {
    product: []
}

export const productReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.FETCH_DATA: {
            return {
                ...state,
                product: payload
            }
        }
        default:
            return state;
    }
}