import storage from "../../util/localStorage";
import { deleteProduct, findProductIndexById } from "../../util/util";
import * as Types from "../constants/actionTypes";

export default function (state ={}, action) {
    let index = null;

    switch (action.type) {
        case Types.INIT_LOCALSTORAGE:
            return [...action.payload.cartItems];

        case Types.ADD_TO_CART: 
            console.log('state',state);
            console.log('state',action);
        return { ...state, items: {items: action.payload.cartItems, added_status:true} };

        case Types.DELETE_FROM_CART:
            const newCartItems = deleteProduct(state, action.payload.productId);
            storage.set("cartItems", newCartItems);

            return [...newCartItems];

        case Types.INCREASE_QUANTITY:
            index = findProductIndexById(state, action.payload.productId);
            console.log(index);
            if (index === -1) return state;

            state[index].count += 1;
            storage.set("cartItems", [...state]);

            return [...state];

        case Types.DECREASE_QUANTITY:
            console.log(state);
            console.log(action.payload.productId);
            index = findProductIndexById(state, action.payload.productId);
            console.log(index);
            if (index === -1) return state;

            const quantity = state[index].count;
            if (quantity > 1) state[index].count -= 1;
            storage.set("cartItems", [...state]);

            return [...state];

        case Types.CLEAR_CART:
            storage.set("dokani_cart", []);
            return [];

        default:
            return state;
    }
};