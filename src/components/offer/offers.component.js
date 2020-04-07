import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OffersList from './offers-list.component';
import SearchPanel from './search-panel-component'
import axios from 'axios';



export default class Offers extends Component {
    constructor(props) {
        super(props)
        this.state = { offers: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/offers/')
            .then(response => {
                this.setState({ offers: response.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const offers = ['ddf']
        return (
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-3">
                        <SearchPanel></SearchPanel>
                    </div>
                    <div className="col-lg-9">
                        <OffersList></OffersList>
                    </div>
                </div>


            </div>

        )
    }
}