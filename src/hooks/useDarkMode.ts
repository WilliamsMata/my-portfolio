import { useEffect, useState } from "react";

type UseDarkModeProps = {
  className?: string;
};

type UseDarkModeReturn = {
  darkMode: boolean | undefined;
  switchMode: () => void;
};

export const useDarkMode = (
  props: UseDarkModeProps = {}
): UseDarkModeReturn => {
  const { className = "dark" } = props;
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (darkMode === undefined) {
      const theme = localStorage.getItem("theme");

      if (theme === "dark") {
        setDarkMode(true);
      } else if (theme === "light") {
        setDarkMode(false);
      } else {
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    } else {
      localStorage.setItem("theme", darkMode ? "dark" : "light");

      if (darkMode) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, [darkMode, className]);

  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return {
    darkMode,
    switchMode,
  };
};
