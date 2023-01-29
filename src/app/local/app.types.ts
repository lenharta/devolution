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
  | { type: "STATUS-ISHOME"; payload: { isHome: boolean } }
  | { type: "STATUS-ISLOADING"; payload: { isLoading: boolean } }
  | { type: "STATUS-ISSESSION"; payload: { isSession: boolean } }
  | { type: "STATUS-ISREGISTERED"; payload: { isRegistered: boolean } }
  | { type: "STATUS-SUCCESS"; payload: { status: "status-success" } }
  | { type: "STATUS-WARNING"; payload: { status: "status-warning" } }
  | { type: "STATUS-MISUSE"; payload: { status: "status-misuse" } }
  | { type: "STATUS-ERROR"; payload: { status: "status-error" } }
  | { type: "STATUS-HELP"; payload: { status: "status-help" } };
