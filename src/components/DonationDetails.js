import React from 'react';

export default function DonationDetails({donation}) {

  return (
    <>
      <p>
        <strong>Who:</strong> {donation.donor}
      </p>
      <p>
        <strong>What:</strong> {donation.donationName} X {donation.quantity}
      </p>
      <p>
      <strong>When:</strong> {donation.date} at {donation.startTime} until {donation.endTime}
      </p>
      <p>
      <strong>Location:</strong> {donation.address} {donation.city} {donation.state}, {donation.zip}
      </p>
      <p>
      <strong>Description:</strong> {donation.description}
      </p>
    </>
  );
}