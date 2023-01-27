import { Paragraph, Subheadline } from "../typography";

const SelectWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Paragraph text={title ?? "Choose an option"} variant="label" />
      <div className="SelectWrapper">
        <>{children}</>
      </div>
    </>
  );
};

export default SelectWrapper;
