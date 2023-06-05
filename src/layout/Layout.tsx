import type { PropsWithChildren, FC } from "react";
import Head from "next/head";
import { Navbar, Sidebar } from "~/components";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Williams Mata Portfolio</title>
        <meta
          name="description"
          content="Welcome to the web development portfolio of Williams Mata. I am a skilled frontend and backend developer with experience creating modern, dynamic websites. Explore my portfolio to see some of the projects I have worked on and get in touch if you are interested in collaborating on a project together."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Sidebar />

      <section className="py-12">{children}</section>
    </>
  );
};
