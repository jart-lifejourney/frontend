import React from "react"
import dbs_top from "./Resources/dbs_header_top.png";
import Image from "react-bootstrap/Image";


export default class Top extends React.Component {
    render() {
        return (
            <div>
                <Image src={dbs_top} fluid/>
            </div>
        )
    }
}