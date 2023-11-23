import { combineReducers }  from "redux";
import { loading_reducer, load_data_store_reducers, get_is_paiement, load_user_infos, get_user_coordinates } from "./LoadingReducers";
import { get_product, get_user_store_rating } from "./productReducers";
import { get_category } from "./categoryReducers";
import { get_cart } from "./cartReducers";
import { get_client, get_user_store } from "./clientReducers";
import { refesh_view } from "./viewReducers";
import { get_commande, get_detail_commande } from "./commandeReducers";

export default combineReducers({
     loading: loading_reducer,
     is_paiement: get_is_paiement,
     store_data: load_data_store_reducers,
     product_list: get_product,
     category_list: get_category,
     cart_list: get_cart,
     list_client: get_client,
     list_user_store: get_user_store,
     isRefresh: refesh_view,
     list_commande: get_commande,
     list_user_infos: load_user_infos,
     list_detail_commande: get_detail_commande,
     list_user_store_rating: get_user_store_rating,
     list_user_coordinates: get_user_coordinates
});