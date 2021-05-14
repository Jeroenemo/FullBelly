import React from 'react';
import Logo from './../img/header.png';
import { Nav, Navbar } from 'react-bootstrap';
import './../styles/Header.css';

export default function Header() {

  return (
    <>
    <Navbar className="nav-bar">
      <Nav fill>
        <img className="header-logo"
        alt=""
        src={Logo}
        />
        <Nav.Item className="nav-item">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Donations">Make a Donation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Manage">Manage Donations</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </>
  )
}