import { useRef, useState } from "react";

export function useMultiStepForm(steps: React.ReactNode[]) {
  const [currentStep, currentStepSet] = useState(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length;

  function nextStep() {
    if (currentStep <= steps.length) {
      currentStepSet((prev) => prev + 1);
    }
    return;
  }

  function prevStep() {
    if (currentStep >= 0) {
      currentStepSet((prev) => prev - 1);
    }
    return;
  }

  function goToStep(i: number) {
    if (i >= 0 && i <= steps.length) {
      currentStepSet((prev) => (i === prev ? prev : i));
    }
  }

  return {
    steps,
    step: steps[currentStep],
    isLastStep,
    isFirstStep,
    currentStep,
    nextStep,
    prevStep,
    goToStep,
  };
}
