import { Fragment } from "react";
import { RegisterStepProps } from "../../../routes/Register";
import FormWrapper from "../../common/form/FormWrapper";
import RadioInput from "../../common/inputs/RadioInput";

const avatarFormOptions = [
  { value: "avatar-user", label: "User" },
  { value: "avatar-robot", label: "User" },
  { value: "avatar-rocket", label: "Plane" },
  { value: "avatar-basketball", label: "Robot" },
  { value: "avatar-baseball", label: "Truck" },
  { value: "avatar-tennis", label: "Apple" },
  { value: "avatar-bicycle", label: "Anchor" },
  { value: "avatar-plane", label: "Zombie" },
  { value: "avatar-car", label: "Tennis" },
  { value: "avatar-truck", label: "Rocket" },
  { value: "avatar-helicopter", label: "Bicycle" },
  { value: "avatar-anchor", label: "Baseball" },
  { value: "avatar-zombie", label: "Basketball" },
  { value: "avatar-microscope", label: "Helicopter" },
  { value: "avatar-apple", label: "Microscope" },
];

export const RegisterAvatar = ({ data, updateFields }: RegisterStepProps) => {
  return (
    <FormWrapper title="Choose a Avatar.">
      {avatarFormOptions.map(({ value, label }) => (
        <Fragment key={value}>
          <RadioInput
            id={value}
            label={label}
            groupId="avatar-inputs"
            checked={value === data.avatar ? true : false}
            onChange={(event) => updateFields({ avatar: event.target.value })}
          />
        </Fragment>
      ))}
    </FormWrapper>
  );
};
export default RegisterAvatar;
