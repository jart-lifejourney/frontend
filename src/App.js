import React from 'react';
import Header from './Components/header.js'
import Comp1 from './Components/comp1.js';
import {Row,Container} from 'react-bootstrap';
import axios from "axios";
import MyForm from './Components/MyForm';

// Some APIs need a key, uncomment and find out syntax to add >>> something like &appid=${API_key}
// const API_key= "something"

export default class Home extends React.Component {
  render() {
    return (
      <div>
          <Container>
          <Header/>
          </Container>
      </div>

    );
  }
}