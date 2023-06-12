import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  SkillDialog,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui";
import Image from "next/image";
import { skills } from "~/data";

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
            <TabsList>
              {skills.map(({ title }) => (
                <TabsTrigger
                  className="text-md"
                  value={title.toLowerCase()}
                  key={title}
                >
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skills.map(({ title, skillsData }) => (
            <TabsContent value={title.toLowerCase()} key={title}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="fadeIn flex flex-wrap items-center justify-center">
                  {skillsData.map((data) => (
                    <div
                      className="w-6/12 cursor-pointer rounded-xl p-4 transition-all hover:p-2 hover:shadow-xl active:scale-90 hover:dark:bg-background/75 hover:dark:shadow-2xl hover:dark:shadow-purple-600 sm:w-4/12 md:w-3/12 md:p-6 md:hover:p-4 lg:w-2/12"
                      key={data.iconPath}
                    >
                      <SkillDialog {...data}>
                        <div>
                          <div
                            className={`relative aspect-square w-full ${
                              data.needInvertColor ? "dark:invert" : ""
                            }`}
                          >
                            <Image src={data.iconPath} alt={title} fill />
                          </div>
                          <h3 className="mt-2 text-center text-lg font-semibold">
                            {data.title}
                          </h3>
                        </div>
                      </SkillDialog>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
