import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider({children}) {
  const [view, setView] = useState('home');

  return (
    <Context.Provider value={{
      view: view,
      setView: setView
    }}>
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context}