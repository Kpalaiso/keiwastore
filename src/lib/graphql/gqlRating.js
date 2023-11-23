import { gql } from '@apollo/client';

export const SAVE_PRODUCT_RATING = gql`
mutation saveProductRating($id_user: Int!,$id_stock: Int!, $id_store: String!, $nb_etoile: Int!,$date_enregistrement: String!, $id_client_store: String!, $nom_client_store:String!, $telephone_client_store:String!, $email_client_store:String! ){
    saveProductRating(id_user: $id_user,id_stock: $id_stock, id_store:$id_store, nb_etoile: $nb_etoile,date_enregistrement: $date_enregistrement, id_client_store:$id_client_store, nom_client_store:$nom_client_store, telephone_client_store:$telephone_client_store, email_client_store:$email_client_store ){
        id_product_rating
    }   
  }
`;

export const FIND_PRODUCT_RATING_BY_STOCK_ID=gql`
query findProductRatingByStockId($id_stock:Int!){
      findProductRatingByStockId(id_stock:$id_stock){
        id_product_rating,
        id_user,
        id_stock,
        id_store,
        nb_etoile,
        date_enregistrement,
        active,
        id_client_store,
        nom_client_store,
        telephone_client_store,
        email_client_store,
    }
  }
`; 

export const FIND_PRODUCT_RATING_BY_CLIENT_STORE=gql`
query findProductRatingByClientStore($id_client_store:Int!, $id_stock:Int!){
      findProductRatingByClientStore(id_client_store:$id_client_store, id_stock:$id_stock){
        id_product_rating,
        id_user,
        id_stock,
        id_store,
        nb_etoile,
        date_enregistrement,
        active,
        id_client_store,
        nom_client_store,
        telephone_client_store,
        email_client_store,
    }
  }
`; 

export const FIND_PRODUCT_RATING_BY_USER_ID=gql`
query findProductRatingByUserId($id_user:String!){
      findProductRatingByUserId(id_user:$id_user){
        id_product_rating,
        id_user,
        id_stock,
        id_store,
        nb_etoile,
        date_enregistrement,
        active,
        id_client_store,
        nom_client_store,
        telephone_client_store,
        email_client_store,
    }
  }
`;

export const FIND_PRODUCT_RATING_BY_ID_STORE=gql`
query findProductRatingByIdStore($id_store:String!){
      findProductRatingByIdStore(id_store:$id_store){
        id_product_rating,
        id_user,
        id_stock,
        id_store,
        nb_etoile,
        date_enregistrement,
        active,
        id_client_store,
        nom_client_store,
        telephone_client_store,
        email_client_store,
    }
  }
`;


export const UPDATE_PRODUCT_RATING=gql`
mutation updateProductRating( $id_product_rating: Int!, $nb_etoile: Int! ){
    updateProductRating( id_product_rating: $id_product_rating, nb_etoile: $nb_etoile ){
        id_product_rating
    }   
  }
`;

export const UPDATE_PRODUCT_STOCK_RATING=gql`
mutation updateProductStockRating( $id_stock: Int!, $nb_etoile: Float! ){
    updateProductStockRating( id_stock: $id_stock, nb_etoile: $nb_etoile ){
        id_stock
    }   
  }
`;