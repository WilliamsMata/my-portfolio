import { useEffect, useState } from "react";

type UseDarkModeProps = {
  defaultMode?: boolean;
  className?: string;
};

type UseDarkModeReturn = {
  darkMode: boolean | undefined;
  switchMode: () => void;
};

export const useDarkMode = (
  props: UseDarkModeProps = {}
): UseDarkModeReturn => {
  const { defaultMode, className = "dark" } = props;
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (darkMode === undefined) {
      const storedDarkMode = localStorage.getItem("darkMode");

      if (storedDarkMode === "true") {
        setDarkMode(true);
      } else if (storedDarkMode === "false") {
        setDarkMode(false);
      } else {
        setDarkMode(defaultMode);
      }
    } else {
      localStorage.setItem("darkMode", darkMode ? "true" : "false");
      document.body.classList.toggle(className, darkMode);
    }
  }, [darkMode, defaultMode, className]);

  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return {
    darkMode,
    switchMode,
  };
};
