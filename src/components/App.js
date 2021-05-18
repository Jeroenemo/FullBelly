import React from 'react';
import DonationControl from './DonationControl';
import Footer from './Footer'
import Header from './Header';
import { Jumbotron } from 'react-bootstrap';
import './../styles/App.css'



export default function App() {
  
  return (
    <>
    <Header />
    <Jumbotron>
      <DonationControl />
    </Jumbotron>
    <Footer />
    </>
  );
}

