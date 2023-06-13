import { Card, CardDescription, SocialIcons } from "./ui";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <Card className="rounded-b-none rounded-t-3xl py-4">
        <div className="container flex flex-col items-center sm:flex-row">
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
            <CardDescription className="text-xl">
              © 2023 - Made by Williams Mata
            </CardDescription>

            <CardDescription className="font-bold text-primary">
              📧 Email:{" "}
              <a
                href="mailto:wm.dev.ts@gmail.com"
                target="_blank"
                className="font-light"
              >
                wm.dev.ts@gmail.com
              </a>
            </CardDescription>

            <CardDescription className="flex-grow font-bold text-primary">
              🗺 Location:{" "}
              <span className="font-light">
                Nueva Esparta. Isla de Margarita. Venezuela
              </span>
            </CardDescription>
          </div>

          <div className="mt-4 flex w-full items-end justify-end sm:mt-0 sm:self-end md:w-auto">
            <SocialIcons />
          </div>
        </div>
      </Card>
    </footer>
  );
};
