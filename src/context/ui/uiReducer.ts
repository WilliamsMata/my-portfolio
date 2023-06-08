import { type UIState } from "./";

type UIActionType =
  | {
      type: "[UI] - ToggleSidebar";
    }
  | {
      type: "[UI] - SetSidebarOpen";
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

    default:
      return state;
  }
};
