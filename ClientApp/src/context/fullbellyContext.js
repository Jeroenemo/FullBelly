import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider({children}) {
  const [view, setView] = useState('home');
  const [donations, setDonations] = useState([]);

  return (
    <Context.Provider value={{
      view: view,
      setView: setView,
      donations: donations,
      setDonations: setDonations
    }}>
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context}