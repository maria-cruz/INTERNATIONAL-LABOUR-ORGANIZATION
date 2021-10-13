import React, { useEffect } from "react";
import { getIsWindowAvailable } from "@common/methods/windows";

const usePersistentState = (key: string, defaultValue?: object | string) => {
  const getPersistentState = () => {
    let currentPersistedState = null;
    if (getIsWindowAvailable()) {
      currentPersistedState = sessionStorage.getItem(key);
    }
    if (!currentPersistedState) return defaultValue;
    return JSON.parse(currentPersistedState);
  };

  const [state, setState] = React.useState(getPersistentState());

  useEffect(() => {
    if (getIsWindowAvailable()) {
      sessionStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);
  return [state, setState];
};

export default usePersistentState;
