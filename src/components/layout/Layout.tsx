import { Outlet } from "react-router-dom";
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
