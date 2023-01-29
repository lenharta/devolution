import { useContext } from "react";
import { ThemeContext } from "../../app/theme/ThemeContext";
import { Subheadline } from "../common";
import { CONTAINERS } from "./Layout";

const Header = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <header data-container={CONTAINERS.header} data-theme-mode={theme.mode}>
      <Subheadline text="Header" variant="page" />
    </header>
  );
};

export default Header;
