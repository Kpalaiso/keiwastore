import { client } from "../App";
import { FIND_PRODUCT_STORE_USER } from "../lib/graphql/gqlStock";
import store from "../lib/store";
import { REFRESH_VIEW } from "../lib/actions/action_type";

export const _findProductStoreUser = async (id_store) =>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_PRODUCT_STORE_USER,
            variables:{id_store:id_store},
            fetchPolicy: 'no-cache'
          }).then((data) => {
              resolve(data.data.findProductStoreUser.filter(item=>item.is_available.indexOf(id_store.toString())>-1));
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    })
}