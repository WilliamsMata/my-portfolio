import { useContext } from "react";
import { Button, Sheet, SheetContent, SocialIcons } from "./ui";
import { UIContext } from "~/context/ui";

export const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen } = useContext(UIContext);

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent position="right" className="w-64">
        <div className="mt-2 flex h-full flex-col items-center justify-between pt-12">
          <div className="flex w-full flex-col gap-2">
            {["About", "Skills", "Projects", "Contact Me"].map((opt) => (
              <Button
                size="lg"
                className="w-full text-xl"
                variant="ghost"
                key={opt}
              >
                {opt}
              </Button>
            ))}
          </div>

          <SocialIcons />
        </div>
      </SheetContent>
    </Sheet>
  );
};
