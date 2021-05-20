import React, { useContext, useEffect } from 'react';
import { Context } from './../context/fullbellyContext';
import Home from './Home';
import DonationList from './DonationList';
import DonationForm from './DonationForm';
import ManageDonations from './ManageDonations';

export default function DonationControl() {
  const {view, donations, setDonations} = useContext(Context);

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

  const handleAddingNewDonation = (donation) => {
    const newDonations = [...donations, donation];
    setDonations(newDonations);
    fetch('http://localhost:5000/api/Donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donation)
      })
      .then(data => data.json())
      .catch((error) => {
        console.log(error);
      });
  };

  let currentView = view;

  switch(view) {
    case "home":
      currentView = <Home />
      break;
    case "find":
      currentView = <DonationList />
      break;
    case "form":
      currentView = <DonationForm 
        addDonation={handleAddingNewDonation} />
      break;
    case "manage":
      currentView = <ManageDonations />
  }
  return (
    <>
      {currentView}
    </>
  );
}