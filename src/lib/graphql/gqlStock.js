import { gql } from '@apollo/client';

export const FIND_PRODUCT_STORE_USER=gql`
query findProductStoreUser($id_store:String!){
  findProductStoreUser(id_store:$id_store){
    id_stock,
    id_product,
    quantite,
    montant,
    description,
    var_stock,
    date_enregistrement,
    total_quantity,
    nom_product,
    icone_product,
    nb_unite_achat,
    unite_vente,
    unite_achat,
    prix_achat,
    other_index,
    id_user,
    id_account,
    prix_vente,
    code_bare,
    quatity_security,
    unite_security,
    id_stock_local,
    type_stock,
    id_type_stock,
    active,
    id_category,
    id_store,
    is_available,
    nb_etoile
  }
  }
`;

export const SAVE_USER_PRODUCT_STOCK = gql`
mutation saveUserProductStock($id_product: Int!,$quantite: String!,$montant: String!,$description: String!,$var_stock: String!,$date_enregistrement: String!,$total_quantity: String!,$nom_product: String!,$icone_product: String!,$nb_unite_achat: String!,$unite_vente: String!,$unite_achat: String!,$prix_achat: String!,$other_index: Int!,$id_user: Int!,$id_account: Int!,$prix_vente: String!,$code_bare: String!,$quatity_security: String!,$unite_security: String!,$id_stock_local: String!,$type_stock: String!,$id_type_stock: Int!,$id_category:String!,$id_store:String!,$is_available:String!, $is_new_stock:Int!){
    saveUserProductStock(id_product: $id_product,quantite: $quantite,montant: $montant,description: $description,var_stock: $var_stock,date_enregistrement: $date_enregistrement,total_quantity: $total_quantity,nom_product: $nom_product,icone_product: $icone_product,nb_unite_achat: $nb_unite_achat,unite_vente: $unite_vente,unite_achat: $unite_achat,prix_achat: $prix_achat,other_index: $other_index,id_user: $id_user,id_account: $id_account,prix_vente: $prix_vente,code_bare: $code_bare,quatity_security: $quatity_security,unite_security: $unite_security,id_stock_local: $id_stock_local,type_stock: $type_stock,id_type_stock: $id_type_stock,id_category:$id_category,id_store:$id_store,is_available:$is_available, is_new_stock:$is_new_stock){
        id_stock
    }   
  }
`;

export const SAVE_USER_STOCK_HISTORIQUE=gql`
mutation SaveUserStockHistorique($nom_product:String!,$icone_product:String!,$quantite_entree:String!,$quantite_sortie:String!,$prix_unitaire_entree:String!,$prix_unitaire_sortie:String!,$description:String!,$total_quantity:String!,$prix_unitaire:String!,$unite_stock:String!,$quantite:String!,$montant_stock:String!,$date_stock:String!,$type_stock:String!,$stock_initial:String!,$id_user:Int!,$id_account:Int!,$id_product:Int!,$id_stock:Int!,$other_index:Int!,$id_stock_historique_local:String!){
    SaveUserStockHistorique(nom_product:$nom_product,icone_product:$icone_product,quantite_entree:$quantite_entree,quantite_sortie:$quantite_sortie,prix_unitaire_entree:$prix_unitaire_entree,prix_unitaire_sortie:$prix_unitaire_sortie,description:$description,total_quantity:$total_quantity,prix_unitaire:$prix_unitaire,unite_stock:$unite_stock,quantite:$quantite,montant_stock:$montant_stock,date_stock:$date_stock,type_stock:$type_stock,stock_initial:$stock_initial,id_user:$id_user,id_account:$id_account,id_product:$id_product,id_stock:$id_stock,other_index:$other_index,id_stock_historique_local:$id_stock_historique_local){
        id_stock_historique
    }   
  }
`;

export const UPDATE_USER_PRODUCT_STOCK = gql`
mutation updateUserProductStock($id_stock:Int!,$quantite:String!,$montant:String!,$var_stock:String!,$description:String!,$total_quantity:String!,$nom_product:String!,$icone_product:String!,$nb_unite_achat:String!,$unite_vente:String!,$unite_achat:String!,$prix_achat:String!,$prix_vente:String!,$code_bare:String!,$quatity_security:String!,$unite_security:String!,$type_stock:String!,$id_type_stock:Int!,$id_category:String!,$id_store:String!, $is_available:String!, $is_new_stock:Int!){
    updateUserProductStock(id_stock:$id_stock,quantite:$quantite,montant:$montant,var_stock:$var_stock,description:$description,total_quantity:$total_quantity,nom_product:$nom_product,icone_product:$icone_product,nb_unite_achat:$nb_unite_achat,unite_vente:$unite_vente,unite_achat:$unite_achat,prix_achat:$prix_achat,prix_vente:$prix_vente,code_bare:$code_bare,quatity_security:$quatity_security,unite_security:$unite_security,type_stock:$type_stock,id_type_stock:$id_type_stock,id_category:$id_category,id_store:$id_store,is_available:$is_available, is_new_stock:$is_new_stock){
        id_stock
    }   
  }
`;

export const UPDATE_PRODUCT_STOCK_RATING=gql`
mutation updateProductStockRating($id_stock: Int!, $nb_etoite: Int!){
    updateProductStockRating(id_stock: $id_stock, nb_etoite: $nb_etoite){
        id_stock
    }   
  }
`;