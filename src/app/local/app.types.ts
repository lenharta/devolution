export type APPSTOREOBJECTTYPE = {
  isHome: boolean;
  isLoading: boolean;
  isSession: boolean;
  isRegistered: boolean;
  success: string | "status-success";
  warning: string | "status-warning";
  misuse: string | "status-misuse";
  error: string | "status-error";
  help: string | "status-help";
};

export type APPSTOREACTIONTYPE =
  | { type: "STATUS-ISHOME"; payload: { isHome: boolean } }
  | { type: "STATUS-ISLOADING"; payload: { isLoading: boolean } }
  | { type: "STATUS-ISSESSION"; payload: { isSession: boolean } }
  | { type: "STATUS-ISREGISTERED"; payload: { isRegistered: boolean } }
  | { type: "STATUS-SUCCESS"; payload: { success: string | "status-success" } }
  | { type: "STATUS-WARNING"; payload: { warning: string | "status-warning" } }
  | { type: "STATUS-MISUSE"; payload: { misuse: string | "status-misuse" } }
  | { type: "STATUS-ERROR"; payload: { error: string | "status-error" } }
  | { type: "STATUS-HELP"; payload: { help: string | "status-help" } };
