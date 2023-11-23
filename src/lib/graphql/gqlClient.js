import { gql } from '@apollo/client';

export const SAVE_CLIENT = gql`
mutation saveClient($type_client:String!,$nom:String!,$numero_telephone:String!,$email:String!,$avatar:String!,$adresse:String!,$ville:String!,$region:String!,$country:String!,$latitude:String!,$longitude:String!,$id_user:Int!,$id_account:Int!,$id_client_local:String!,$date_enregistrement:String!,$id_client_store:String!){
    saveClient(type_client:$type_client,nom:$nom,numero_telephone:$numero_telephone,email:$email,avatar:$avatar,adresse:$adresse,ville:$ville,region:$region,country:$country,latitude:$latitude,longitude:$longitude,id_user:$id_user,id_account:$id_account,id_client_local:$id_client_local,date_enregistrement:$date_enregistrement,id_client_store:$id_client_store){
        id_client,
        id_client_store
    }   
  }
`;

export const SAVE_USER_STORE = gql`
mutation saveUserStore($nom: String!,$numero_telephone: String!,$email: String!,$password: String!,$adresse: String!,$ville: String!,$date_enregistrement: String!,$latitude:Float!,$longitude:Float!){
    saveUserStore(nom: $nom,numero_telephone: $numero_telephone,email: $email,password: $password,adresse: $adresse,ville: $ville,date_enregistrement: $date_enregistrement,latitude:$latitude,longitude:$longitude){
      id_client_store
    }   
  }
`;

export const FIND_USER_STORE_BY_EMAIL=gql`
query findUserStoreByEmail($email:String!){
      findUserStoreByEmail(email:$email){
        id_client_store,
        nom,
        numero_telephone,
        email,
        password,
        adresse,
        ville,
        date_enregistrement,
        active,
        latitude,
        longitude
    }
  }
`;

export const LOGIN_USER_STORE=gql`
query loginUserStore($email:String!, $password:String!){
    loginUserStore(email:$email, password:$password){
      id_client_store,
      nom,
      numero_telephone,
      email,
      password,
      adresse,
      ville,
      date_enregistrement,
      active,
      latitude,
      longitude,
  }
  }
`;

export const FIND_USER_STORE_ID=gql`
query findUserStoreId($id_client_store:Int!){
      findUserStoreId(id_client_store:$id_client_store){
        id_client_store,
        nom,
        numero_telephone,
        email,
        password,
        adresse,
        ville,
        date_enregistrement,
        active,
        latitude,
        longitude
    }
  }
`;

export const LOGIN_CLIENT_STORE=gql`
query loginClientStore($id_client_store:String!){
    loginClientStore(id_client_store:$id_client_store){
        id_client,
        type_client,
        nom,
        numero_telephone,
        email,
        avatar,
        adresse,
        ville,
        region,
        country,
        latitude,
        longitude,
        id_user,
        id_account,
        id_client_local,
        active,
        date_enregistrement,
        id_client_store,
    }
  }
`;