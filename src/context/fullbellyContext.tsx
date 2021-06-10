import React, { useState } from 'react';

interface FullBellyContext {
  view: string;
  donations: any[];
  setView: (view: string) => void;
  setDonations: (donations: any[]) => void;
}

const Context = React.createContext<FullBellyContext>(null);

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