import { USERACTIONTYPE, USERSTORE_TYPE } from "./user.types";

export function userStoreReducer(
  state: USERSTORE_TYPE,
  action: USERACTIONTYPE
) {
  switch (action.type) {
    case "NAME-LAST":
      return { ...state, name: { last: action.payload } };
    case "NAME-FIRST":
      return { ...state, name: { first: action.payload } };
    case "NAME-MIDDLE":
      return { ...state, name: { middle: action.payload } };
    case "NAME-PREFIX":
      return { ...state, name: { prefix: action.payload } };
    case "NAME-SUFFIX":
      return { ...state, name: { suffix: action.payload } };
    case "AUTH-PASSWORD":
      return { ...state, auth: { password: action.payload } };
    case "AUTH-USERNAME":
      return { ...state, auth: { username: action.payload } };
    case "AUTH-EMAIL":
      return { ...state, auth: { email: action.payload } };
    case "AUTH-PIN":
      return { ...state, auth: { pin: action.payload } };
    default:
      return state;
  }
}
