import { type PropsWithChildren, useReducer, useEffect } from "react";
import { UIContext, uiReducer } from "./";
import { useDarkMode } from "~/hooks";

export interface UIState {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
  isDarkMode: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const { darkMode, switchMode } = useDarkMode({
    defaultMode: UI_INITIAL_STATE.isDarkMode,
  });

  const toggleSidebar = () => {
    dispatch({ type: "[UI] - ToggleSidebar" });
  };

  const setSidebarOpen = (newValue: boolean) => {
    dispatch({ type: "[UI] - SetSidebarOpen", payload: newValue });
  };

  const toggleDarkMode = () => {
    switchMode();
  };

  useEffect(() => {
    if (darkMode) {
      dispatch({ type: "[UI] - SetDarkMode", payload: darkMode });
    }
  }, [darkMode]);

  return (
    <UIContext.Provider
      value={{
        ...state,

        toggleSidebar,
        setSidebarOpen,
        toggleDarkMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
