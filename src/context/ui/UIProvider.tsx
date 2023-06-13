import { type PropsWithChildren, useReducer } from "react";
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
  const { darkMode = true, switchMode, setMode, setSystemMode } = useDarkMode();

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
        setMode,
        setSystemMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
