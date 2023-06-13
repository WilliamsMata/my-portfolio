import { createContext } from "react";

interface ContextProps {
  isSidebarOpen: boolean;
  isDarkMode: boolean;

  toggleSidebar: () => void;
  setSidebarOpen: (newValue: boolean) => void;
  toggleDarkMode: () => void;
  setMode: (newMode: boolean) => void;
  setSystemMode: () => void;
}

export const UIContext = createContext({} as ContextProps);
