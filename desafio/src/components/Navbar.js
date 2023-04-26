
import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mainNav">
                <Container>
                    <Navbar.Brand href="#home">Wardrobe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/">Productos</Link></Nav.Link>
                            <Nav.Link>Sale</Nav.Link>
                            <Nav.Link>Gift Card</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><i class="bi bi-bag-fill"></i></Nav.Link>
                            <Nav.Link href="#deets"><i class="bi bi-person-circle"></i></Nav.Link>
                            <Nav.Link href="#deets"><i class="bi bi-search"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Menu;