import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import DonationControl from './DonationControl';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import AuthenticationButton from './AuthenticationButton';
import { Jumbotron } from 'react-bootstrap';
import './../styles/App.css';

export default function App() {
  const { isLoading } = useAuth0();

  let loading = (isLoading) ? <Loading /> : <DonationControl />;

  return (
    <>
    <Header />
    <Jumbotron>
      {loading}
    </Jumbotron>
    <Footer />
    </>
  );
}

