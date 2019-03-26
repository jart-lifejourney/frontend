import React from "react"
import {Image , Container} from "react-bootstrap";


export default class Carplan extends React.Component {
    render() {
        return (
            <div className="m-5">
                <div className="mb-3">
                    <h1>Transportation</h1>
                </div>
                <Image src="https://i.pinimg.com/originals/13/99/71/1399716b9b9f5ce9df42c70db24bdfa1.png" fluid/>
            </div>
        )
    }
}