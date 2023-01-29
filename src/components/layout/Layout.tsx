import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext } from "../../app/local/AppContext";
import ThemeContextProvider from "../../app/theme/ThemeContext";
import Header from "./Header";

export enum CONTAINERS {
  page = "container-page",
  tile = "container-tile",
  form = "container-form",
  layout = "container-layout",
  header = "container-header",
  footer = "container-footer",
}

const Layout = () => {
  const [state, dispatchState] = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return dispatchState({ type: "ISHOME", payload: true });
    }
    return dispatchState({ type: "ISHOME", payload: false });
  }, [location.pathname]);

  return (
    <ThemeContextProvider>
      <div data-container={CONTAINERS.layout}>
        <Header />
        <Outlet />
      </div>
    </ThemeContextProvider>
  );
};
export default Layout;
