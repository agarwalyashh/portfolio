import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea, SiJupyter, SiPostman } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";

const tools = [
  {
    component: (
      <VscVscode className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "VS Code",
  },
  {
    component: (
      <SiIntellijidea className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "IntelliJ",
  },
  {
    component: (
      <SiJupyter className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "Jupyter",
  },
  {
    component: (
      <SiPostman className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "PostMan",
  },
  {
    component: (
      <IoLogoTableau className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "Tableau",
  },
];
function Tools() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl xl:text-4xl text-accent w-fit border-b-4 rounded-sm font-bold">
        Tools I Use
      </h1>
      <ul className="flex md:gap-10 gap-6 flex-wrap items-center justify-center">
        {tools.map((tool) => (
          <li
            key={tool.name}
            className="border-2 border-accent rounded-md p-4 relative group cursor-pointer"
          >
            <span className="group-hover:scale-[0.75] group-hover:opacity-20 transition-all duration-1000 group-hover:blur-[1px]">
              {tool.component}
            </span>
            <p className="absolute inset-0 flex items-center justify-center text-sm sm:text-lg whitespace-nowrap scale-10 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000">
              {tool.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tools;
