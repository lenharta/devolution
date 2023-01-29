import { useContext } from "react";
import { ThemeContext } from "../../app/theme/ThemeContext";
import { Subheadline } from "../common";
import { CONTAINERS } from "./Layout";

const Footer = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <footer data-container={CONTAINERS.footer} data-theme-mode={theme.mode}>
      <Subheadline text="App Footer" variant="page" />
    </footer>
  );
};

export default Footer;
