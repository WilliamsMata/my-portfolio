import { type NextPage } from "next";
import { Main, Skills } from "~/components/views";
import { Layout } from "~/layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <Main
        id="wm"
        className="container relative flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center gap-4 pb-2 sm:flex-row md:gap-8"
      />

      <Skills id="skills" className="container min-h-screen pt-20" />
    </Layout>
  );
};

export default Home;
