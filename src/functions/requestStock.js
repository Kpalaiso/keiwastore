import { client } from "../App";
import { SAVE_USER_STOCK_HISTORIQUE, UPDATE_USER_PRODUCT_STOCK, UPDATE_PRODUCT_STOCK_RATING } from "../lib/graphql/gqlStock";

export const _updateStock= async (tab_stock)=>{
    tab_stock.forEach( (element) => {
        let data_stock = { id_stock:element.id_stock,id_product:element.id_product,quantite:element.quantite,montant:element.montant,var_stock:element.var_stock,description:element.description,total_quantity:element.total_quantity.toString(),nom_product:element.nom_product,icone_product:element.icone_product,nb_unite_achat:element.nb_unite_achat,unite_vente:element.unite_vente,unite_achat:element.unite_achat,prix_achat:element.prix_achat,prix_vente:element.prix_vente,code_bare:element.code_bare,quatity_security:element.quatity_security,unite_security:element.unite_security,type_stock:element.type_stock,id_type_stock:element.id_type_stock,id_category:element.id_category,id_store:element.id_store, is_available:element.is_available, is_new_stock:element.is_new_stock };
         client.mutate({
            mutation: UPDATE_USER_PRODUCT_STOCK,
            variables:data_stock
          }).then((data) => {
                console.log(data);
          }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });  
    });     
}

export const _saveStockHistorique = async (tab_stock_historique)=>{
    tab_stock_historique.forEach( (element) => {
        let data_historique_stock = { nom_product:element.nom_product,icone_product:element.icone_product,quantite_entree:element.quantite_entre,quantite_sortie:element.quantite_sortie,prix_unitaire_entree:element.prix_unitaire_entre,prix_unitaire_sortie:element.prix_unitaire_sortie,description:element.description,total_quantity:element.total_quantity.toString(),prix_unitaire:element.prix_unitaire,unite_stock:element.unite,quantite:element.quantite,montant_stock:element.montant,date_stock:element.date_enregistrement,type_stock:element.type_stock,stock_initial:"0",id_user:element.id_user,id_account:element.id_account,id_product:element.id_product,id_stock:element.id_stock,other_index:element.other_index,id_stock_historique_local:element.id_stock_historique.toString() };
        client.mutate({
            mutation: SAVE_USER_STOCK_HISTORIQUE,
            variables:data_historique_stock
          }).then((data) => {
              console.log(data);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    });     
}

export const _updateRatingProduct=async(id_stock, nb_etoite)=>{
    return new Promise((resolve, reject)=>{
        client.mutate({
            mutation:UPDATE_PRODUCT_STOCK_RATING,
            variables:{id_stock, nb_etoite} 
        }).then((data) => {
            let _id_stock=data.data.updateProductStockRating.id_stock;
            resolve(_id_stock);
        }, (error) => {
            console.log("ERROR in SigninBox ", JSON.stringify(error));
        });
    })
}