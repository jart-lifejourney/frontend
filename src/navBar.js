import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Router-dom test components
import Home from './routeComponents/home.js';
import Help from './routeComponents/help.js';
import About from './routeComponents/about.js';
import Error from './routeComponents/error.js';

export default class Navibar extends React.Component {
    render() {
        return(
        <div>
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                    <Nav.Link href="/blabla">Error</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <BrowserRouter>
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/help" component={Help}/>
                <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        </div>  
        );
    }
}