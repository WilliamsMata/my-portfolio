import { type NextPage } from "next";
import { AboutMe, Main, Projects, Skills } from "~/components/views";
import { Layout } from "~/layouts";
import { useEffect } from "react";
import { helloInConsole } from "~/helpers";

const Home: NextPage = () => {
  useEffect(() => {
    helloInConsole();
  }, []);

  return (
    <Layout>
      <Main
        id="wm"
        className="container relative flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center gap-4 pb-2 sm:flex-row md:gap-8"
      />

      <Skills id="skills" className="container pt-20" />

      <Projects id="projects" className="container pt-20" />

      <AboutMe id="about-me" className="container pt-20" />
    </Layout>
  );
};

export default Home;
