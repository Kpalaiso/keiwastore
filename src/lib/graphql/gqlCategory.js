import { gql } from '@apollo/client';

export const FIND_CATEGORY_BY_STORE=gql`
query findCategoryByStore($id_store:String!){
  findCategoryByStore(id_store:$id_store){
    id_category,
    id_local_category,
    id_user,
    id_account,
    nom_category,
    color_category,
    id_store,
    active
  }
  }
`;