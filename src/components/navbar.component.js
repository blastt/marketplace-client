import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


export default class Navbar extends Component {
    render() {
        return (
            <Header theme="light" className="header" style={{ zIndex: 1, width: '100%', background: '#ffffff', padding: '0px 250px' }}>
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/offers" className="nav-link">Offers list</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/offers/add" className="nav-link">Create Offer</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/users" className="nav-link">Users list</Link>
                    </Menu.Item>
                    
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 400 }}
                            size="large"
                        />
                    
                </Menu>

                {/* <div className="collapse navbar-collapse container">
                    <Link to="/" className="navbar-brand">PlayerUp</Link>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 400 }}
                        size={"large"}
                    />
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
                </div> */}
            </Header>
        );
    }
}