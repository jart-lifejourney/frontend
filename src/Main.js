import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Journey from './Journey'
import Top from './top'
import Carplan from './Carplan'
import {Container} from 'react-bootstrap'
import Header from './Components/header.js'

//Router-dom test components
import Error from './routeComponents/error.js';

export default class Main extends React.Component {
    render() {
        return(
            <Container>
                <Top/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Header} exact/>
                        <Route path="/journey" component={Journey}/>
                        <Route path="/carplan" component={Carplan}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </Container>
        );
    }
}