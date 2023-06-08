import { Roboto_Mono } from "next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { UIProvider } from "~/context/ui";
import Head from "next/head";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <UIProvider>
        <main className={`${roboto_mono.variable}`}>
          <Component {...pageProps} />
        </main>
      </UIProvider>
    </>
  );
};

export default MyApp;
