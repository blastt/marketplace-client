import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                
                <div className="collapse navbar-collapse container">
                <Link to="/" className="navbar-brand">PlayerUp</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/offers" className="nav-link">Offers list</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/offers/add" className="nav-link">Create Offer</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/users" className="nav-link">Users list</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}