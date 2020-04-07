import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Offers from "./components/offer/offers.component"
import UsersList from "./components/user/users-list-component"
import CreateOffer from './components/offer/create-offer.component';

function App() {
  return (
    <Router>
      
      
      <Navbar />
      <div className="container">
        <br />
        <Switch>
        <Route path="/" exact component={Offers} />
        <Route path="/offers/:id" component={UsersList} />
        <Route path="/offers" component={Offers} />
        <Route path="/offers/add" component={CreateOffer} />
        <Route path="/users" component={UsersList} />
        </Switch>
       
      </div>

    </Router>
  );
}

export default App;
