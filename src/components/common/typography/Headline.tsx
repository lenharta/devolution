const Headline = ({
  text,
  variant,
}: {
  text: string;
  variant: "page" | "section" | "subsection";
}) => {
  const lookup = {
    page: "fs-11 ff-bold",
    section: "fs-10 ff-medium",
    subsection: "fs-09 ff-medium",
  };

  return <h2 className={lookup[variant ?? "section"]}>{text}</h2>;
};
export default Headline;
