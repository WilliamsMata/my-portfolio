import { useContext, type FC } from "react";
import { Button } from "./ui";
import { UIContext } from "~/context/ui";

export const Navbar: FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <div className="bg-slate-600 p-2">
      <nav className="flex px-2">
        <div>
          <span className="text-4xl">WM</span>
        </div>

        <Button color="black" onClick={toggleSidebar}>
          Menu
        </Button>
      </nav>
    </div>
  );
};
