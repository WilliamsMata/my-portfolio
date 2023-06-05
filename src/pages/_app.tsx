import { Inter, Roboto_Mono } from "next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { UIProvider } from "~/context/ui";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UIProvider>
      <main className={`${inter.variable} ${roboto_mono.variable}`}>
        <Component {...pageProps} />
      </main>
    </UIProvider>
  );
};

export default MyApp;
