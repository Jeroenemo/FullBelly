import React from 'react';
import DonationControl from './DonationControl';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Logout from './Logout';
import { Jumbotron } from 'react-bootstrap';
import './../styles/App.css';

export default function App() {

  return (
    <>
    <Login />
    <Logout />
    <Header />
    <Jumbotron>
      <DonationControl />
    </Jumbotron>
    <Footer />
    </>
  );
}

