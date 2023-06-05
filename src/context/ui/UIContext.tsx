import { createContext } from "react";

interface ContextProps {
  isSidebarOpen: boolean;

  toggleSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
