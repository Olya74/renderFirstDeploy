import { createContext,useContext,useState } from 'react';

const UserContext = createContext();

export default function useUserContext() {
    const context= useContext(UserContext);
  return context;
}

export function UserContextProvider({children}) {
    const [user, setUser] = useState({
      name: "John",
      email: "john@gmail.com",
      message: "Hello",
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}