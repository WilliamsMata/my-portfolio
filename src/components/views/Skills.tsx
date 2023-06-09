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
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML",
  },
  {
    title: "CSS",
    iconPath: "/icons/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    iconPath: "/icons/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    title: "TypeScript",
    iconPath: "/icons/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    title: "SQL",
    iconPath: "/icons/sql.svg",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
];

const frameworks = [
  {
    title: "React",
    iconPath: "/icons/react.svg",
    url: "https://react.dev/",
  },
  {
    title: "Next",
    iconPath: "/icons/next.svg",
    url: "https://nextjs.org/",
  },
  {
    title: "Solid",
    iconPath: "/icons/solid.svg",
    url: "https://www.solidjs.com/",
  },
  {
    title: "Astro",
    iconPath: "/icons/astro.svg",
    url: "https://astro.build/",
  },
  {
    title: "Nest",
    iconPath: "/icons/nest.svg",
    url: "https://nestjs.com/",
  },
  {
    title: "Express",
    iconPath: "/icons/express.svg",
    url: "https://expressjs.com/",
  },
  {
    title: "Tailwind",
    iconPath: "/icons/tailwind.svg",
    url: "https://tailwindcss.com/",
  },
  {
    title: "MUI",
    iconPath: "/icons/mui.svg",
    url: "https://mui.com/",
  },
];

const tools = [
  {
    title: "Docker",
    iconPath: "/icons/docker.svg",
    url: "https://www.docker.com/",
  },
  {
    title: "Firebase",
    iconPath: "/icons/firebase.svg",
    url: "https://firebase.google.com/",
  },
  {
    title: "Git",
    iconPath: "/icons/git.svg",
    url: "https://git-scm.com/",
  },
  {
    title: "Graphql",
    iconPath: "/icons/graphql.svg",
    url: "https://graphql.org/",
  },
  {
    title: "Jest",
    iconPath: "/icons/jest.svg",
    url: "https://jestjs.io/",
  },
  {
    title: "MongoDB",
    iconPath: "/icons/mongo.svg",
    url: "https://www.mongodb.com/",
  },
  {
    title: "MySQL",
    iconPath: "/icons/mysql.svg",
    url: "https://www.mysql.com/",
  },
  {
    title: "Prisma",
    iconPath: "/icons/prisma.svg",
    url: "https://www.prisma.io/",
  },
  {
    title: "React Router",
    iconPath: "/icons/react-router.svg",
    url: "https://reactrouter.com/en/main",
  },
  {
    title: "Redux",
    iconPath: "/icons/redux.svg",
    url: "https://redux.js.org/",
  },
  {
    title: "TanStack Query",
    iconPath: "/icons/tanstack-query.svg",
    url: "https://tanstack.com/query/latest",
  },
  {
    title: "tRPC",
    iconPath: "/icons/trpc.svg",
    url: "https://trpc.io/",
  },
];

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Skills: FC<Props> = (props) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-semibold text-transparent">
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
                {languages.map(({ title, iconPath, url }) => (
                  <div
                    className="w-6/12 cursor-pointer rounded-xl p-4 transition-all hover:p-2 hover:shadow-2xl hover:dark:bg-background/75 hover:dark:shadow-2xl hover:dark:shadow-purple-600 sm:w-4/12 md:w-3/12 md:p-6 md:hover:p-4 lg:w-2/12"
                    key={iconPath}
                  >
                    <a href={url} target="_blank">
                      <div className="relative aspect-square w-full">
                        <Image src={iconPath} alt="title" fill />
                      </div>
                      <h3 className="mt-2 text-center text-lg font-semibold">
                        {title}
                      </h3>
                    </a>
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
                {frameworks.map(({ title, iconPath, url }) => (
                  <div
                    className="w-6/12 cursor-pointer rounded-xl p-4 transition-all hover:p-2 hover:shadow-2xl hover:dark:bg-background/75 hover:dark:shadow-2xl hover:dark:shadow-purple-600 sm:w-4/12 md:w-3/12 md:p-6 md:hover:p-4 lg:w-2/12 "
                    key={iconPath}
                  >
                    <a href={url} target="_blank">
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
                    </a>
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
                {tools.map(({ title, iconPath, url }) => (
                  <div
                    className="w-6/12 cursor-pointer rounded-xl p-4 transition-all hover:p-2 hover:shadow-2xl hover:dark:bg-background/75 hover:dark:shadow-2xl hover:dark:shadow-purple-600 sm:w-4/12 md:w-3/12 md:p-6 md:hover:p-4 lg:w-2/12 "
                    key={iconPath}
                  >
                    <a href={url} target="_blank">
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
                    </a>
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
