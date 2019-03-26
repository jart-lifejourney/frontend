import React from 'react';
import Comp1 from './Components/comp1.js';
import {Row,Container,Button,Col} from 'react-bootstrap';
import axios from "axios";
import "./Journey.css"
import Example from "./chart"

// Some APIs need a key, uncomment and find out syntax to add >>> something like &appid=${API_key}
// const API_key= "something"

export default class Home extends React.Component {
    state={ data2:[
            {id:1, name:"Tranport",imgsrc:"https://image.shutterstock.com/image-vector/cartoon-car-logo-flat-cute-450w-212950204.jpg",company:{bs:"h",catchPhrase:"try"}},
            {id:2, name:"Dining",imgsrc:"https://image.shutterstock.com/image-vector/cartoon-car-logo-flat-cute-450w-212950204.jpg",company:{bs:"h",catchPhrase:"try"}},
            {id:3, name:"Living",imgsrc:"https://image.shutterstock.com/image-vector/cartoon-car-logo-flat-cute-450w-212950204.jpg",company:{bs:"h",catchPhrase:"try"}}
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
                <Comp1 name={person.name} key={person.id} extra={person.company.bs} extra2={person.company.catchPhrase} image={person.imgsrc}/>
                </Col>
            )
        });
        return (
            <div>
                <Container>
                    <div className="m-5 p-5 whiteBox">
                        <h1>Hi! Here's a comparison of your finances to other people your age!</h1>
                        <div className="mt-5">
                        <Example/>
                        </div>
                    </div>
                    <Row className="m-3">
                        {Comp1s}
                    </Row>
                </Container>
            </div>
        );
    }
}

