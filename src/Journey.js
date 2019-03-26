import React from 'react';
import Comp1 from './Components/comp1.js';
import {Row,Container,Button,Col} from 'react-bootstrap';
import axios from "axios";

// Some APIs need a key, uncomment and find out syntax to add >>> something like &appid=${API_key}
// const API_key= "something"

export default class Home extends React.Component {
    state={ data:[
            {id:1, name:"tom",imgsrc:"https://image.shutterstock.com/image-vector/cartoon-car-logo-flat-cute-450w-212950204.jpg",company:{bs:"h",catchPhrase:"try"}},
            {id:2, name:"tom",imgsrc:"https://image.shutterstock.com/image-vector/cartoon-car-logo-flat-cute-450w-212950204.jpg",company:{bs:"h",catchPhrase:"try"}},
            {id:3, name:"tom",imgsrc:"https://image.shutterstock.com/image-vector/cartoon-car-logo-flat-cute-450w-212950204.jpg",company:{bs:"h",catchPhrase:"try"}}
        ] };


    // getApi = async () =>{
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    //     // a response consists of multiple parts! make sure to unpack the needed value
    //     this.setState({data: response.data});
    //     console.log(this.state.data)
    // };




    render() {
        let Comp1s = this.state.data.map(person => {
            return(
                <Col className="col-4">
                <Comp1 name={person.name} key={person.id} extra={person.company.bs} extra2={person.company.catchPhrase} image={person.imgsrc}/>
                </Col>
            )
        });
        return (
            <div>
                <Container>
                    <Row className="m-3">
                        {Comp1s}
                    </Row>
                </Container>
            </div>
        );
    }
}