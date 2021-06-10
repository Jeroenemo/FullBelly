import React, { ReactNode } from 'react';
import DonationControl from './DonationControl';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import { useAuth0 } from "@auth0/auth0-react";
import { Jumbotron } from 'react-bootstrap';
import './../styles/App.css';

export default function App() {
  const { isLoading } = useAuth0();

  let loading: ReactNode = (isLoading) ? <Loading /> : <DonationControl />;

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

