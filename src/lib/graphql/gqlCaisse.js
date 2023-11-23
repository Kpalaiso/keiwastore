import { gql } from '@apollo/client';

export const SAVE_CAISSE = gql`
mutation saveCaisse($nom_user:String!,$libelle:String!,$icone_product:String!,$montant:String!,$montant_paye:String!,$montant_verse:String!,$date_enregistrement:String!,$id_operation:Int!,$id_user:Int!,$id_account:Int!,$id_caisse_local:String!,$id_echeance:Int!,$type_operation:String!){
    saveCaisse(nom_user:$nom_user,libelle:$libelle,icone_product:$icone_product,montant:$montant,montant_paye:$montant_paye,montant_verse:$montant_verse,date_enregistrement:$date_enregistrement,id_operation:$id_operation,id_user:$id_user,id_account:$id_account,id_caisse_local:$id_caisse_local,id_echeance:$id_echeance,type_operation:$type_operation){
        id_caisse
    }   
  }
`;