import { client } from "../App";
import { SAVE_RECETTE_USER } from "../lib/graphql/gqlRecette";

export const _saveRecette= async (tab_recette)=>{
    tab_recette.forEach( (element) => {
        let data_recette = { prix_unitaire:element.prix_unitaire,quantite:element.quantite,is_credit:element.is_credit,date_recette:element.date_recette,unite:element.unite,montant:element.montant,descript:element.description,id_product:element.id_product,id_user:element.id_user,id_stock_historique:element.id_historique,id_facture:element.id_facture,id_recette_local:element.id_recette.toString(),date_enregistrement:element.date_enregistrement,nom_product:element.nom_product,icone_product:element.icone_product };
        client.mutate({
            mutation: SAVE_RECETTE_USER,
            variables:data_recette
          }).then((data) => {
                console.log(data);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    });     
}