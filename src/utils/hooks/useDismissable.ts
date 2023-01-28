import { useState } from "react";

export const useDismissable = () => {
  const [isMounted, isMountedSet] = useState(false);

  return {
    isMounted,
    show: () => isMountedSet(true),
    dismiss: () => isMountedSet(false),
  };
};
