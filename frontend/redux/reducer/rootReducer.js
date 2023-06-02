import { combineReducers } from 'redux'
import cartReducers from "./cart";

const rootReducer = combineReducers({
    cart:cartReducers
})

export default rootReducer