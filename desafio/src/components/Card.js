import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Tarjeta(props) {
    return (
        <Card className="card1">
            <Link to={`/detalle/${props.Id}`}><Card.Img variant="top" src={props.Img} className="imgStyle" /></Link>
            <Card.Body>
                <Card.Text>{props.Titulo}</Card.Text>
                <Card.Title>${props.Precio}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Tarjeta;