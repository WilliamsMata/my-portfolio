import { useContext, type FC } from "react";
import { Button, SocialIcons } from "./ui";
import { UIContext } from "~/context/ui";
import { WM } from "./icons";

export const Navbar: FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <div className="fixed min-w-full bg-background">
      <nav className="container flex items-center justify-between py-2">
        <div>
          <WM className="h-12 w-12" />
        </div>

        <div className="hidden items-center justify-center gap-2 md:flex lg:ml-28">
          {["About", "Skills", "Projects", "Contact Me"].map((opt) => (
            <Button size="sm" className="text-md" variant="ghost" key={opt}>
              {opt}
            </Button>
          ))}
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
