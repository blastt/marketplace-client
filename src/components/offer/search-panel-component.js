import React, { Component } from 'react';
import qs from 'querystring';
import axios from 'axios';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.onChangeSearchString = this.onChangeSearchString.bind(this);
        this.onChangeGamename = this.onChangeGamename.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            searchString: '',
            gamename: '',
            offers: [],
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

    onChangeSearchString(e) {
        this.setState({
            searchString: e.target.value
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
            },
            params: {
                game: this.state.gamename
            }
          }

        axios.get('http://localhost:5000/offers', config)
            .then(res => {this.setState({ offers: res.data }); console.log(res.data)})
            .catch(err => console.log(err));


    }


    render() {
        return (
            <div className="card card-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Search</label>
                        <input type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={this.state.searchString}
                            onChange={this.onChangeSearchString}
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

                    <button type="submit" className="btn btn-primary">Search</button>
                </form>

            </div>
        )
    }
}