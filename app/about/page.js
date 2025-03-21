import About from "../_components/About";
import Github from "../_components/Github";
import Skills from "../_components/Skills";
import Tools from "../_components/Tools";

export const metadata = {
  title: "About",
};
function page() {
  return (
    <div className="flex flex-col gap-10 my-12 sm:my-18 lg:my-24">
      <section className="space-y-4 md:hidden">
        <h1 className="text-2xl md:text-3xl xl:text-4xl w-fit rounded-sm font-bold border-b-4 text-accent">
          About Me
        </h1>
        <About />
      </section>
      <section className="space-y-4 hidden md:block">
        <p className="md:text-2xl xl:text-3xl">
          Welcome to a snapshot of my professional world! Here, you&apos;ll find a
          showcase of my technical skills and the tools and technologies that fuel
          my work every day. 
        </p>
      </section>
      <Skills />
      <Tools />
      <div className="space-y-8">
        <h1 className="text-2xl md:text-3xl xl:text-4xl text-accent w-fit border-b-4 rounded-sm font-bold">
          Days I code
        </h1>
        <div className="flex items-center justify-center">
          <Github />
        </div>
      </div>
    </div>
  );
}

export default page;
