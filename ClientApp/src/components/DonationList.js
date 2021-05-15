import React from 'react';
import Donation from './Donation';
import GoogleMaps from './GoogleMaps';
import { Row, Col } from 'react-bootstrap';

export default function DonationList({ donations }) {

  return (
    <>
    <Row>
      <Col>
        {donations.map((donation, index) => (
          <Donation
            key={index}
            index={index}
            donation={donation}
          />
        ))};
      </Col>
      <Col>
        <GoogleMaps />
      </Col>
    </Row>
    </>
  );
}