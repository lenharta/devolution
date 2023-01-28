import { Fragment } from "react";
import { RegisterStepProps } from "../../../routes/Register";
import FormWrapper from "../../common/form/FormWrapper";
import RadioInput from "../../common/inputs/RadioInput";

const accentFormOptions = [
  { value: "accent-red", label: "Red" },
  { value: "accent-blue", label: "Blue" },
  { value: "accent-green", label: "Green" },
  { value: "accent-yellow", label: "Yellow" },
  { value: "accent-orange", label: "Orange" },
  { value: "accent-indigo", label: "Indigo" },
  { value: "accent-violet", label: "Violet" },
  { value: "accent-magenta", label: "Magenta" },
];

export const RegisterAccent = ({ data, updateFields }: RegisterStepProps) => {
  return (
    <FormWrapper title="Choose an Accent Color.">
      {accentFormOptions.map(({ value, label }) => (
        <Fragment key={value}>
          <RadioInput
            id={value}
            label={label}
            groupId="accent-inputs"
            checked={value === data.accent ? true : false}
            onChange={(event) => updateFields({ mode: event.target.value })}
          />
        </Fragment>
      ))}
    </FormWrapper>
  );
};

export default RegisterAccent;
