import { GET_ALL_STOCK_PRODUCT, UPDATE_STOCK_PRODUCT, ADD_USER_STORE_RATING, UPDATE_USER_STORE_RATING } from "../actions/action_type";

export const get_product=(state=[], action)=>{
    switch (action.type) {
        case GET_ALL_STOCK_PRODUCT:
            return [
                ...state,
                ...action.payload
            ];
        case UPDATE_STOCK_PRODUCT:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}

export const get_user_store_rating=(state=[], action)=>{
    switch (action.type) {
        case ADD_USER_STORE_RATING:
            return [
                ...state,
                ...action.payload
            ];
        case UPDATE_USER_STORE_RATING:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}