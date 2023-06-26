import { Roboto_Mono } from "next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
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
      <Head>
        <link
          rel="icon"
          media="(prefers-color-scheme: dark)"
          href="/icons/wm-dark.svg"
        />
        <link
          rel="icon"
          media="(prefers-color-scheme: light)"
          href="/icons/wm-light.svg"
        />
      </Head>

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
