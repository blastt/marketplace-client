import React, { Component } from 'react';
import qs from 'querystring';
import axios from 'axios';

export default class CreateOffer extends Component {
    constructor(props) {
        super(props);

        this.onChangeHeader = this.onChangeHeader.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeGamename = this.onChangeGamename.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            header: '',
            description: '',
            price: '',
            gamename: '',
            games: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/games')
            .then(res => {
                if (res.data.length > 0) {
                    const games = res.data.map(game => game.name)
                    this.setState({
                        games,
                        gamename: games[0]
                    })
                }
            })
            .catch(err => console.log(err));
        // this.setState({
        //     games: ['test', 'test2']
        // })
    }

    onChangeHeader(e) {
        this.setState({
            header: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onChangeGamename(e) {
        this.setState({
            gamename: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(e);

        const offer = {
            header: this.state.header,
            description: this.state.description,
            price: this.state.price,
            gamename: this.state.gamename
        }
        console.log(offer);
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }

        axios.post('http://localhost:5000/offers/add', qs.stringify(offer), config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));


    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Header</label>
                        <input type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={this.state.header}
                            onChange={this.onChangeHeader}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />

                    </div>
                    <div className="form-group">
                        <select required
                            className="form-control"
                            value={this.state.gamename}
                            onChange={this.onChangeGamename}>
                            {
                                this.state.games.map(game => {
                                    return <option
                                        key={game}
                                        value={game}>{game}
                                    </option>
                                })
                            }
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Create offer</button>
                </form>
            </div>
        )
    }
}