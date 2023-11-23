import { CONNECTED, LOAD_USER_DATA, LOAD_PAIEMENT, USER_INFOS_DATA, GET_USER_COORDINATES } from "../actions/action_type";

export const loading_reducer=(state=[], action)=>{
    switch (action.type) {
        case CONNECTED:
            return action.payload;
        default:
        
        break;
    }
    return state
}

export const load_data_store_reducers=(state=[], action)=>{
    switch (action.type) {
        case LOAD_USER_DATA:
            return action.payload;
        default:
        break;
    }
    return state
}

export const load_user_infos=(state=[], action)=>{
    switch (action.type) {
        case USER_INFOS_DATA:
            return action.payload;
        default:
        break;
    }
    return state
}

export const get_is_paiement=(state=false, action)=>{
    switch (action.type) {
        case LOAD_PAIEMENT:
            return action.payload;
        default:
        break;
    }
    return state
}

export const get_user_coordinates=(state=null, action)=>{
    switch (action.type) {
        case GET_USER_COORDINATES:
            return action.payload;
        default:
        break;
    }
    return state
}