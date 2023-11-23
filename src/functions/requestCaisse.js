import { client } from "../App";
import { SAVE_CAISSE } from "../lib/graphql/gqlCaisse";

export const _saveCaisse= async (_data_caisse)=>{
    _data_caisse.forEach( (element) => {
        let data_caisse = { nom_user:element.nom_user,libelle:element.libele,icone_product:element.icone_product,montant:element.montant,montant_paye:element.montant_paye,montant_verse:element.montant_verse,date_enregistrement:element.date_enregistrement,id_operation:element.id_operation,id_user:element.id_user,id_account:element.id_account,id_caisse_local:element.id_caisse,id_echeance:element.id_echeance,type_operation:element.type_operation };
        client.mutate({
            mutation: SAVE_CAISSE,
            variables:data_caisse
          }).then((data) => {
                console.log(data); 
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          }); 
    });     
}