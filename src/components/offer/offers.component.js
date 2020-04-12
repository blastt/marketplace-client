import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OffersList from './offers-list.component';
import SearchPanel from './search-panel-component'
import axios from 'axios';
import { Row, Col, Divider } from 'antd';
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const style = { padding: '8px 0' };

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

            <Content style={{ padding: '0 250px' }}>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={24}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <SearchPanel></SearchPanel>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <div style={style}>
                            <OffersList></OffersList>
                        </div>
                    </Col>


                </Row>
            </Content>



            // <div className="col-lg-12">
            //     <div className="row">
            //         <div className="col-lg-2">
            //             <SearchPanel></SearchPanel>
            //         </div>
            //         <div className="col-lg-8">
            //             <OffersList></OffersList>
            //         </div>

            //     </div>


            // </div>

        )
    }
}