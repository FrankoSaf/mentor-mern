import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    (async () => {
      const data = await axios.get('/profile');
      setUser(data.data);
    })();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
