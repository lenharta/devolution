import { useCallback, useRef } from "react";

export function useCache<Cache>(initCache: Cache) {
  const update = useRef(initCache);
  const get = useCallback(() => update.current, []);
  const set = (value: Partial<Cache>) =>
    (update.current = { ...update.current, ...value });
  const clear = () => (update.current = initCache);

  return {
    get,
    set,
    clear,
  };
}
