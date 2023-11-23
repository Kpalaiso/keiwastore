import { gql } from '@apollo/client';

export const SAVE_COMMANDE=gql`
mutation saveCommande($id_user:Int!,$id_account:Int!,$montant: String!,$nb_article: String!,$id_store:Int!,$number_commande: String!,$date_enregistrement: String!,$status:Int!,$adresse: String!,$commune: String!,$country: String!,$id_client:Int!,$nom_client: String!,$contact_client: String!,$id_client_store:String!,$email:String!,$latitude:Float!,$longitude:Float!){
    saveCommande(id_user:$id_user,id_account:$id_account,montant: $montant,nb_article: $nb_article,id_store:$id_store,number_commande: $number_commande,date_enregistrement: $date_enregistrement,status:$status,adresse: $adresse,commune: $commune,country: $country,id_client:$id_client,nom_client: $nom_client,contact_client: $contact_client,id_client_store:$id_client_store,email:$email,latitude:$latitude,longitude:$longitude){
        id_commande
    }   
  }
`;

export const UPDATE_COMMANDE=gql`
mutation updateCommande($id_commande: Int!,$status:Int!){
    updateCommande(id_commande:$id_commande,status:$status){
      id_commande
    }   
  }
`;

export const SAVE_DETAIL_COMMANDE=gql`
mutation saveDetailCommande($id_commande:Int!,$id_user: Int!,$id_stock:Int!,$description: String!,$icone_product:String!,$prix_vente:String!,$quantite:String!,$unite:String!,$montant:String!,$id_client_store:String!,$id_product:Int!){
    saveDetailCommande(id_commande:$id_commande,id_user: $id_user,id_stock:$id_stock,description: $description,icone_product:$icone_product,prix_vente:$prix_vente,quantite:$quantite,unite:$unite,montant:$montant,id_client_store:$id_client_store,id_product:$id_product){
        id_detail_commande
    }   
  }
`;

export const FIND_DETAIL_COMMANDE_BY_ID=gql`
query findDetailCommandeById($id_commande:Int!){
  findDetailCommandeById(id_commande:$id_commande){
    id_detail_commande,
    id_commande,
    id_user,
    id_stock,
    description,
    icone_product,
    prix_vente,
    quantite,
    unite,
    montant,
    active,
    id_client_store,
    id_product
  }
  }
`;

export const FIND_COMMANDE_BY_CLIENT_STORE_ID=gql`
query findCommandeByClientStoreId($id_client_store:String!){
  findCommandeByClientStoreId(id_client_store:$id_client_store){
    id_commande,
    id_user,
    id_account,
    montant,
    nb_article,
    id_store,
    number_commande,
    date_enregistrement,
    status,
    active,
    adresse,
    commune,
    country,
    id_client,
    nom_client,
    contact_client,
    id_client_store,
    email,
    latitude,
    longitude
  }
  }
`;

export const FIND_COMMANDE_BY_ID=gql`
query findCommandeById($id_commande:Int!){
  findCommandeById(id_commande:$id_commande){
    id_commande,
    id_user,
    id_account,
    montant,
    nb_article,
    id_store,
    number_commande,
    date_enregistrement,
    status,
    active,
    adresse,
    commune,
    country,
    id_client,
    nom_client,
    contact_client,
    id_client_store,
    email,
    latitude,
    longitude
  }
  }
`;