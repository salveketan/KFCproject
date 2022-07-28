// import axios from "axios";

// import * as actionTypes from "./actionType";

// export const addToCart = (payload) => {
//     return {
//         type: actionTypes.ADD_TO_CART,
//         payload
//     }
// }

// // export const removeFromCart = (itemID) => {
// //     return {

// //         type: actionTypes.REMOVE_FROM_CART,
// //         payload: {
// //             id: itemID
// //         }
// //     }
// // }

// // export const adjustQty = (itemID, value) => {
// //     return {

// //         type: actionTypes.ADJUST_QTY,
// //         payload: {
// //             id: itemID,
// //             qty: value
// //         }
// //     }
// // }


// export const addProduct = (product) => dispatch => {
//     // dispatch(addProduct());
//     axios.post(" http://localhost:8080/cart", product)
//         .then(r => dispatch(addProduct(r.data)))
//         .catch(e => dispatch(e))
// }

// // export const adjustQty = (itemID, value) => {
// //     return {

// //         type: actionTypes.ADJUST_QTY,
// //         payload: {
// //             id: itemID,
// //             qty: value
// //         }
// //     }
// // }

