import { type NextPage } from "next";
import Image from "next/image";
import { BoxArrowUp } from "~/components/icons";
import { Button } from "~/components/ui";
import { Layout } from "~/layouts";

import intjImage from "../../public/images/intj.png";
import { useContext } from "react";
import { UIContext } from "~/context/ui";

const Home: NextPage = () => {
  const { isDarkMode } = useContext(UIContext);

  return (
    <Layout>
      <section className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 sm:flex-row md:gap-8">
        <div className="aspect-square w-full rounded-3xl bg-blue-900 sm:hidden md:block md:w-6/12"></div>

        <div className="flex flex-col justify-center gap-4 text-center md:w-6/12 md:text-start">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-semibold text-transparent sm:text-7xl md:text-5xl lg:text-6xl">
            Williams Mata R.
            <br />
            Full Stack Developer
          </h1>

          <h4 className="text-sm tracking-wide sm:text-base">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects,
            showcasing my expertise in React.js and web development.
          </h4>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Button
              className="flex items-center tracking-wide sm:text-base"
              size="lg"
            >
              Resume{" "}
              <BoxArrowUp className="mb-1 ml-1 h-4 w-4" isDark={isDarkMode} />
            </Button>

            <a href="" className="tracking-wide underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>

        <Image
          src={intjImage}
          alt="intj-person"
          className="absolute bottom-4 right-8 -z-10 hidden w-52 sm:block"
        />
      </section>
    </Layout>
  );
};

export default Home;
