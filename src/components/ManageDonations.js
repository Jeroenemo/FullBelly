import React, { useContext, useEffect } from 'react';
import { Context } from './../context/fullbellyContext';
import DonationDetails from './DonationDetails';
import { Accordion, Button, Card } from 'react-bootstrap';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from './Loading';
import './../styles/ManageDonations.css';

import { useAuth0 } from "@auth0/auth0-react";

const ManageDonations = ({deleteDonation}) => {
  const {donations, setDonations} = useContext(Context);
  const { user } = useAuth0();

  useEffect(() => {
    let mounted = true;
    fetch(`http://localhost:5000/api/Donations`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          if(mounted) {
            console.log(jsonifiedResponse);
            setDonations(jsonifiedResponse);
          }
        })
      .catch((error) => {
        console.log(error);
    });
    return () => mounted = false;
  }, []);

  const userDonations = donations.filter(donation => donation.user === user.name)

  if (userDonations.length === 0) return <h1 className="default">You haven't made any donations, yet!</h1>

  return (
    <>
      {userDonations.map((donation, index) => (
        <Accordion key={index}>
          <Card>
            <Card.Header className="header">
              <Accordion.Toggle as={Button} variant="text" eventKey="0" onClick={console.log(index)}>
                <h3>{donation.donationName}</h3>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DonationDetails
                  donation={donation} />
                  <button className="button" type="submit" onClick={() => deleteDonation(donation.donationId)}>Delete</button>
                
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
};

export default withAuthenticationRequired(ManageDonations, {
  onRedirecting: () => <Loading />,
});