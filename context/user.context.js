import { createContext, useState, useCallback } from "react";
import axios from "axios";
const url = "http://localhost:8000";

// context
export const UserContext = createContext({});

// provider
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const sessionLogin = useCallback(async () => {
    const { data } = await axios.get(`${url}/auth`);
    console.log(data);
    setUser(data);
  }, []);

  const value = {
    user,
    sessionLogin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// consumer
export const { Consumer: UserContextConsumer } = UserContext;
