import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import DonationDetails from './DonationDetails';
import { Accordion, Button, Card } from 'react-bootstrap';
import './../styles/ManageDonations.css'

import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({deleteDonation}) => {
  const {donations} = useContext(Context);
  const { user } = useAuth0();

  const userDonations = donations.filter(donation => donation.user === user.name)

  if (userDonations.length === 0) return <h1 className="default">You haven't made any donations, yet!</h1>

  return (
    <>
      {userDonations.map((donation, index) => (
        <Accordion key={index}>
          <Card>
            <Card.Header className="header">
              <Accordion.Toggle as={Button} variant="text" eventKey="0" onClick={console.log(index)}>
                <h3 className="donation">{donation.donationName}</h3>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <DonationDetails
                  donation={donation} />
                <button type="submit" onClick={() => deleteDonation(donation.donationId)}>WOO</button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
};

export default Profile;