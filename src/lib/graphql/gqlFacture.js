import { gql } from '@apollo/client';

export const SAVE_FACTURE = gql`
mutation saveFacture($nom_user:String!, $description:String!, $tel_user:String!, $montant:String!, $montant_paye:String!, $montant_echeance:String!, $echeance_paye:String!, $echeance:String!, $id_echeance:String!, $progression:String!, $remise:String!, $other_spend:String!, $date_user:String!, $type:Int!, $id_account:Int!, $id_user:Int!, $id_client:Int!, $montant_verse:String!, $tva:String!, $code_transaction:String!, $tva_montant:String!, $is_init_credit:Int!, $montant_ht:String!, $type_tva:Int!, $id_facture_local:String!, $date_enregistrement:String!,$commentaire:String!,$image_code_qr:String!,$taux_remise:String!){
    saveFacture(nom_user:$nom_user, description:$description, tel_user:$tel_user, montant:$montant, montant_paye:$montant_paye, montant_echeance:$montant_echeance, echeance_paye:$echeance_paye, echeance:$echeance, id_echeance:$id_echeance, progression:$progression, remise:$remise, other_spend:$other_spend, date_user:$date_user, type:$type, id_account:$id_account, id_user:$id_user, id_client:$id_client, montant_verse:$montant_verse, tva:$tva, code_transaction:$code_transaction, tva_montant:$tva_montant, is_init_credit:$is_init_credit, montant_ht:$montant_ht, type_tva:$type_tva, id_facture_local:$id_facture_local, date_enregistrement:$date_enregistrement,commentaire:$commentaire,image_code_qr:$image_code_qr,taux_remise:$taux_remise){
        id_facture
    }   
  }
`;