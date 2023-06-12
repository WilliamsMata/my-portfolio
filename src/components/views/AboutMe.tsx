import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const AboutMe: FC<Props> = (props) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-semibold text-transparent">
          About Me
        </h2>
      </div>

      <Card className="mt-2">
        <CardHeader className="flex flex-wrap">
          <div className="aspect-square w-full rounded-lg bg-blue-700"></div>
        </CardHeader>

        <CardContent>
          <Badge className="bg-violet-500">StoryTime</Badge>
          <CardTitle>
            <h2 className="my-2 text-2xl">Who am i?... 🤔</h2>
          </CardTitle>

          <CardDescription>
            <h4>
              Hi!! My name is Williams Mata Rojas, frontEnd and backend
              development 👨‍💻, i love coding and i really think it&apos;s the
              best profession I could have chosen.
            </h4>
            <br />
            <h5>
              Ever since I can remember, I wanted to be a pilot 👨‍✈️, which I
              studied for a while but couldn&apos;t pursue. I have always been
              interested in the future and I am a technology lover, which led me
              to programming 💻. I started by studying the basics of HTML, CSS,
              and JavaScript and I love creating things with them.
            </h5>
            <br />
            <h5>
              I have worked on a few projects and then moved on to React, which
              I currently handle very well with NextJS ⚛. I learned a lot about
              backend development,starting with expressJS and then advancing to
              NestJS. I enjoy writing TypeScript as typing is crucial in any
              project.
            </h5>
          </CardDescription>

          <CardTitle>
            <h2 className="my-2 text-2xl">Contact Me:</h2>
          </CardTitle>

          <form
            target="_blank"
            action="https://formsubmit.co/williams.rm99@gmail.com"
            method="POST"
          >
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
