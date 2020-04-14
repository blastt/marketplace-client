import React, { Component } from 'react';
import qs from 'querystring';
import axios from 'axios';
import { Card } from 'antd';
import { Slider } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { throws } from 'assert';
const { TextArea } = Input;
const { Option } = Select;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}



function handleChange(value) {
    console.log(`Selected: ${value}`);
}

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 8,
    },
};

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
            games: [],
            children: [],
            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-2',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-3',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-4',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                    uid: '-5',
                    name: 'image.png',
                    status: 'error',
                },
            ]
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/games')
            .then(res => {
                if (res.data.length > 0) {
                    const games = res.data.map(game => game.name)
                    console.log(games)

                    this.setState({
                        children: res.data.map(g => <Option key={g.value}>{g.name}</Option>),
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
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
    render() {
        const { previewVisible, previewImage, fileList, children } = this.state;
        console.log(children)
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (

            <Row>
                <Col span={10} offset={7}>
                    <Card title="Create offer">

                        <Row>
                            <Col>
                                <Form
                                    labelCol={{
                                        span: 6,
                                    }}                                    
                                    layout="horizontal"
                                >
                                    <Form.Item label="Game">
                                        <Select
                                            mode="tags"
                                            size="large"
                                            placeholder="Please select"
                                            defaultValue={children}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                        >
                                            {children}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Header">
                                        <Input />
                                    </Form.Item>
                                    <Divider />
                                    <Form.Item label="Description">
                                        <TextArea rows={4} />
                                    </Form.Item>

                                    <Form.Item label="DatePicker">
                                        <DatePicker />
                                    </Form.Item>
                                    <Form.Item label="InputNumber">
                                        <div className="clearfix">
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {fileList.length >= 5 ? null : uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        label="Header"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your favourite colors!'
                                            },
                                        ]}
                                        {...formItemLayout}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Switch">
                                        <Switch />
                                    </Form.Item>

                                    <Form.Item>

                                        <Row gutter={8}>
                                            <Col className="gutter-row" span={6}>
                                                <Button type="primary" shape="round" size={"large"} icon={<SearchOutlined />}>
                                                    Search
                    </Button>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <Button type="primary" shape="round" size={"large"} icon={<RedoOutlined />}>
                                                    Reset
                    </Button>
                                            </Col>

                                        </Row>


                                    </Form.Item>

                                </Form>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>



            // <div>
            //     <form onSubmit={this.onSubmit}>
            //         <div className="form-group">
            //             <label>Header</label>
            //             <input type="text"
            //                 className="form-control"
            //                 id="exampleInputEmail1"
            //                 value={this.state.header}
            //                 onChange={this.onChangeHeader}
            //             />
            //         </div>
            //         <div className="form-group">
            //             <label>Description</label>
            //             <input type="text"
            //                 className="form-control"
            //                 id="exampleInputEmail1"
            //                 value={this.state.description}
            //                 onChange={this.onChangeDescription}
            //             />
            //         </div>
            //         <div className="form-group">
            //             <label>Price</label>
            //             <input
            //                 type="text"
            //                 className="form-control"
            //                 id="exampleInputEmail1"
            //                 value={this.state.price}
            //                 onChange={this.onChangePrice}
            //             />

            //         </div>
            //         <div className="form-group">
            //             <select required
            //                 className="form-control"
            //                 value={this.state.gamename}
            //                 onChange={this.onChangeGamename}>
            //                 {
            //                     this.state.games.map(game => {
            //                         return <option
            //                             key={game}
            //                             value={game}>{game}
            //                         </option>
            //                     })
            //                 }
            //             </select>
            //         </div>

            //         <button type="submit" className="btn btn-primary">Create offer</button>
            //     </form>
            // </div>
        )
    }
}