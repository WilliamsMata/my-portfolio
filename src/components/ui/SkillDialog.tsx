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

export const SkillDialog: FC<SkillData & PropsWithChildren> = ({
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

      <DialogContent className="top-2/4 -translate-y-1/2 sm:top-auto sm:mt-auto sm:max-w-[425px] sm:translate-y-0">
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
              See more <BoxArrowUp className="mb-1 ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
