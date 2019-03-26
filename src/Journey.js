import React from 'react';
import Comp1 from './Components/comp1.js';
import {Row,Container,Col} from 'react-bootstrap';
import axios from "axios";
import "./Journey.css"
import Example from "./chart"
import AvgSpending from "./avgSpendingMonth"

// Some APIs need a key, uncomment and find out syntax to add >>> something like &appid=${API_key}
// const API_key= "something"

export default class Home extends React.Component {
    state={ data2:[
            {id:1, name:"Transport",imgsrc:"https://superawesomevectors.com/wp-content/uploads/2016/04/sedan-vehicle-flat-vector-icon-800x566.jpg",desc:"You can save more than 22% on your transportation expenses!"},
            {id:2, name:"Dining",imgsrc:"https://superawesomevectors.com/wp-content/uploads/2016/09/popcorn-flat-vector-icon-800x566.jpg",desc:"You can save more than 33% on your eating expenses!"},
            {id:3, name:"Living",imgsrc:"https://superawesomevectors.com/wp-content/uploads/2017/07/piano-keys-flat-vector-icon-800x566.jpg",desc:"You can save more than 44% on your living expenses!"}
        ] };


    getApi = async () =>{
        const response = await axios.get("http://localhost:5000");
        // a response consists of multiple parts! make sure to unpack the needed value
        this.setState({finance: response.data});
        console.log(this.state.finance)
    };

    render() {
        let Comp1s = this.state.data2.map(person => {
            return(
                <Col className="col-4">
                <Comp1 name={person.name} key={person.id} extra={person.desc} image={person.imgsrc}/>
                </Col>
            )
        });

        return (
            <div>
                <Container>
                    <div className="m-5 p-5 whiteBox">
                        <h1>Hi! Here's a comparison of your finances to other people your age in this year!</h1>
                        <div className="mt-5">
                        <Example/>
                        </div>
                    </div>
                    <div className="m-5 p-5 whiteBox">
                        <h1>You spent more on transport compared to your age group, do you want to set a budget?</h1>
                    </div>
                </Container>

                <Container>
                    <div className="m-5 p-5 whiteBox">
                        <h1>Here's a breakdown of your finances to other people your age in this month!</h1>
                        <div className="mt-5">
                            <AvgSpending/>
                        </div>
                    </div>
                    <div className="m-5 p-5 whiteBox">
                        <h1>You've transferred more compared to your age group, use cashless payment to better track your expenditure!</h1>
                    </div>
                    <Row className="m-3">
                        {Comp1s}
                    </Row>
                </Container>
            </div>

        );
    }
}

