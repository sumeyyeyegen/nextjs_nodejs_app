import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import storage from "../util/localStorage";

const cartItems = storage.get("cartItems");

const initState = { cart: { items: cartItems } };
const store = createStore( 
    rootReducer,
    initState,
    applyMiddleware(thunk)
);

export default store;

