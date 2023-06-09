import { type FC, type PropsWithChildren } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./";
import Image from "next/image";
import { BoxArrowUp } from "../icons";
import { type SkillData } from "~/data";

export const SkillDialog: FC<PropsWithChildren<SkillData>> = ({
  title,
  iconPath,
  url,
  description,
  needInvertColor,
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className={`relative aspect-square w-6/12 ${
              needInvertColor ? "dark:invert" : ""
            }`}
          >
            <Image src={iconPath} alt={title} fill />
          </div>

          <DialogHeader>
            <DialogTitle className="text-start text-4xl">{title}</DialogTitle>
            <DialogDescription className="text-start">
              {description}
            </DialogDescription>
          </DialogHeader>

          <a
            href={url}
            target="_blank"
            className="flex items-center self-end transition-transform active:scale-90 "
          >
            <Button size="sm">
              Learn more <BoxArrowUp className="mb-1 ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
