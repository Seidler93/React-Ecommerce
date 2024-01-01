import { logMissingFieldErrors } from '@apollo/client/core/ObservableQuery';
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext)

const UserProvider = (props) => {
  const [cart, setCart] = useState([])

  // Example function to update the user context
  // const updateUser = async (newUser) => {
  //   console.log(newUser);    
  //   await setCurrentUser(newUser);
  // };

  return (
    <UserContext.Provider value={{ cart, setCart }} {...props} />
  );
};

export default UserProvider;
