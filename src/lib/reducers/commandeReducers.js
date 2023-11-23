import { UPDATE_STORE_COMMANDE, UPDATE_DETAIL_STORE_COMMANDE } from "../actions/action_type";

export const get_commande=(state=[], action)=>{
    switch (action.type) {
        case UPDATE_STORE_COMMANDE:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}

export const get_detail_commande=(state=[], action)=>{
    switch (action.type) {
        case UPDATE_DETAIL_STORE_COMMANDE:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}