import React from "react";
import { CONTAINERS } from "../../layout/Layout";
import { Paragraph, Subheadline } from "../typography";

const FormWrapper = ({
  title,
  legend,
  children,
}: {
  title?: string;
  legend?: string;
  children: React.ReactNode;
}) => {
  return (
    <div data-container={CONTAINERS.form}>
      <Subheadline text={title ?? "Form Title"} variant="subsection" />
      {legend && <legend>{legend}</legend>}
      <>{children}</>
    </div>
  );
};
export default FormWrapper;
