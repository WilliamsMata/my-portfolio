import { useContext, type FC } from "react";
import { Button, SocialIcons } from "./ui";
import { UIContext } from "~/context/ui";

export const Navbar: FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <div className="fixed min-w-full">
      <nav className="container flex items-center justify-between py-2">
        <div>
          <span className="text-4xl">WM</span>
        </div>

        <div className="ml-16 hidden items-center justify-center gap-2 md:flex">
          <Button size="sm" className="text-md" variant="ghost">
            About
          </Button>
          <Button size="sm" className="text-md" variant="ghost">
            Skills
          </Button>
          <Button size="sm" className="text-md" variant="ghost">
            Projects
          </Button>
          <Button size="sm" className="text-md" variant="ghost">
            Contact Me
          </Button>
        </div>

        <div>
          <SocialIcons className="hidden md:flex" />

          <Button
            type="button"
            color="black"
            size="sm"
            variant="ghost"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <span className="font-bold">Menu</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};
