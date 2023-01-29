import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../app/local/AppContext";
import { ThemeContext } from "../../app/theme/ThemeContext";
import { CONTAINERS } from "./Layout";

const PageWrapper = ({
  id,
  title,
  content,
}: {
  id: string;
  title?: string;
  content: React.ReactNode;
}) => {
  const [theme] = useContext(ThemeContext);

  return (
    <div id={id} data-container={CONTAINERS.page} data-theme-mode={theme.mode}>
      <h1 className="fs-12 ff-bold">{title ?? "Page Not Found"}</h1>
      <div id="content">{content}</div>
    </div>
  );
};

export default PageWrapper;
