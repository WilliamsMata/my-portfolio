import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { projects } from "~/data";
import { ProjectCard } from "../ui";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Projects: FC<Props> = (props) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-semibold text-transparent">
          My Projects
        </h2>
      </div>

      <div className="mt-4 flex flex-wrap">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-2 sm:w-6/12 lg:w-4/12 xl:w-3/12"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
