import { gql } from '@apollo/client';

export const SAVE_USER_WALLET_AMOUNT=gql`
mutation saveUserWalletAmount($id_user: Int!,$libelle: String!,$description: String!,$montant:String!,$type_operation:Int!,$is_epargne:Int!,$date_enregistrement:String!){
    saveUserWalletAmount(id_user: $id_user,libelle: $libelle,description: $description,montant:$montant,type_operation:$type_operation,is_epargne:$is_epargne,date_enregistrement:$date_enregistrement){
      id_wallet
    }   
  }
`;

export const FIND_STORE_BY_LOCAL_ID=gql`
query findStoreByLocalId($id_local_store:String!){
  findStoreByLocalId(id_local_store:$id_local_store){
    id_store,
    id_local_store,
    id_user,
    id_account,
    nom,
    description,
    contact,
    email,
    adresse,
    ville,
    region,
    country,
    latitude,
    longitude,
    logo,
    color,
    date_enregistrement,
    active,
    id_order_category,
  }
  }
`;

export const FIND_USER_BY_ID=gql`
query findUserById($userId:Int!){
  findUserById(userId:$userId){
    id_user,
    nom_user,
    prenom_user,
    telephone_user,
    mail_user,
    genre_user,
    location_user,
    date_inscription,
    code_user,
    active_user,
    status_user,
    langue_id_langue,
    monnaie_id_monnaie,
    montant_caisse,
    service_id,
    auth_finger,
    later,
    caisse_init,
    entreprise_user,
    is_init_stock,
    number_serie_tel,
    is_service,
    licence,
    date_expiration,
    offre,
    code_unique,
    code_parainage,
    is_init_credit,
    offre_delay,
    valid_tombola,
    token_super_user,
    logo_entreprise,
    currency,
    signature,
    price_offre,
    nom_activite,
    nom_secteur,
    type_entreprise,
    siege_social,
    boite_postal,
    numero_commerce,
    numero_compte_contribuable,
    compte_bancaire,
    email_entreprise,
    mobile_entreprise,
    fix_entreprise,
    lang,
    id_entreprise,
    nb_action,
    period,
    token_notification,
    id_order_functionnality,
    id_order_category_product,
    active,
    step
  }
  }
`;