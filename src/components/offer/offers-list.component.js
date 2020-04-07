import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Offer = props => {
    const username = p => {
        if (p.offer.user) {
            return p.offer.user.username
        }      
    }

    const gamename = p => {
        if (p.offer.game) {
            return p.offer.game.name          
            
        }      
    }

    const path = '/offer/' + props.offer.id; 

    return (
        <tr>
            <td>{props.offer.id}</td>
            <td>{props.offer.header}</td>
            <td>{props.offer.description}</td>
            <td>{props.offer.price}</td>
            <td>{username(props)}</td>
            <td>{gamename(props)}</td>
            <td><Link to={path} className="nav-link">Details</Link></td>
            {/* <th>{props.offer.user.username}</th>
        <th>{props.offer.game.name}</th> */}
        </tr>
    )
}



export default class OffersList extends Component {
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
        console.log(this.state.offers)
    }

    render() {
        const offers = this.state.offers.map(currentOffer => {
            return (<Offer offer={currentOffer} key={currentOffer.id} />)
        })
        console.log(this.state.offers)
        return (
            
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <td>header</td>
                        <td>description</td>
                        <td>price</td>
                        <td>user</td>
                        <td>game</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {offers}
                </tbody>
            </table>
        )
    }
}