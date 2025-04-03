import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Todo </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
           <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header