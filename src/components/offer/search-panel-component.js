import React, { useState } from 'react';
import { Card } from 'antd';
import { Slider } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { Row, Col, Divider, Checkbox } from 'antd';
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

export default function SearchPanel() {


    return (
        <Card>

            <Form
                labelCol={{
                    span: 10,
                }}
                layout="vertical"
            >
                <Form.Item label="Input">
                    <Input />
                </Form.Item>

                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <Slider range defaultValue={[20, 50]} />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Switch">
                    <Switch />
                </Form.Item>
                <Form.Item>
                    <Row gutter={24} >
                        <Col className="gutter-row" span={12}>
                            <Button type="primary" shape="round" size={"large"} icon={<SearchOutlined />} block>
                                Search
                    </Button>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <Button type="primary" shape="round" size={"large"} icon={<RedoOutlined />} block>
                                Reset
                    </Button>
                        </Col>

                    </Row>


                </Form.Item>
            </Form>

        </Card>

    );
};

//ReactDOM.render(<SearchPanel />, mountNode);