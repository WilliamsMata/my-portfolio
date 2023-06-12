import { Card, CardDescription, SocialIcons } from "./ui";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <Card className="rounded-b-none rounded-t-3xl py-4">
        <div className="container flex flex-col items-center sm:flex-row">
          <CardDescription className="flex w-full flex-col gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl">© 2023 - Made by Williams Mata</h3>
            </div>

            <div>
              <h3 className="font-bold text-primary">📧 Email:</h3>
              <a href="mailto:wm.dev.ts@gmail.com" target="_blank">
                wm.dev.ts@gmail.com
              </a>
            </div>

            <div className="flex-grow">
              <h3 className="font-bold text-primary">🗺 Location:</h3>
              <h4>Nueva Esparta. Isla de Margarita. Venezuela 🇻🇪</h4>
            </div>
          </CardDescription>

          <div className="mt-4 flex w-full items-end justify-end sm:mt-0 sm:self-end md:w-auto">
            <SocialIcons />
          </div>
        </div>
      </Card>
    </footer>
  );
};
