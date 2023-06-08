import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import Image from "next/image";

const languages = [
  {
    title: "HTML",
    iconPath: "/icons/html5.svg",
  },
  {
    title: "CSS",
    iconPath: "/icons/css.svg",
  },
  {
    title: "JavaScript",
    iconPath: "/icons/javascript.svg",
  },
  {
    title: "TypeScript",
    iconPath: "/icons/typescript.svg",
  },
  {
    title: "SQL",
    iconPath: "/icons/sql.svg",
  },
];

const frameworks = [
  {
    title: "Tailwind",
    iconPath: "/icons/tailwind.svg",
  },
  {
    title: "MUI",
    iconPath: "/icons/mui.svg",
  },
  {
    title: "React",
    iconPath: "/icons/react.svg",
  },
  {
    title: "Next",
    iconPath: "/icons/next.svg",
  },
  {
    title: "Solid",
    iconPath: "/icons/solid.svg",
  },
  {
    title: "Astro",
    iconPath: "/icons/astro.svg",
  },
  {
    title: "Nest",
    iconPath: "/icons/nest.svg",
  },
  {
    title: "Express",
    iconPath: "/icons/express.svg",
  },
];

// const tools = [
//   {
//     title: "Prisma",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },
//   {
//     title: "Express",
//     iconPath: "/icons/express.svg",
//   },

// ]

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Skills: FC<Props> = (props) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-4xl font-semibold text-transparent">
          My Skills
        </h2>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-4">
            {languages.map(({ title, iconPath }) => (
              <div className="w-[calc(50%-1rem)]" key={iconPath}>
                <div className="relative aspect-square w-full">
                  <Image src={iconPath} alt="title" fill />
                </div>
                <h3 className="mt-2 text-center text-lg font-semibold">
                  {title}
                </h3>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Frameworks</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-4">
            {frameworks.map(({ title, iconPath }) => (
              <div className="w-[calc(50%-1rem)]" key={iconPath}>
                <div
                  className={`relative aspect-square w-full ${
                    title === "Express" || title === "Next" ? "dark:invert" : ""
                  }`}
                >
                  <Image src={iconPath} alt="title" fill />
                </div>
                <h3 className="mt-2 text-center text-lg font-semibold">
                  {title}
                </h3>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
