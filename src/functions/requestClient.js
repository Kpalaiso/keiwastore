import { client } from "../App";
import { SAVE_CLIENT, SAVE_USER_STORE, LOGIN_CLIENT_STORE, FIND_USER_STORE_ID, LOGIN_USER_STORE, FIND_USER_STORE_BY_EMAIL } from "../lib/graphql/gqlClient";
import store from "../lib/store";
import { REFRESH_VIEW } from "../lib/actions/action_type";

export const _saveClient=(data_client)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: SAVE_CLIENT,
            variables:data_client 
        }).then((data) => {
            let _id_client=data.data.saveClient.id_client;
            resolve(_id_client);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _saveUserStore=(data_user)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: SAVE_USER_STORE,
            variables:data_user 
        }).then((data) => {
            let _id_client_store=data.data.saveUserStore.id_client_store;
            resolve(_id_client_store);
        },(error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _loginClientStore=(id_client_store)=>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: LOGIN_CLIENT_STORE,
            variables:{id_client_store:id_client_store} 
        }).then((data) => {
            resolve(data.data.loginClientStore);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _loginUserStore=(email, password)=>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: LOGIN_USER_STORE,
            variables:{email:email,password:password} 
        }).then((data) => {
            resolve(data.data.loginUserStore);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}

export const _findUserStoreId=(id_client_store)=>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_USER_STORE_ID,
            variables:{id_client_store:id_client_store} 
        }).then((data) => {
            resolve(data.data.findUserStoreId);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
} 

export const _findUserStoreByEmail=(email)=>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_USER_STORE_BY_EMAIL,
            variables:{email} 
        }).then((data) => {
            resolve(data.data.findUserStoreByEmail);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}