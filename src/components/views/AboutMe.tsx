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
              Hi! I&apos;m Williams Mata Rojas, full stack developer passionate
              about technology and programming 👨‍💻. I firmly believe that
              programming is the best profession I could have chosen, and
              it&apos;s a pleasure to be able to use my skills to create things
              that bring value to the world.
            </h3>

            <CardDescription className="mt-2">
              Since I was a kid, I dreamed of being a pilot 👨‍✈️ and although I
              studied that career for a while, life took me down a different
              path. My fascination with technology and the future led me towards
              the fascinating world of programming 💻. I started my journey
              learning the basics of HTML, CSS and JavaScript, and since then,
              I&apos;ve enjoyed every moment I spend creating with them.
            </CardDescription>
            <CardDescription className="mt-2">
              Throughout my career, I&apos;ve worked on various projects, which
              has allowed me to gain extensive experience and constantly improve
              my skills. My path led me to React and NextJS ⚛, tools that I
              currently feel very comfortable with and that allow me to develop
              high quality applications.
            </CardDescription>
            <CardDescription className="mt-2">
              In addition, I&apos;ve had the opportunity to learn a lot about
              backend development, starting with ExpressJS and moving towards
              NestJS. I enjoy writing in TypeScript, as I consider typing to be
              crucial to keep a project organized and efficient.
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
