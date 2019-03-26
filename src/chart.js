import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'Oct 2018', Average: 4000, Yours: 2400, amt: 2400,
    },
    {
        name: 'Nov 2018', Average: 3000, Yours: 1398, amt: 2210,
    },
    {
        name: 'Dec 2018', Average: 2000, Yours: 9800, amt: 2290,
    },
    {
        name: 'Jan 2019', Average: 2780, Yours: 3908, amt: 2000,
    },
    {
        name: 'Feb 2019', Average: 1890, Yours: 4800, amt: 2181,
    },
    {
        name: 'Mar 2019', Average: 2390, Yours: 3800, amt: 2500,
    },
    {
        name: 'April 2019', Average: 3490, Yours: 4300, amt: 2100,
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
