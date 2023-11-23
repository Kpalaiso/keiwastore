import { ADD_CART, UPDATE_CART } from "../actions/action_type";

export const get_cart=(state=[], action)=>{
    switch (action.type) {
        case ADD_CART:
            return [
                ...state,
                ...action.payload
            ];
        case UPDATE_CART:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}