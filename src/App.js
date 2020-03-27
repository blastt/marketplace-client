import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import OffersList from "./components/offer/offers-list.component"
import UsersList from "./components/user/users-list-component"

function App() {
  return (
    <Router>
      
      
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={OffersList} />
        <Route path="/offers" component={OffersList} />
        <Route path="/users" component={UsersList} />
      </div>

    </Router>
  );
}

export default App;
