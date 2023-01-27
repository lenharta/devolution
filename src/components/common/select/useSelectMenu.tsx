import { useState } from "react";

export interface SelectMenuOption {
  value: string;
  title: string;
}

export default function useSelectMenu(options: SelectMenuOption[]) {
  const [isOpen, isOpenSet] = useState(false);

  const [selected, selectedSet] = useState({
    title: "",
    value: "",
  });

  function handleIsOpen() {
    isOpenSet(!isOpen);
  }

  function handleUpdateSelected(field: Partial<SelectMenuOption>) {
    selectedSet((prev) => ({ ...prev, ...field }));
    handleIsOpen();
  }

  return {
    isOpen,
    options,
    selected,
    handleIsOpen,
    handleUpdateSelected,
  };
}
