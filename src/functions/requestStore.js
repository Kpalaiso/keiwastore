import { client } from "../App";
import { FIND_STORE_BY_LOCAL_ID, SAVE_USER_WALLET_AMOUNT, FIND_USER_BY_ID } from "../lib/graphql/gqlStore";

export const _findStoreByLocalId = (id_local_store)=>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_STORE_BY_LOCAL_ID,
            variables:{id_local_store:id_local_store},
            fetchPolicy: 'no-cache'
          }).then((data) => {
                resolve(data.data.findStoreByLocalId);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    }); 
}

export const _findUserById = (userId)=>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_USER_BY_ID,
            variables:{userId},
            fetchPolicy: 'no-cache'
          }).then((data) => {
                resolve(data.data.findUserById);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    }); 
}

export const _saveUserWalletAmount=(data_amount)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: SAVE_USER_WALLET_AMOUNT,
            variables:data_amount 
        }).then((data) => {
            let _id_wallet=data.data.saveUserWalletAmount.id_wallet;
            resolve(_id_wallet);
        },(error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });
}