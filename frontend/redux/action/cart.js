import * as Types from '../constants/actionTypes'
import storage from '../../util/localStorage';

export const addToCart = (product) => dispatch => {
    var items = [];
    items = storage.get('cartItems');

    let productAlreadyInCart = false;

    for (let i = 0; i < items?.length; i++) {
        if(items[i].id === product.id){
            items[i].count += 1;
            productAlreadyInCart=true;
        }
    }

    if (!productAlreadyInCart) {
        items?.push({...product, count: 1 });
    }
    storage.set("cartItems", JSON.stringify(items));
    dispatch({
        type: Types.ADD_TO_CART,
        payload: { cartItems: items }
    })
}


export const deleteFromCart = productId => dispatch => {
    dispatch({
        type: Types.DELETE_FROM_CART,
        payload: { productId }
    })
}

export const increaseQuantity = productId => dispatch => {
    dispatch({
        type: Types.INCREASE_QUANTITY,
        payload: { productId }
    })
}


export const decreaseQuantity = productId => dispatch => {
    dispatch({
        type: Types.DECREASE_QUANTITY,
        payload: { productId }
    })
}



export const openCart = () => dispatch => {
    dispatch({
        type: Types.OPEN_CART,
    })
}

export const clearCart = () => dispatch => {
    dispatch({
        type: Types.CLEAR_CART,
    })
}

export const closeCart = () => dispatch => {
    dispatch({
        type: Types.CLOSE_CART,
    })
}


