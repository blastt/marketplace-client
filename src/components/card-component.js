
import { Card } from 'antd';
import React, { Component } from 'react';

export default function OfferCard() {
    return (
        <div className="site-card-border-less-wrapper">
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}