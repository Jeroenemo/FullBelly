import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import Home from './Home';
import DonationList from './DonationList';
import DonationForm from './DonationForm';

export default function DonationControl() {
  const {view, setView, donations, setDonations} = useContext(Context);

  const handleAddingNewDonation = (donation) => {
    const newDonations = [...donations, donation];
    setDonations(newDonations)
  }

  let currentView = view;

  switch(view) {
    case "home":
      currentView = <Home />
      break;
    case "find":
      currentView = <DonationList donations={donations} />
      break;
    case "form":
      currentView = <DonationForm addDonation={handleAddingNewDonation}/>
      break;
  }
  return (
    <>
      {currentView}
    </>
  );
}