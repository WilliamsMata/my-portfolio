import { type UIState } from "./";

type UIActionType =
  | {
      type: "[UI] - ToggleSidebar";
    }
  | {
      type: "[UI] - SetSidebarOpen";
      payload: boolean;
    }
  | {
      type: "[UI] - ToggleDarkMode";
    }
  | {
      type: "[UI] - SetDarkMode";
      payload: boolean;
    };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - ToggleSidebar":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    case "[UI] - SetSidebarOpen":
      return {
        ...state,
        isSidebarOpen: action.payload,
      };

    case "[UI] - SetDarkMode":
      return {
        ...state,
        isDarkMode: action.payload,
      };

    default:
      return state;
  }
};
