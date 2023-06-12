import type { FC } from "react";
import { type Project } from "~/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from "./";
import Image from "next/image";
import { GithubIcon } from "lucide-react";

export const ProjectCard: FC<Project> = ({
  title,
  description,
  githubUrl,
  imagePath,
  projectUrl,
  projectTech,
}) => (
  <Card className="relative w-full overflow-hidden rounded-lg sm:h-[calc(100vh-10rem)]">
    <div className="relative aspect-video w-full">
      <a href={projectUrl} target="_blank">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 active:scale-100"
        />
      </a>
    </div>

    <div className="flex flex-wrap justify-center gap-2 px-6 pt-4">
      {projectTech.map((tech) => (
        <Badge
          key={tech.title}
          className="hover:"
          style={{ backgroundColor: tech.color }}
        >
          {tech.title}
        </Badge>
      ))}
    </div>

    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>

    <CardContent className="pb-16 sm:pb-2">
      <CardDescription>{description}</CardDescription>
    </CardContent>

    <div className="absolute bottom-4 right-4 flex justify-end self-end">
      <a href={githubUrl} target="_blank">
        <Button
          size="sm"
          className="rounded-full transition-transform active:scale-90"
        >
          <GithubIcon /> Code
        </Button>
      </a>
    </div>
  </Card>
);
