import { Roboto_Mono } from "next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { UIProvider } from "~/context/ui";
import { ThemeProvider } from "next-themes";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <UIProvider>
          <main className={`${roboto_mono.variable}`}>
            <Component {...pageProps} />
          </main>
        </UIProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
