import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
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
              development 👨‍💻, I love coding and I really think it&apos;s the
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
        </CardContent>

        <CardContent>
          <CardTitle>
            <h2 className="text-2xl">Contact Me:</h2>
          </CardTitle>
          <CardDescription>
            You can send me a message I will gladly answer 💬
          </CardDescription>

          <form
            target="_blank"
            action="https://formsubmit.co/williams.rm99@gmail.com"
            method="POST"
            className="mt-4 flex flex-col gap-2"
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Name:</Label>
              <Input
                type="text"
                id="name"
                placeholder="Your name"
                name="Name"
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email:</Label>
              <Input
                required
                type="email"
                id="email"
                name="Email"
                placeholder="Your email"
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
              />
            </div>
            <Button className="w-full self-center" type="submit">
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
