import React from 'react';
import Donation from './Donation';
import GoogleMaps from './GoogleMaps';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import './../styles/DonationList.css'

export default function DonationList({ donations }) {

  return (
    <>
    <Row>
      <Col>
        {donations.map((donation, index) => (
          <Accordion key={donation.id}>
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
                  
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))};
      </Col>
      <Col>
        <GoogleMaps />
      </Col>
    </Row>
    </>
  );
}