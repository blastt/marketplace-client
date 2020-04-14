import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Button, Radio, InputNumber } from 'antd';





export default function CreateGame() {
    // Объявление переменной состояния, которую мы назовём "count"
    function onSubmit(values) {
        console.log(values);
        // e.preventDefault();
        // console.log(e);
    
        // const offer = {
        //     header: this.state.header,
        //     description: this.state.description,
        //     price: this.state.price,
        //     gamename: this.state.gamename
        // }
        // console.log(offer);
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }
    
        // axios.post('http://localhost:5000/offers/add', qs.stringify(offer), config)
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err));
    
    
    }

    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [rank, setRank] = useState(0);

    return (
        <Card>
            <div>
                <Form onFinish={onSubmit}>

                    <Form.Item name={['game', 'name']} label="Name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item name={['game', 'value']} label="Value">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item name={['game', 'rank']} label="Rank">
                    <InputNumber min={1} max={10} defaultValue={3} />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>

    );
}