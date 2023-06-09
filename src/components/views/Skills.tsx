import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui";
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
  {
    title: "Tailwind",
    iconPath: "/icons/tailwind.svg",
  },
  {
    title: "MUI",
    iconPath: "/icons/mui.svg",
  },
];

const tools = [
  {
    title: "Docker",
    iconPath: "/icons/docker.svg",
  },
  {
    title: "Firebase",
    iconPath: "/icons/firebase.svg",
  },
  {
    title: "Git",
    iconPath: "/icons/git.svg",
  },
  {
    title: "Graphql",
    iconPath: "/icons/graphql.svg",
  },
  {
    title: "Jest",
    iconPath: "/icons/jest.svg",
  },
  {
    title: "MongoDB",
    iconPath: "/icons/mongo.svg",
  },
  {
    title: "MySQL",
    iconPath: "/icons/mysql.svg",
  },
  {
    title: "Prisma",
    iconPath: "/icons/prisma.svg",
  },
  {
    title: "React Router",
    iconPath: "/icons/react-router.svg",
  },
  {
    title: "Redux",
    iconPath: "/icons/redux.svg",
  },
  {
    title: "React Query",
    iconPath: "/icons/tanstack-query.svg",
  },
  {
    title: "tRPC",
    iconPath: "/icons/trpc.svg",
  },
];

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
        <Tabs defaultValue="languages" className="w-full justify-center">
          <div className="flex justify-center">
            <TabsList className="">
              <TabsTrigger className="text-md" value="languages">
                Languages
              </TabsTrigger>
              <TabsTrigger className="text-md" value="frameworks">
                Frameworks
              </TabsTrigger>
              <TabsTrigger className="text-md" value="tools">
                Tools
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="languages">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Languages</CardTitle>
              </CardHeader>
              <CardContent className="fadeIn flex flex-wrap items-center justify-center">
                {languages.map(({ title, iconPath }) => (
                  <div
                    className="w-6/12 p-2 sm:w-4/12 md:w-3/12 lg:w-2/12 "
                    key={iconPath}
                  >
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
          </TabsContent>

          <TabsContent value="frameworks">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="fadeIn flex flex-wrap items-center justify-center">
                {frameworks.map(({ title, iconPath }) => (
                  <div
                    className="w-6/12 p-2 sm:w-4/12 md:w-3/12 lg:w-2/12 "
                    key={iconPath}
                  >
                    <div
                      className={`relative aspect-square w-full ${
                        title === "Express" || title === "Next"
                          ? "dark:invert"
                          : ""
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
          </TabsContent>

          <TabsContent value="tools">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tools</CardTitle>
              </CardHeader>
              <CardContent className="fadeIn flex flex-wrap items-center justify-center">
                {tools.map(({ title, iconPath }) => (
                  <div
                    className="w-6/12 p-2 sm:w-4/12 md:w-3/12 lg:w-2/12 "
                    key={iconPath}
                  >
                    <div
                      className={`relative aspect-square w-full ${
                        title === "MySQL" || title === "Prisma"
                          ? "dark:invert"
                          : ""
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
