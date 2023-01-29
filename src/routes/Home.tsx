import { useContext } from "react";
import { ThemeContext } from "../app/theme/ThemeContext";
import { Button } from "../components/common";

const Home = () => {
  const [theme, dispatch] = useContext(ThemeContext);

  return (
    <>
      <Button
        text="Go Light Mode"
        variant="action"
        onClick={() => dispatch({ type: "MODE-LIGHT", payload: "mode-light" })}
      />
      <Button
        text="Go Dark Mode"
        variant="action-secondary"
        onClick={() => dispatch({ type: "MODE-DARK", payload: "mode-dark" })}
      />
      <Button
        text="Go Dim Mode"
        variant="action-secondary"
        disabled={true}
        onClick={() => dispatch({ type: "MODE-DIM", payload: "mode-dim" })}
      />
    </>
  );
};
export default Home;
