import { Roboto_Mono } from "next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { UIProvider } from "~/context/ui";
import "~/styles/globals.css";

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
