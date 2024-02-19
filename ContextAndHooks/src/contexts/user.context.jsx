import { createContext, useState } from "react";

const userContext = createContext({
  user: "",
  addUser: (user) => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const addUser = (userDetails) => {
    setUser(userDetails);
  };

  return (
    <userContext.Provider value={{ addUser, user }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;