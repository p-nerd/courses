import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    DELETE_CART_ITEM,
    INCREASE_QUANTITY,
} from "./cartActionsType";
import cartInitialState from "./cartInitialState";

const nextCartId = cart => {
    const maxId = cart.reduce((maxId, cartItem) => Math.max(maxId, cartItem.id), 0);
    return maxId + 1;
};

const isProductExist = (cart, productId) => {
    return cart.filter(cartItem => cartItem.product.id === productId).length === 1;
};

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (isProductExist(state, action.payload.id)) {
                return state.map(cartItem => {
                    if (cartItem.product.id === action.payload.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                });
            }
            return [
                ...state,
                {
                    id: nextCartId(state),
                    product: action.payload,
                    quantity: 1,
                },
            ];
        case INCREASE_QUANTITY:
            return state.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
        case DECREASE_QUANTITY:
            return state.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
        case DELETE_CART_ITEM:
            return state.filter(cartItem => cartItem.id !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;
