import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Donation from './Donation';
import DonationDetails from './DonationDetails';
import GoogleMaps from './GoogleMaps';
import Loading from './Loading';
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
import './../styles/DonationList.css'

const DonationList = () => {
  const {donations} = useContext(Context);

  return (
    <>
    <Row>
      <Container className="donation-list">
        <Col className="donations">
          {donations.map((donation, index) => (
            <Accordion key={index}>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="text" eventKey="0">
                    <Donation
                      key={index}
                      index={index}
                      donation={donation}
                    />
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

export default withAuthenticationRequired(DonationList, {
  onRedirecting: () => <Loading />,
});