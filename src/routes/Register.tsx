import { useState } from "react";
import { Button, Headline } from "../components/common";
import { useMultiStepForm } from "../components/common/form/useMultistepForm";
import {
  RegisterAccent,
  RegisterAvatar,
  RegisterMode,
  RegisterNickname,
} from "../components/screens/register";

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
    <RegisterNickname data={formData} updateFields={updateFields} />,
    <RegisterMode data={formData} updateFields={updateFields} />,
    <RegisterAccent data={formData} updateFields={updateFields} />,
    <RegisterAvatar data={formData} updateFields={updateFields} />,
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
