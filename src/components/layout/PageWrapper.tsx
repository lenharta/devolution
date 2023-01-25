const PageWrapper = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div id={id} className="container-page">
      <h1 className="fs-12 ff-bold">
        {title ?? "Page Not Found | Try reloading the page."}
      </h1>
      <div id="#content">{content}</div>
    </div>
  );
};

export default PageWrapper;
