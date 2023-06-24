import type { PropsWithChildren, FC } from "react";
import Head from "next/head";
import { Footer, Navbar, Sidebar } from "~/components";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
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
          media="(prefers-color-scheme: dark)"
          href="/icons/wm-dark.svg"
        />
        <link
          rel="icon"
          media="(prefers-color-scheme: light)"
          href="/icons/wm-light.svg"
        />
      </Head>

      <Navbar />

      <Sidebar />

      <div>{children}</div>

      <Footer />
    </>
  );
};
