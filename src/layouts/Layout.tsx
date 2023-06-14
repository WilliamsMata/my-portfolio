import { type PropsWithChildren, type FC, useState, useEffect } from "react";
import Head from "next/head";
import { Footer, Navbar, Sidebar } from "~/components";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isSchemaDark, setIsSchemaDark] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSchemaDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Williams Mata</title>
        <meta property="og:title" content="Williams Mata portfolio" />
        <meta
          name="description"
          content="Welcome to the web development portfolio of Williams Mata. I am a skilled frontend and backend developer with experience creating modern, dynamic websites. Explore my portfolio to see some of the projects I have worked on and get in touch if you are interested in collaborating on a project together."
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/z6D9tGS/my-logo.png"
        />

        <link
          rel="icon"
          href={`/icons/wm-${isSchemaDark ? "dark" : "light"}.svg`}
        />
      </Head>

      <Navbar />

      <Sidebar />

      <div>{children}</div>

      <Footer />
    </>
  );
};
