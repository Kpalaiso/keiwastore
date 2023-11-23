import { client } from "../App";
import { SAVE_PRODUCT_RATING, FIND_PRODUCT_RATING_BY_CLIENT_STORE, FIND_PRODUCT_RATING_BY_STOCK_ID, FIND_PRODUCT_RATING_BY_USER_ID, UPDATE_PRODUCT_RATING, UPDATE_PRODUCT_STOCK_RATING, FIND_PRODUCT_RATING_BY_ID_STORE } from "../lib/graphql/gqlRating";
import store from "../lib/store";
import { REFRESH_VIEW } from "../lib/actions/action_type";

export const _saveRating=(data_rating)=>{
return new Promise((resolve, reject)=>{
    client.mutate({
        mutation: SAVE_PRODUCT_RATING,
        variables:data_rating 
    }).then((data) => {
        console.log(data);
        let _id_product_rating=data.data.saveProductRating.id_product_rating;
        resolve(_id_product_rating);
    }, (error) => {
        console.log("ERROR in SigninBox ", JSON.stringify(error));
    });
});
}

export const _findUserUserStoreProductRating=(id_client_store,id_stock)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: FIND_PRODUCT_RATING_BY_CLIENT_STORE,
            variables:{id_client_store,id_stock}
        }).then((data) => {
            resolve(data.data.findProductRatingByClientStore);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _findUserProductRatingUserId=(id_user)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: FIND_PRODUCT_RATING_BY_USER_ID,
            variables:{id_user} 
        }).then((data) => {
            resolve(data.data.findProductRatingByUserId);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _findAllRatingStore=(id_store)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: FIND_PRODUCT_RATING_BY_ID_STORE,
            variables:{id_store} 
        }).then((data) => {
            resolve(data.data.findProductRatingByIdStore);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _findUserProductRatingByStockId=(id_stock)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: FIND_PRODUCT_RATING_BY_STOCK_ID,
            variables:{id_stock} 
        }).then((data) => {
            resolve(data.data.findProductRatingByStockId);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _updateProductRating=(data_rating)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: UPDATE_PRODUCT_RATING,
            variables:data_rating
        }).then((data) => {
            let _id_product_rating=data.data.updateProductRating.id_product_rating;
            resolve(_id_product_rating);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _updateProductStockRating=(data_rating)=>{
     return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: UPDATE_PRODUCT_STOCK_RATING,
            variables:{id_stock: data_rating.id_stock, nb_etoile: data_rating.nb_etoile}
        }).then((data) => {
            let _id_stock=data.data.updateProductStockRating.id_stock;
            resolve(_id_stock);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    }); 
}