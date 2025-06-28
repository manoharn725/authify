import { useEffect, useState } from "react";

type UseLocalStorageProps = {
  key?: string;
  initialValue?: string;
};

type UseLocalStorageReturn = [
  string,
  (value: string) => void,
  () => void,
  () => void,
];

const useLocalStorage = ({
  key = "theme",
  initialValue = "light",
}: UseLocalStorageProps): UseLocalStorageReturn => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`Error reading localStorage key:${key}, ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));

      if (key === "theme") {
        document.documentElement.setAttribute("data-theme", storedValue);
      }
    } catch (error) {
      console.log(`Error setLocalStorage: ${key}, ${error}`);
    }
  }, [key, storedValue]);

  const removeStoredValue = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(`Error removing localstorage: ${key}, ${error}`);
    }
  };

  const clearStoredValue = () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.log(`Error clearLocalStorage: ${key}, ${error}`);
    }
  };

  return [storedValue, setStoredValue, removeStoredValue, clearStoredValue];
};

export default useLocalStorage;
