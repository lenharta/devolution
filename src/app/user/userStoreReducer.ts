import { USERACTIONTYPE, USERSTORE_TYPE } from "./user.types";

export function userStoreReducer(
  state: USERSTORE_TYPE,
  action: USERACTIONTYPE
) {
  switch (action.type) {
    case "UPDATE-NAME-LAST":
      return { ...state, ...action.payload };
    case "UPDATE-NAME-FIRST":
      return { ...state, ...action.payload };
    case "UPDATE-NAME-MIDDLE":
      return { ...state, ...action.payload };
    case "UPDATE-NAME-PREFIX":
      return { ...state, ...action.payload };
    case "UPDATE-NAME-SUFFIX":
      return { ...state, ...action.payload };
    case "UPDATE-AUTH-PASSWORD":
      return { ...state, ...action.payload };
    case "UPDATE-AUTH-USERNAME":
      return { ...state, ...action.payload };
    case "UPDATE-AUTH-EMAIL":
      return { ...state, ...action.payload };
    case "UPDATE-AUTH-PIN":
      return { ...state, ...action.payload };
  }
}
