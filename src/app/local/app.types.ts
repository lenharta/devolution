export type STATUSTYPE =
  | "status-idle"
  | "status-help"
  | "status-error"
  | "status-misuse"
  | "status-success"
  | "status-warning";

export type APPSTOREOBJECTTYPE = {
  isHome: boolean;
  isLoading: boolean;
  isSession: boolean;
  isRegistered: boolean;
  isStatus: STATUSTYPE;
};

export type APPSTOREACTIONTYPE =
  | { type: "ISHOME"; payload: boolean }
  | { type: "ISLOADING"; payload: boolean }
  | { type: "ISSESSION"; payload: boolean }
  | { type: "ISREGISTERED"; payload: boolean }
  | { type: "STATUS-IDLE"; payload: "status-idle" }
  | { type: "STATUS-HELP"; payload: "status-help" }
  | { type: "STATUS-ERROR"; payload: "status-error" }
  | { type: "STATUS-MISUSE"; payload: "status-misuse" }
  | { type: "STATUS-WARNING"; payload: "status-warning" }
  | { type: "STATUS-SUCCESS"; payload: "status-success" };
