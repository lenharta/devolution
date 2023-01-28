import { Fragment } from "react";
import { RegisterStepProps } from "../../../routes/Register";
import FormWrapper from "../../common/form/FormWrapper";
import RadioInput from "../../common/inputs/RadioInput";

const modeFormOptions = [
  { value: "theme-mode-light", label: "Light Mode" },
  { value: "theme-mode-dark", label: "Dark Mode" },
  { value: "theme-mode-dim", label: "Dim Mode" },
];

export const RegisterMode = ({ data, updateFields }: RegisterStepProps) => {
  return (
    <FormWrapper title="Choose a Theme Mode.">
      {modeFormOptions.map(({ value, label }) => (
        <Fragment key={value}>
          <RadioInput
            id={value}
            label={label}
            groupId="mode-inputs"
            checked={value === data.mode ? true : false}
            onChange={(event) => updateFields({ mode: event.target.value })}
          />
        </Fragment>
      ))}
    </FormWrapper>
  );
};
export default RegisterMode;
