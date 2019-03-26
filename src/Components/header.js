import React from 'react';
import {Jumbotron,Button,Container} from 'react-bootstrap';
import './header.css';
import dbs_top from "../Resources/dbs_header_top.png"
import dbs_middle from "../Resources/dbs_summary_splash.png"
import Image from 'react-bootstrap/Image'


export default class Header extends React.Component {
  render() {
    var fontstyle={fontFamily: 'Staatliches'}
    return (
        <div className='align_box'>
      <Jumbotron className="m-3 rounded-0" id="header">
      <h1 style={fontstyle}>Start your Life Journey Now</h1>
       <p>
         Plan ahead with DBS.
       </p>
      <Button className="m-2" variant="light" href={"/journey"}>LET'S GO!</Button>
       </Jumbotron>
            <Image src={dbs_middle} className="m-3" fluid/>
        </div>
    );
  }
}