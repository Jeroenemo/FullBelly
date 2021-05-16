import React from 'react';

export default function DonationDetails({ donation }) {

  return (
    <>
      <p>
        Contact: {donation.donor}
      </p>
      <p>
        Donation: {donation.donation}
      </p>
      <p>
        Location: {donation.address}
      </p>
    </>
  )
}