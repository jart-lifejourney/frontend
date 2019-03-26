import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'F&B 2018', Average: 1000, Yours: 2199.7000000000003,
    },
    {
        name: 'Transport 2018', Average: 960, Yours: 10732.540000000008, amt: 10732,
    },
    {
        name: 'Transfer 2018', Average: 2000, Yours: 10732, amt: 10732,
    },
    {
        name: 'ATM 2018', Average: 3000, Yours: 2700, amt: 2700,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
            <BarChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Yours" fill="#8884d8" />
                <Bar dataKey="Average" fill="#82ca9d" />
            </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
