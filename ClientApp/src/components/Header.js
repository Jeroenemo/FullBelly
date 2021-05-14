import React from 'react';
import Home from './Home';
import DonationForm from './DonationForm';
import Logo from './../img/header.png';
import { Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import './../styles/Header.css';
import DonationList from './DonationList';

export default function Header() {

  return (
    <>
    <Navbar className="nav-bar">
      <Nav fill>
        <img className="header-logo"
        alt=""
        src={Logo}
        />
        <Nav.Item className="nav-item" href="/home">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={console.log("click")}href="/find">Find Donations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/form">Make a Donation</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    <Switch>
      <Jumbotron>
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={DonationForm} />
        <Route exact path="/find" component={DonationList} />
      </Jumbotron>
    </Switch>
    </>
  )
}