"use client";

import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T | (() => T)) => {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
