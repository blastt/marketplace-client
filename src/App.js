import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.component"
import Offers from "./components/offer/offers.component"
import UsersList from "./components/user/users-list-component"
import CreateOffer from './components/offer/create-offer.component';
import CreateGame from './components/game/create-game-component';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    
    <Router>
      
      <Layout>
      
    
      <Navbar />
      <div>
        <br />
        <Switch>
        <Route path="/" exact component={Offers} />
        <Route path="/offers/add" component={CreateOffer} />
        <Route path="/offers/:id" component={UsersList} />
        <Route path="/offers" component={Offers} />
        <Route path="/games/add" component={CreateGame} />
        <Route path="/users" component={UsersList} />
        </Switch>
       
      </div>
      </Layout>
    </Router>
  );
}

export default App;
