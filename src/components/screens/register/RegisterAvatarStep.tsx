import React from "react";
import FormWrapper from "../../common/form/FormWrapper";

const RegisterAvatarStep = <Data,>({
  data,
  updateFields,
}: {
  data: Data;
  updateFields: (fields: Partial<Data>) => void;
}) => {
  return (
    <FormWrapper title="Choose an Avatar.">
      <p className="fs-08 ff-regular">Content</p>
    </FormWrapper>
  );
};

export default RegisterAvatarStep;
