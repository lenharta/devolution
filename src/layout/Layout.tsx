import { Outlet } from "react-router-dom";
import { $CONTAINER, $THEMEMODE } from "../app/types/data.types";

const Layout = () => {
  return (
    <div data-container-type={$CONTAINER.app} data-mode-type={$THEMEMODE.dim}>
      <Outlet />
    </div>
  );
};

export default Layout;
