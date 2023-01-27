import { Outlet } from "react-router-dom";
import ThemeContextProvider from "../../app/theme/ThemeContext";

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
    <div data-container={CONTAINERS.layout}>
      <ThemeContextProvider>
        <Outlet />
      </ThemeContextProvider>
    </div>
  );
};
export default Layout;
