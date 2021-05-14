import React, { useContext } from 'react';
import { Context } from './../context/fullbellyContext';
import Home from './Home';
import DonationList from './DonationList';
import DonationForm from './DonationForm';

export default function DonationControl() {
  const {view, setView} = useContext(Context);

  let currentView = view;

  if (view === "home") {
    currentView = <Home />
  } else if (view === "find") {
    currentView = <DonationList />
  } else if (view === "form") {
    currentView = <DonationForm />
  }
  return (
    <>
      {currentView}
    </>
  );
}