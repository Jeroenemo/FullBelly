import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import Home from './Home';
import DonationList from './DonationList';
import DonationForm from './DonationForm';

export default function DonationControl() {
  const {view, setView, donations, setDonations} = useContext(Context);

  const handleAddingNewDonation = (donation) => {
    const newDonations = [...donations, {donation}];
    setDonations(newDonations)
  }

  let currentView = view;

  if (view === "home") {
    currentView = <Home />
  } else if (view === "find") {
    currentView = <DonationList />
  } else if (view === "form") {
    currentView = <DonationForm
                    addDonation={handleAddingNewDonation}/>
  }
  return (
    <>
      {currentView}
    </>
  );
}