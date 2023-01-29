import { useContext } from "react";
import { ThemeContext } from "../../app/theme/ThemeContext";
import { CONTAINERS } from "./Layout";

const PageWrapper = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: React.ReactNode;
}) => {
  const [theme] = useContext(ThemeContext);

  return (
    <div id={id} data-container={CONTAINERS.page} data-theme-mode={theme.mode}>
      <h1 className="fs-12 ff-bold">
        {title ?? "Page Not Found | Try reloading the page."}
      </h1>
      <div id="content">{content}</div>
    </div>
  );
};

export default PageWrapper;
