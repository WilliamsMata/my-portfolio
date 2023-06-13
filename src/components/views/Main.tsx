import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";
import { BoxArrowUp } from "../icons";
import { Button } from "../ui";

import intjImage from "../../../public/images/intj.png";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Main: FC<Props> = (props) => {
  return (
    <section {...props}>
      <div className="aspect-square w-full rounded-3xl bg-blue-900 sm:hidden md:block md:w-6/12"></div>

      <div className="flex flex-col justify-center gap-4 text-center md:w-6/12 md:text-start">
        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-semibold text-transparent sm:text-7xl md:text-5xl lg:text-6xl">
          Williams Mata R.
          <br />
          Full Stack Developer
        </h1>

        <h4 className="text-sm tracking-wide sm:text-base">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects,
          showcasing my expertise in React.js and web development.
        </h4>

        <div className="flex items-center justify-center gap-4 md:justify-start">
          <Button
            className="flex items-center tracking-wide transition-transform active:scale-90 sm:text-base"
            size="lg"
            type="button"
          >
            Resume <BoxArrowUp className="mb-1 ml-2 h-4 w-4" />
          </Button>

          <a
            href="mailto:wm.dev.ts@gmail.com"
            target="_blank"
            className="tracking-wide underline underline-offset-4"
          >
            Contact
          </a>
        </div>
      </div>

      <Image
        src={intjImage}
        alt="intj-person"
        className="absolute bottom-4 right-8 -z-10 hidden w-52 sm:block"
      />
    </section>
  );
};
