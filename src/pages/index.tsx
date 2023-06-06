import { type NextPage } from "next";
import { Button } from "~/components/ui";
import { Layout } from "~/layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-4 sm:flex-row md:gap-8">
        <div className="aspect-square w-full bg-blue-900 sm:hidden md:block md:w-6/12">
          IMG
        </div>

        <div className="flex flex-col justify-center gap-4 text-center md:w-6/12 md:text-start">
          <h1 className="text-4xl font-semibold tracking-wide sm:text-7xl md:text-5xl lg:text-7xl">
            Williams Mata
            <br />
            Full Stack Developer
          </h1>

          <h4 className="text-sm tracking-wide sm:text-base">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </h4>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Button className="sm:text-base" size="lg">
              Resume x
            </Button>

            <a href="" className="underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
