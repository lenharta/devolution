import { useUserStore } from "./useUserStore";

export interface UserStoreObjectType {
  name: {
    prefix: string;
    suffix: string;
    middle: string;
    first: string;
    last: string;
  };
  auth: {
    pin: string;
    email: string;
    username: string;
    password: string;
  };
}

export type USERACTIONTYPE =
  | { type: "NAME-LAST"; payload: string }
  | { type: "NAME-FIRST"; payload: string }
  | { type: "NAME-MIDDLE"; payload: string }
  | { type: "NAME-PREFIX"; payload: string }
  | { type: "NAME-SUFFIX"; payload: string }
  | { type: "AUTH-PASSWORD"; payload: string }
  | { type: "AUTH-USERNAME"; payload: string }
  | { type: "AUTH-EMAIL"; payload: string }
  | { type: "AUTH-PIN"; payload: string };

export type UseUserStoreReturnType = ReturnType<typeof useUserStore>;
export type USERSTORE_TYPE = UseUserStoreReturnType[0];
export type USERSTORE_SETTYPE = UseUserStoreReturnType[1];
