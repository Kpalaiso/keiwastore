import { GET_CATEGORY, UPDATE_CATEGORY } from "../actions/action_type";

export const get_category=(state=[], action)=>{
    switch (action.type) {
        case GET_CATEGORY:
            return [
                ...state,
                ...action.payload
            ];
        case UPDATE_CATEGORY:
            return [
                ...action.payload
            ];
        default:
        break;
    }
    return state
}