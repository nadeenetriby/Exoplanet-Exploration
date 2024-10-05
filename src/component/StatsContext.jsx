import React, { createContext, useState } from 'react';

// Create the context
export const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [doneChallenge, setDoneChallenge] = useState(0);

  return (
    <StatsContext.Provider value={{ doneChallenge, setDoneChallenge }}>
      {children}
    </StatsContext.Provider>
  );
};
