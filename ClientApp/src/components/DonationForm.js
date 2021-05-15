import React, { useState } from 'react';

export default function DonationForm({ addDonation }) {
  const [value, setValue] = useState("");
  
  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (!value) return;
    addDonation(value);
    setValue("");
  }

  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <input 
          type="text"
          className="input"
          value={value}
          onChange={event => setValue(event.target.value)}/>
      </form>
    </>
  );
}