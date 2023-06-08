import { useEffect, useState } from "react";

type UseDarkModeProps = {
  defaultMode: boolean;
  className?: string;
};

type UseDarkModeReturn = {
  darkMode: boolean;
  switchMode: () => void;
};

export const useDarkMode = (
  props: UseDarkModeProps = { defaultMode: true }
): UseDarkModeReturn => {
  const { defaultMode, className = "dark" } = props;
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof localStorage === "undefined") return defaultMode;

    const storedDarkMode = localStorage.getItem("darkMode");

    if (storedDarkMode === "true") {
      return true;
    } else if (storedDarkMode === "false") {
      return false;
    } else {
      return defaultMode;
    }
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    document.documentElement.classList.toggle(className, darkMode);
  }, [darkMode, className]);

  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return {
    darkMode,
    switchMode,
  };
};
