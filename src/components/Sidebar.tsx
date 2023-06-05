import React, { useContext } from "react";
import { Drawer } from "./";
import { UIContext } from "~/context/ui";
import { SocialIcons } from "./ui";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);

  return (
    <Drawer open={isSidebarOpen} onClose={toggleSidebar}>
      <div className="flex h-full flex-col items-center justify-end py-4">
        <SocialIcons />
      </div>
    </Drawer>
  );
};
