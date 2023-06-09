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
import { SendIcon } from "lucide-react";
import Image from "next/image";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const AboutMe: FC<Props> = (props) => {
  return (
    <section {...props}>
      <div className="flex items-center justify-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-semibold text-transparent">
          About Me
        </h2>
      </div>

      <Card className="mt-2 flex flex-wrap">
        <CardHeader className="w-full md:w-6/12 xl:w-4/12">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/browser_icon_4.svg"
              alt="this is me"
              fill
              className="rounded-lg object-contain"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
            />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 md:w-6/12 md:pt-6 xl:w-8/12 xl:flex-row">
          <div className="xl:w-6/12">
            <Badge className="bg-violet-700 text-white hover:bg-violet-700">
              StoryTime
            </Badge>
            <CardTitle className="mt-2 text-2xl">Who am i?... 🤔</CardTitle>

            <h3>
              Hi!! My name is Williams Mata Rojas, frontEnd and backend
              developer 👨‍💻, I love coding and I really think it&apos;s the best
              profession I could have chosen.
            </h3>

            <CardDescription className="mt-2">
              Ever since I can remember, I wanted to be a pilot 👨‍✈️, which I
              studied for a while but couldn&apos;t pursue. I have always been
              interested in the future and I am a technology lover, which led me
              to programming 💻. I started by studying the basics of HTML, CSS,
              and JavaScript and I love creating things with them.
            </CardDescription>
            <CardDescription className="mt-2">
              I have worked on a few projects and then moved on to React, which
              I currently handle very well with NextJS ⚛. I learned a lot about
              backend development,starting with expressJS and then advancing to
              NestJS. I enjoy writing TypeScript as typing is crucial in any
              project.
            </CardDescription>
          </div>

          <div>
            <CardTitle className="text-2xl">Contact Me:</CardTitle>
            <CardDescription>
              You can send me a message I will gladly answer 💬
            </CardDescription>

            <form
              target="_blank"
              action="https://formsubmit.co/williams.rm99@gmail.com"
              method="POST"
              className="mt-4 flex w-full flex-col gap-2"
            >
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name."
                  name="Name"
                  required
                  className="focus-visible:ring-violet-700"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email:</Label>
                <Input
                  required
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Your email."
                  className="focus-visible:ring-violet-700"
                />
              </div>

              <div className="flex items-end gap-2">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Your message:</Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    name="message"
                    className="resize-y overflow-auto focus-visible:ring-violet-700"
                  />
                </div>
                <Button
                  className="aspect-square rounded-full p-2 transition-all focus-visible:ring-violet-700 active:scale-90 active:bg-violet-600"
                  variant="ghost"
                  type="submit"
                  title="Send message"
                >
                  <SendIcon className="h-full w-full" />
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
