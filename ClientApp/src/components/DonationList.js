import React from 'react';
import Donation from './Donation';
import GoogleMaps from './GoogleMaps';
import { ListGroup, Row, Col } from 'react-bootstrap';

export default function DonationList({ donations }) {

  return (
    <>
    <Row>
      <Col>
      <ListGroup variant="flush">
        {donations.map((donation, index) => (
          <ListGroup.Item>
            <Donation
              key={index}
              index={index}
              donation={donation}
            />
          </ListGroup.Item>
        ))};
      </ListGroup>
      </Col>
      <Col>
        <GoogleMaps />
      </Col>
    </Row>
    </>
  );
}