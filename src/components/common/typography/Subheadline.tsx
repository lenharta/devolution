const Subheadline = ({
  text,
  variant,
}: {
  text: string;
  variant: "page" | "section" | "subsection";
}) => {
  const lookup = {
    page: "fs-08 ff-medium",
    section: "fs-07 ff-regular",
    subsection: "fs-06 ff-regular",
  };

  return <h3 className={lookup[variant ?? "section"]}>{text}</h3>;
};
export default Subheadline;
