import { createContext } from "react";

interface ContextProps {
  isSidebarOpen: boolean;

  toggleSidebar: () => void;
  setSidebarOpen: (newValue: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
