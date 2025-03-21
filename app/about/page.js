import About from "../_components/About";

function page() {
  return (
    <div className="space-y-4 my-24">
      <h1 className="text-2xl md:text-3xl xl:text-4xl text-accent w-fit border-b-4 rounded-sm font-bold">
        About Me
      </h1>
      <About />
    </div>
  );
}

export default page;
