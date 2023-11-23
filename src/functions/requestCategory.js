import { client } from "../App";
import { FIND_CATEGORY_BY_STORE } from "../lib/graphql/gqlCategory";
import store from "../lib/store";
import { REFRESH_VIEW } from "../lib/actions/action_type";

export const _findCategoryByStore = async (id_store) =>{
    return new Promise((resolve, reject)=>{
        client.query({
            query: FIND_CATEGORY_BY_STORE,
            variables:{id_store:id_store},
            fetchPolicy: 'no-cache'
          }).then((data) => {
              resolve(data.data.findCategoryByStore);
          }, (error) => {
              console.log("ERROR in SigninBox ", JSON.stringify(error));
          });
    })
}