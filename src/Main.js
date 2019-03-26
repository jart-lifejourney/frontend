import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './App'
import Journey from './Journey'
import Top from './top'
import Carplan from './Carplan'
import {Container} from 'react-bootstrap'

//Router-dom test components
import Error from './routeComponents/error.js';

export default class Main extends React.Component {
    render() {
        return(
            <Container>
                <Top/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App} exact/>
                        <Route path="/journey" component={Journey}/>
                        <Route path="/carplan" component={Carplan}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </Container>
        );
    }
}