import { useContext, type FC } from "react";
import { Button, SocialIcons } from "./ui";
import { UIContext } from "~/context/ui";
import { WMIcon } from "./icons";

export const Navbar: FC = () => {
  const { isDarkMode, toggleSidebar, toggleDarkMode } = useContext(UIContext);

  return (
    <div className="fixed min-w-full bg-background">
      <nav className="container flex items-center justify-between py-3">
        <div>
          <WMIcon className="h-auto w-12" isDark={isDarkMode} />
        </div>

        <div className="hidden items-center justify-center gap-2 md:flex lg:ml-52">
          {["About", "Skills", "Projects", "Contact Me"].map((opt) => (
            <Button size="sm" className="text-md" variant="ghost" key={opt}>
              {opt}
            </Button>
          ))}
        </div>

        <div>
          <SocialIcons className="hidden md:flex" />

          <button className="hidden md:flex" onClick={toggleDarkMode}>
            toggle
          </button>

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
