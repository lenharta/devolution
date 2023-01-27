import { createContext, useState } from "react";

export const INITUSERCONTEXT = {
  name: {
    prefix: "",
    suffix: "",
    middle: "",
    first: "",
    last: "",
  },
  auth: {
    pin: "",
    email: "",
    username: "",
    password: "",
  },
};

function useUserStore() {
  const userStore = useState(INITUSERCONTEXT);
  return userStore;
}

export type UseUserStoreReturnType = ReturnType<typeof useUserStore>;
export type USERSTORETYPE = UseUserStoreReturnType[0];
export type USERSTORESETTYPE = UseUserStoreReturnType[1];

export const UserContext = createContext({} as UseUserStoreReturnType);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={useUserStore()}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
