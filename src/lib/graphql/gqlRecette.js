import { gql } from '@apollo/client';

export const SAVE_RECETTE_USER = gql`
mutation saveRecetteUser($prix_unitaire:String!,$quantite:String!,$is_credit:Int!,$date_recette:String!,$unite:String!,$montant:String!,$descript:String!,$id_product:Int!,$id_user:Int!,$id_stock_historique:Int!,$id_facture:Int!,$id_recette_local:String!,$date_enregistrement:String!, $nom_product: String!, $icone_product: String!){
    saveRecetteUser(prix_unitaire:$prix_unitaire,quantite:$quantite,is_credit:$is_credit,date_recette:$date_recette,unite:$unite,montant:$montant,descript:$descript,id_product:$id_product,id_user:$id_user,id_stock_historique:$id_stock_historique,id_facture:$id_facture,id_recette_local:$id_recette_local,date_enregistrement:$date_enregistrement, nom_product: $nom_product, icone_product: $icone_product){
        id_recette
    }   
  }
`;