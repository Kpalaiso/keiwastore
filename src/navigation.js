import React from 'react';
import { useSelector } from "react-redux";
import Loading from "./views/Loading";
import Home from "./views/Home"
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Account from './views/Account';
import Commande from "./views/Commande";
import CheckOut from "./views/CheckOut";
import DetailCommande from "./views/DetailCommande";
import SuccessOrder from "./views/SuccessOrder";
import Paiement from "./views/Paiement";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const RootNavigator = () => {

    const loading_store_data = useSelector(state => state.store_data);
    const _is_paiement = useSelector(state => state.is_paiement);

    return (
        <>
             <main>
                {
                loading_store_data.length>0?(
                    <>
                    {
                        !_is_paiement && (
                            <BrowserRouter>
                            <Switch>
                                <Route path="/" exact render={()=><Home  />}  />
                                <Route path="/cart" exact render={()=><Cart  />}  />
                                <Route path="/contact" exact render={()=><Contact  />}  />
                                <Route path="/account" exact render={()=><Account  />}  /> 
                                <Route path="/checkout" exact render={()=><CheckOut  />}  /> 
                                <Route path="/commande" exact render={()=><Commande  />}  /> 
                                <Route path="/detail_commande" exact render={()=><DetailCommande  />}  /> 
                                <Route path="/sussess_order" exact render={()=><SuccessOrder  />}  />
                                <Redirect from="*" to="/"  />
                            </Switch>
                            </BrowserRouter>
                        )
                    }
                    {
                        _is_paiement && (
                            <Paiement  />
                        )
                    }
                    </> 
                    ):
                    (
                        <Loading  />
                    )
                }
             </main>
        </>
    )
}

export default RootNavigator;