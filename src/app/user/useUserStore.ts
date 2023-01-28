import { useState } from "react";
import { UserStoreObjectType } from "./user.types";

export const USERSTOREOBJECT: UserStoreObjectType = {
  name: {
    suffix: "",
    prefix: "",
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

export function useUserStore() {
  const userStore = useState(USERSTOREOBJECT);
  return userStore;
}
