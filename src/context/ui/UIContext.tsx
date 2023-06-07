import { createContext } from "react";

interface ContextProps {
  isSidebarOpen: boolean;
  isDarkMode: boolean;

  toggleSidebar: () => void;
  setSidebarOpen: (newValue: boolean) => void;
  toggleDarkMode: () => void;
}

export const UIContext = createContext({} as ContextProps);
