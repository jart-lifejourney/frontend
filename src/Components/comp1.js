import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Comp1 extends Component {
    render () {
        return(
            <Col className="mb-4" md="auto" key={this.props.id} >
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={this.props.image}/>
                <Card.Body>
                <Card.Title><h1>{this.props.name}</h1></Card.Title>
                <Card.Text>{this.props.extra}</Card.Text>
                <Button variant="primary" href={"/carplan"}>Take a Look</Button>
                </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Comp1