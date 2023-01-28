import { useState } from "react";

export function useToggle() {
  const [toggle, toggleSet] = useState(false);

  function onToggle(): void {
    toggleSet(!toggle);
  }

  return {
    toggle,
    onToggle,
  };
}
