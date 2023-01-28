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
  | { type: "UPDATE-NAME-LAST"; payload: { name: { last: string } } }
  | { type: "UPDATE-NAME-FIRST"; payload: { name: { first: string } } }
  | { type: "UPDATE-NAME-MIDDLE"; payload: { name: { middle: string } } }
  | { type: "UPDATE-NAME-PREFIX"; payload: { name: { prefix: string } } }
  | { type: "UPDATE-NAME-SUFFIX"; payload: { name: { suffix: string } } }
  | { type: "UPDATE-AUTH-PASSWORD"; payload: { auth: { password: string } } }
  | { type: "UPDATE-AUTH-USERNAME"; payload: { auth: { username: string } } }
  | { type: "UPDATE-AUTH-EMAIL"; payload: { auth: { email: string } } }
  | { type: "UPDATE-AUTH-PIN"; payload: { auth: { pin: string } } };

export type UseUserStoreReturnType = ReturnType<typeof useUserStore>;
export type USERSTORE_TYPE = UseUserStoreReturnType[0];
export type USERSTORE_SETTYPE = UseUserStoreReturnType[1];
