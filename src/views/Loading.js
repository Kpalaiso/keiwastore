import React, { useEffect } from 'react';
import { useDispatch, batch } from "react-redux";
import { _findProductStoreUser } from "../functions/requestProduct";
import { _findCategoryByStore } from "../functions/requestCategory";
import { _findStoreByLocalId, _findUserById } from "../functions/requestStore";
import { _findCommandeById, _findDetailCommandeById } from "../functions/requestCommande";
import { _findUserStoreId } from "../functions/requestClient";
import { _findAllRatingStore } from "../functions/requestRating";
import CircularSpinnerProgress from "../components/CircularSpinnerProgress";
import { LOAD_USER_DATA, GET_ALL_STOCK_PRODUCT, GET_CATEGORY, LOAD_PAIEMENT, UPDATE_STORE_COMMANDE, UPDATE_DETAIL_STORE_COMMANDE, GET_USER_STORE, USER_INFOS_DATA, ADD_USER_STORE_RATING } from "../lib/actions/action_type";
import '../App.css';

const Loading = () => {
    /* 
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  console.log(id);
  http://localhost:3000/?id=1234 
  */
   const dispatch = useDispatch();
   useEffect( () => {
       async function selectAllStoreData(){
           let store=window.sessionStorage.getItem("id_store");
           if(store){
            let stockProductData = await _findProductStoreUser(store.toString());
            let categoryData = await _findCategoryByStore(store.toString());
            let storeData = await _findStoreByLocalId(store.toString());
            let user_infos_data= await _findUserById(storeData.id_user);
            let data_store_rating = await _findAllRatingStore(store.toString());
            window.sessionStorage.setItem('id_store', store);
            batch(()=>{
                dispatch({type:LOAD_USER_DATA, payload:[storeData]});
                dispatch({type:GET_CATEGORY, payload:categoryData});
                dispatch({type:GET_ALL_STOCK_PRODUCT, payload:stockProductData});
                dispatch({type:ADD_USER_STORE_RATING, payload:data_store_rating});
                dispatch({type:USER_INFOS_DATA, payload:[user_infos_data]});
            });
           }
           else{
            const queryParams = new URLSearchParams(window.location.search);
            store = queryParams.get('store');
            if(store){
                let stockProductData = await _findProductStoreUser(store.toString());
                let categoryData = await _findCategoryByStore(store.toString());
                let storeData = await _findStoreByLocalId(store.toString());
                let user_infos_data= await _findUserById(storeData.id_user);
                window.sessionStorage.setItem('id_store', store);
                batch(()=>{
                    dispatch({type:LOAD_USER_DATA, payload:[storeData]});
                    dispatch({type:GET_CATEGORY, payload:categoryData});
                    dispatch({type:GET_ALL_STOCK_PRODUCT, payload:stockProductData});
                    dispatch({type:USER_INFOS_DATA, payload:[user_infos_data]});
                });
            }
            else{
              let id_store = queryParams.get('cmtstore');
              let id_commande = queryParams.get('id_commande');
              let storeData = await _findStoreByLocalId(id_store.toString());
              let stockProductData = await _findProductStoreUser(id_store.toString());
              let data_commande = await _findCommandeById(parseInt(id_commande));
              let detail_data_commande = await _findDetailCommandeById(parseInt(id_commande));
              let data_client_store= await _findUserStoreId(parseInt(data_commande.id_client_store));
              let user_infos_data= await _findUserById(storeData.id_user);
              batch(()=>{
                dispatch({type:LOAD_USER_DATA, payload:[storeData]});
                dispatch({type:UPDATE_STORE_COMMANDE, payload:[data_commande]});
                dispatch({type:UPDATE_DETAIL_STORE_COMMANDE, payload:detail_data_commande});
                dispatch({type:GET_ALL_STOCK_PRODUCT, payload:stockProductData});
                dispatch({type:GET_USER_STORE, payload:data_client_store});
                dispatch({type:USER_INFOS_DATA, payload:[user_infos_data]});
                dispatch({type:LOAD_PAIEMENT, payload:true});
             }); 
            }
           }
       }
       selectAllStoreData();
   }, []); 
  return (
    <div className="loading" >
        <CircularSpinnerProgress  />
    </div>
  )
}

export default Loading