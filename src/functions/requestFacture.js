import { client } from "../App";
import { SAVE_FACTURE } from "../lib/graphql/gqlFacture";

export const _saveFacture= async (_data_facture)=>{
    let data_facture = { nom_user:_data_facture.nom_user, description:_data_facture.description, tel_user:_data_facture.tel_user, montant:_data_facture.montant, montant_paye:_data_facture.montant_paye, montant_echeance:_data_facture.montant_echeance,echeance_paye:_data_facture.echeance_paye,echeance:_data_facture.echeance,id_echeance:_data_facture.id_echeance,progression:_data_facture.progression,remise:_data_facture.remise,other_spend:_data_facture.other_spend,date_user:_data_facture.date_user,type:_data_facture.type,id_account:_data_facture.id_account,id_user:_data_facture.id_user,id_client:_data_facture.id_client,montant_verse:_data_facture.montant_verse,tva:_data_facture.tva,code_transaction:_data_facture.code_transaction,tva_montant:_data_facture.tva_montant,is_init_credit:_data_facture.is_init_credit,montant_ht:_data_facture.montant_ht,type_tva:_data_facture.typeTva,id_facture_local:_data_facture.id_facture,date_enregistrement:_data_facture.date_enregistrement,commentaire:_data_facture.commentaire,image_code_qr:_data_facture.image_code_qr,taux_remise:_data_facture.tauxRemise };
        client.mutate({
        mutation: SAVE_FACTURE,
        variables:data_facture
    }).then((data) => {
        console.log(data);
    }, (error) => {
        console.log("ERROR in SigninBox ", JSON.stringify(error));
    });
}