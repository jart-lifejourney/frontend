import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'F&B Dec', Average: 500, Yours: 1000,
    },
    {
        name: 'Transport Dec', Average: 200, Yours: 2000, amt: 2000,
    },
    {
        name: 'Transfer Dec', Average: 3000, Yours: 15000, amt: 15000,
    },
    {
        name: 'ATM Dec', Average: 200, Yours: 2000, amt: 2000,
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
