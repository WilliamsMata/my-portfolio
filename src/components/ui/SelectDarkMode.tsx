import { type DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from ".";
import { Laptop, MoonIcon, SunIcon } from "lucide-react";

interface Props extends DropdownMenuTriggerProps {
  onModeChange: (newValue: boolean) => void;
  onSystemClick?: () => void;
  align?: "center" | "start" | "end";
}

export const SelectDarkMode: React.FC<Props> = ({
  onModeChange,
  onSystemClick,
  align,
  ...props
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild {...props}>
        <Button variant="ghost" aria-label="Select theme">
          <MoonIcon className="hidden h-auto w-full transition-all dark:flex" />
          <SunIcon className="flex h-auto w-full transition-all dark:hidden" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={align || "center"}>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onModeChange(false)}>
          <SunIcon className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onModeChange(true)}>
          <MoonIcon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => !!onSystemClick && onSystemClick()}>
          <Laptop className="mr-2 h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
