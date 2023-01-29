import { useContext, useEffect } from "react";
import { AppContext } from "../app/local/AppContext";
import { ThemeContext } from "../app/theme/ThemeContext";
import { Button } from "../components/common";

const Home = () => {
  const [theme, dispatchTheme] = useContext(ThemeContext);

  return (
    <>
      <Button
        text="Go Light Mode"
        variant="action"
        onClick={() =>
          dispatchTheme({ type: "MODE-LIGHT", payload: "mode-light" })
        }
      />
      <Button
        text="Go Dark Mode"
        variant="action-secondary"
        onClick={() =>
          dispatchTheme({ type: "MODE-DARK", payload: "mode-dark" })
        }
      />
      <Button
        text="Go Dim Mode"
        variant="action-secondary"
        disabled={true}
        onClick={() => dispatchTheme({ type: "MODE-DIM", payload: "mode-dim" })}
      />
    </>
  );
};
export default Home;
