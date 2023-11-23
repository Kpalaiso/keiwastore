import { client } from "../App";
import { FIND_DETAIL_COMMANDE_BY_ID, FIND_COMMANDE_BY_CLIENT_STORE_ID, SAVE_COMMANDE, SAVE_DETAIL_COMMANDE, UPDATE_COMMANDE, FIND_COMMANDE_BY_ID } from "../lib/graphql/gqlCommande";
import store from "../lib/store";
import { REFRESH_VIEW } from "../lib/actions/action_type";

export const _findCommandeByClientStoreId = async (id_client_store) =>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_COMMANDE_BY_CLIENT_STORE_ID,
            variables:{id_client_store:id_client_store},
            fetchPolicy: 'no-cache'
          }).then((data) => {
              resolve(data.data.findCommandeByClientStoreId);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    });
}

export const _findCommandeById = async (id_commande) =>{
    return new Promise((resolve, reject)=>{
        client.query({
            query:FIND_COMMANDE_BY_ID,
            variables:{id_commande:id_commande},
            fetchPolicy: 'no-cache'
          }).then((data) => {
              resolve(data.data.findCommandeById);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    })
}

export const _findDetailCommandeById = async (id_commande) =>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_DETAIL_COMMANDE_BY_ID,
            variables:{id_commande:id_commande},
            fetchPolicy: 'no-cache'
          }).then((data) => {
              resolve(data.data.findDetailCommandeById);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    })
}

export const _saveCommande=(data_commande)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation: SAVE_COMMANDE,
            variables:data_commande 
        }).then((data) => {
            let _id_commande=data.data.saveCommande.id_commande;
            resolve(_id_commande);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    })
}

export const _updateCommande=(id_commande,status)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation:UPDATE_COMMANDE ,
            variables:{id_commande:id_commande,status:status} 
        }).then((data) => {
            let _id_commande=data.data.updateCommande.id_commande;
            resolve(_id_commande);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    })
}

export const _saveDetailCommande=(cartData, id_commande, id_user, id_client_store)=>{
    cartData.forEach(element => {
        let detail_commande={id_commande:id_commande,id_user:id_user,id_stock:element.id_stock,description:element.description,icone_product:element.icone_product,prix_vente:element.prix_vente,quantite:element.qty,unite:element.unite_vente,montant:element.price,id_client_store:id_client_store,id_product:element.id_product}
        client.mutate({
            mutation: SAVE_DETAIL_COMMANDE,
            variables:detail_commande 
        }).then((data) => {
            console.log("commande enregistrer");
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });  
}