import React, { useState, useEffect } from 'react'
import { Button, Form, Nav, Navbar, NavDropdown, Container, InputGroup } from 'react-bootstrap';
import melobit from '../images/melobit.svg'
import melobitlogo from '../images/melobitlogo.svg'

function NavbarHead() {
    return (
        <Navbar expand="lg">
            <Container fluid>

                <Navbar.Brand href="#">
                    <img src={melobitlogo} className='p-2 melobit-icon'></img>
                    <img src={melobit} className='melobit-text'></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    {/* <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHead;
