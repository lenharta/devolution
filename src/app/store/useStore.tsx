import { useState } from "react";
import { $THEMEMODE } from "../types/data.types";

export function useStore() {
  const store = useState({
    theme: {
      mode: $THEMEMODE.light,
      accent: "accent-blue",
    },
    user: {
      name_last: "",
      name_first: "",
      name_middle: "",
    },
  });
  return store;
}
