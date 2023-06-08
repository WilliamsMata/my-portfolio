import { useContext, type FC } from "react";
import { Button, SelectDarkMode, Separator, SocialIcons } from "./ui";
import { UIContext } from "~/context/ui";
import { WMIcon } from "./icons";

export const Navbar: FC = () => {
  const { toggleSidebar, setMode } = useContext(UIContext);

  return (
    <div className="sticky top-0 z-10 min-w-full border-b-[1px] border-border bg-background/75 backdrop-blur">
      <nav className="container flex items-center justify-between py-2">
        <a href="#wm">
          <WMIcon className="h-auto w-16" />
        </a>

        <div className="hidden items-center justify-center gap-2 md:flex lg:ml-64">
          {["Skills", "Projects", "Contact Me"].map((opt) => (
            <Button
              size="sm"
              className="text-md"
              variant="ghost"
              key={opt}
              asChild
            >
              <a href={`#${opt.toLowerCase()}`}>{opt}</a>
            </Button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <SocialIcons className="mr-2 hidden md:flex" />

          <Separator orientation="vertical" className="hidden h-10 md:block" />

          <SelectDarkMode
            onModeChange={setMode}
            className="w-10 p-2 md:hidden"
          />

          <SelectDarkMode
            onModeChange={setMode}
            className="hidden w-10 p-2 md:block"
            align="end"
          />

          <Button
            type="button"
            color="black"
            size="sm"
            variant="ghost"
            className="ml-0 md:hidden"
            onClick={toggleSidebar}
          >
            <span className="font-bold">Menu</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};
