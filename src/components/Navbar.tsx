import { useContext, type FC } from "react";
import { Button } from "./ui";
import { UIContext } from "~/context/ui";

export const Navbar: FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <div className="p-2">
      <nav className="container flex justify-between">
        <div>
          <span className="text-4xl">WM</span>
        </div>

        <Button
          color="black"
          size="default"
          variant="outline"
          onClick={toggleSidebar}
        >
          Menu
        </Button>
      </nav>
    </div>
  );
};
