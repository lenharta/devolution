import { Fragment, useState } from "react";
import { Button, Headline } from "../components/common";
import FormWrapper from "../components/common/form/FormWrapper";
import { useMultiStepForm } from "../components/common/form/useMultistepForm";
import RadioInput from "../components/common/inputs/RadioInput";
import TextInput from "../components/common/inputs/TextInput";

function useRegisterData() {
  const registerFormData = useState({
    mode: "theme-mode-light",
    accent: "accent-blue",
    avatar: "avatar-user",
    nickname: "",
  });
  return registerFormData;
}

export type UseRegisterDataReturnType = ReturnType<typeof useRegisterData>;
export type RegisterFormDataObjectSet = UseRegisterDataReturnType[1];
export type RegisterFormDataObject = UseRegisterDataReturnType[0];

export interface RegisterStepProps {
  data: RegisterFormDataObject;
  updateFields: (fields: Partial<RegisterFormDataObject>) => void;
}

export const RegisterStepNickname = ({
  data,
  updateFields,
}: RegisterStepProps) => {
  return (
    <FormWrapper title="Choose a nickname.">
      <TextInput
        value={data.nickname}
        onChange={(event) => updateFields({ nickname: event.target.value })}
        placeholder="Ex. username1234"
      />
    </FormWrapper>
  );
};

///

const modeFormOptions = [
  { value: "theme-mode-light", label: "Light Mode" },
  { value: "theme-mode-dark", label: "Dark Mode" },
  { value: "theme-mode-dim", label: "Dim Mode" },
];

export const RegisterStepThemeMode = ({
  data,
  updateFields,
}: RegisterStepProps) => {
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

///

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

export const RegisterStepThemeAccent = ({
  data,
  updateFields,
}: RegisterStepProps) => {
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

///

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

export const RegisterStepThemeAvatar = ({
  data,
  updateFields,
}: RegisterStepProps) => {
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

///

const Register = () => {
  const [formData, formDataSet] = useRegisterData();

  function updateFields(fields: Partial<RegisterFormDataObject>) {
    formDataSet((prev) => ({ ...prev, ...fields }));
  }

  const {
    step,
    steps,
    isLastStep,
    isFirstStep,
    currentStep,
    nextStep,
    prevStep,
    goToStep,
  } = useMultiStepForm([
    <RegisterStepNickname data={formData} updateFields={updateFields} />,
    <RegisterStepThemeMode data={formData} updateFields={updateFields} />,
    <RegisterStepThemeAccent data={formData} updateFields={updateFields} />,
    <RegisterStepThemeAvatar data={formData} updateFields={updateFields} />,
  ]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!isLastStep) {
      nextStep();
    } else {
      alert("Registration Complete");
    }
  }

  const stepControls = (
    <>
      {!isFirstStep && <Button text="Back" type="button" onClick={prevStep} />}
      <Button type="submit" text={!isLastStep ? "Next" : "Finish"} />
    </>
  );

  return (
    <>
      <Headline text="Register Form" variant="page" />
      <form onSubmit={handleSubmit}>
        {step}
        {stepControls}
      </form>
    </>
  );
};

export default Register;
