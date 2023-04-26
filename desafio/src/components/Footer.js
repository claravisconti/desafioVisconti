
import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Footer() {
    return (
        <>
            <Nav className="justify-content-center bg-dark p-2" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="">Sucursales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Condiciones</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Legales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contacto</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Footer;