import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import DonationDetails from './DonationDetails';
import { Accordion, Button, Card } from 'react-bootstrap';
import './../styles/DonationList.css'

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const {donations} = useContext(Context);
  const { user } = useAuth0();

  const userDonations = donations.filter(donation => donation.user === user.name)

  return (
    <>
      {userDonations.map((donation, index) => (
        <Accordion key={index}>
          <Card>
            <Card.Header className="header">
              <Accordion.Toggle as={Button} variant="text" eventKey="0">
                <h3 className="donation">{donation.donationName}</h3>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DonationDetails
                  donation={donation} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
};

export default Profile;