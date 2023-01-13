import { $CONTAINER, $FONTVARIANT, $THEMEMODE } from "../app/types/data.types";

const Page = ({ title, content }: { title: string; content: JSX.Element }) => {
  return (
    <div id="Page" data-container-type={$CONTAINER.page}>
      <header id="Page-header">
        <h1 data-font-type={$FONTVARIANT.headline1}>{title}</h1>
      </header>

      <div id="page-content">{content}</div>
    </div>
  );
};
export default Page;
