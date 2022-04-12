import React from 'react';
import { useSelector } from "react-redux";
import Home from "./views/Home"
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Account from './views/Account';
import CheckOut from "./views/CheckOut";
import SuccessOrder from "./views/SuccessOrder";
import BottomTabBar from "./components/BottomTabBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RootNavigator = () => {
    return (
        <>
             <main>
             <BrowserRouter>
                 <Switch>
                     <Route path="/" exact render={()=><Home  />}  />
                     <Route path="/cart" exact render={()=><Cart  />}  />
                     <Route path="/contact" exact render={()=><Contact  />}  />
                     <Route path="/account" exact render={()=><Account  />}  /> 
                     <Route path="/checkout" exact render={()=><CheckOut  />}  /> 
                     <Route path="/sussess_order" exact render={()=><SuccessOrder  />}  />
                 </Switch>
                 <BottomTabBar />
             </BrowserRouter>
             </main>
        </>
    )
}

export default RootNavigator;