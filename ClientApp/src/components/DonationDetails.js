import React from 'react';

export default function DonationDetails({ donation }) {

  return (
    <>
      <p>
        {donation.donor}
      </p>
      <p>
        {donation.donation}
      </p>
      <p>
        {donation.address}
      </p>
    </>
  )
}