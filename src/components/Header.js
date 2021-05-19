import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import Logo from './../img/header.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AuthenticationButton from './AuthenticationButton';
import './../styles/Header.css';

export default function Header() {
  const {setView} = useContext(Context);
  
  return (
    <>
    <Navbar className="nav-bar">
      <Nav fill>
        <img className="header-logo"
        alt=""
        src={Logo}
        />
        <Nav.Item>
          <Nav.Link onClick={() => setView('home')}>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link onClick={() => setView('find')}>Find Donations</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link onClick={() => setView('form')}>Make a Donation</Nav.Link>
        </Nav.Item>

        
          <NavDropdown title="Account">
            <NavDropdown.Item>Manage Donations</NavDropdown.Item>
            <NavDropdown.Item>
              <AuthenticationButton />
            </NavDropdown.Item>
          </NavDropdown>
        
      </Nav>
    </Navbar>
    </>
  );
}