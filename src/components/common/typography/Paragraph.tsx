const Paragraph = ({
  text,
  variant,
}: {
  text: string;
  variant: "lead" | "one" | "two" | "caption" | "footnote";
}) => {
  const lookup = {
    lead: "fs-05 ff-medium",
    one: "fs-04 ff-regular",
    two: "fs-03 ff-regular",
    caption: "fs-02 ff-regular",
    footnote: "fs-01 ff-regular",
  };

  return <p className={lookup[variant ?? "section"]}>{text}</p>;
};
export default Paragraph;
