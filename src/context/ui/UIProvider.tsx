import { type PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  isSidebarOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSidebar = () => {
    dispatch({ type: "[UI] - ToggleSidebar" });
    console.log(state.isSidebarOpen);
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
