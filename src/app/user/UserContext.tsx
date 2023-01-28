import { createContext } from "react";
import { UseUserStoreReturnType } from "./user.types";
import { useUserStore } from "./useUserStore";

export const UserContext = createContext({} as UseUserStoreReturnType);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={useUserStore()}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
