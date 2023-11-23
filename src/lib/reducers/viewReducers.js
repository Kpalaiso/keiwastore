import { REFRESH_VIEW } from "../actions/action_type";

export const refesh_view=(state=false, action)=>{
    switch (action.type) {
        case REFRESH_VIEW:
            return action.payload;
        default:
        break;
    }
    return state
}