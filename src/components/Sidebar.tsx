import React, { useContext } from "react";
import { Drawer } from "./";
import { UIContext } from "~/context/ui";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);

  return (
    <Drawer open={isSidebarOpen} onClose={toggleSidebar}>
      <div>op1</div>
      <div>op2</div>
    </Drawer>
  );
};
