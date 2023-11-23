import { GET_CLIENT, UPDATE_CLIENT, GET_USER_STORE, UPDATE_USER_STORE } from "../actions/action_type";

export const get_client=(state=[], action)=>{
    switch (action.type) {
        case GET_CLIENT:
            return [
                ...state,
                ...action.payload
            ];
        case UPDATE_CLIENT:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}

export const get_user_store=(state=[], action)=>{
    switch (action.type) {
        case GET_USER_STORE:
            return [
                ...state,
                ...action.payload
            ];
        case UPDATE_USER_STORE:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}