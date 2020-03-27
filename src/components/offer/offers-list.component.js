import React, { Component } from 'react';
import axios from 'axios';

const Offer = props => (
    <tr>
        <th>{props.offer.id}</th>
        <th>{props.offer.header}</th>
        <th>{props.offer.description}</th>
        <th>{props.offer.price}</th>
    </tr>
);

export default class OffersList extends Component {
    constructor(props) {
        super(props)
        this.state = {offers: []};
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

    offersList() {
        return this.state.offers.map(currentOffer => {
            return (<Offer offer = {currentOffer} key = {currentOffer.id}/>)
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <td>header</td>
                        <td>description</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
                    {this.offersList()}
                </tbody>
            </table>
        )
    }
}