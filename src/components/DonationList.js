import React, { useContext, useEffect } from 'react';
import { Context } from './../context/fullbellyContext';
import DonationDetails from './DonationDetails';
import GoogleMaps from './GoogleMaps';
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
import './../styles/DonationList.css'

const DonationList = () => {
  const {donations, setDonations} = useContext(Context);

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

  return (
    <>
    <Row>
      <Container className="donation-list">
        <Col className="donations">
          {donations.map((donation, index) => (
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
        </Col>
      </Container>
      <Col>
        <GoogleMaps
          donations={donations} />
      </Col>
    </Row>
    </>
  );
}

export default DonationList;