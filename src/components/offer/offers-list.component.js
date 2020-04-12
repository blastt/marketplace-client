import React, { Component, useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import axios from 'axios';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ icon, text }) => (
    <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
    </span>
);
export default function OffersList() {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/offers/')
            .then(response => {
                setOffers(response.data);
                console.log(offers);
            })
            .catch(err => {
                console.log(offers);
            })

    });
    return (
        <Card title={<div>Small size card</div>}>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={offers}
                footer={
                    <div>

                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.header}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}

                    >
                        <List.Item.Meta
                            avatar={<Avatar size={64} src={item.avatar} />}
                            title={<a href={item.href}>{item.header}</a>}
                            description={!item.user ? "whatever you want" : item.user.username}
                        />
                        {item.description}
                    </List.Item>
                )}
            />
        </Card>

    )
}








// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const Offer = props => {
//     const username = p => {
//         if (p.offer.user) {
//             return p.offer.user.username
//         }      
//     }

//     const gamename = p => {
//         if (p.offer.game) {
//             return p.offer.game.name          

//         }      
//     }

//     const path = '/offer/' + props.offer.id; 

//     return (
//         <tr>
//             <td>{props.offer.id}</td>
//             <td>{props.offer.header}</td>
//             <td>{props.offer.description}</td>
//             <td>{props.offer.price}</td>
//             <td>{username(props)}</td>
//             <td>{gamename(props)}</td>
//             <td><Link to={path} className="nav-link">Details</Link></td>
//         </tr>
//     )
// }



// export default class OffersList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { offers: [] };
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/offers/')
//             .then(response => {
//                 this.setState({ offers: response.data });
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//         console.log(this.state.offers)
//     }

//     render() {
//         const offers = this.state.offers.map(currentOffer => {
//             return (<Offer offer={currentOffer} key={currentOffer.id} />)
//         })
//         console.log(this.state.offers)
//         return (

//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <td>header</td>
//                         <td>description</td>
//                         <td>price</td>
//                         <td>user</td>
//                         <td>game</td>
//                         <td></td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {offers}
//                 </tbody>
//             </table>
//         )
//     }
// }