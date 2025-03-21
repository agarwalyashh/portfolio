import About from "../_components/About";
import Skills from "../_components/Skills";
import Tools from "../_components/Tools";

function page() {
  return (
    <div className="flex flex-col gap-10 my-12 sm:my-18 lg:my-24">
      <section className="space-y-4">
        <h1 className="text-2xl md:text-3xl xl:text-4xl w-fit rounded-sm font-bold border-b-4 text-accent">
          About Me
        </h1>
        <About />
      </section>
      <Skills />
      <Tools/>
    </div>
  );
}

export default page;
