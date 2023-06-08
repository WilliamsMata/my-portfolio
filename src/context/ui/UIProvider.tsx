import { type PropsWithChildren, useReducer, useEffect } from "react";
import { UIContext, uiReducer } from "./";
import { useDarkMode } from "~/hooks";

export interface UIState {
  isSidebarOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const { darkMode, switchMode } = useDarkMode({ defaultMode: true });

  const toggleSidebar = () => {
    dispatch({ type: "[UI] - ToggleSidebar" });
  };

  const setSidebarOpen = (newValue: boolean) => {
    dispatch({ type: "[UI] - SetSidebarOpen", payload: newValue });
  };

  const toggleDarkMode = () => {
    switchMode();
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        isDarkMode: darkMode,

        toggleSidebar,
        setSidebarOpen,
        toggleDarkMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
