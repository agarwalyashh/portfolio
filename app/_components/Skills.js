import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { SiPytorch, SiLangchain } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandMysql } from "react-icons/tb";
import { DiNodejsSmall } from "react-icons/di";

const techSkills = [
  {
    component: <FaJava className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />,
    name: "Java",
  },
  {
    component: (
      <FaReact className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "React",
  },
  {
    component: (
      <FaGitAlt className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "Git",
  },
  {
    component: (
      <SiPytorch className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "PyTorch",
  },
  {
    component: (
      <TbBrandNextjs className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "NextJS",
  },
  {
    component: (
      <BiLogoTailwindCss className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "Tailwind CSS",
  },
  {
    component: (
      <BiLogoMongodb className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "MongoDB",
  },
  {
    component: (
      <SiLangchain className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "Langchain",
  },
  {
    component: (
      <AiOutlinePython className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "Python",
  },
  {
    component: (
      <TbBrandMysql className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "MySQL",
  },
  {
    component: (
      <DiNodejsSmall className="lg:h-25 md:h-18 h-14 lg:w-25 md:w-18 w-14" />
    ),
    name: "NodeJS",
  },
];

function Skills() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl xl:text-4xl text-accent w-fit border-b-4 rounded-sm font-bold">
        Skills
      </h1>
      <ul className="flex md:gap-10 gap-6 flex-wrap items-center justify-center">
        {techSkills.map((skill) => (
          <li
            key={skill.name}
            className="border-2 border-accent rounded-md p-4 relative group cursor-pointer"
          >
            <span className="group-hover:scale-[0.75] group-hover:opacity-20 transition-all duration-1000 group-hover:blur-[1px]">{skill.component}</span>
            <p className="absolute inset-0 flex items-center justify-center text-sm sm:text-lg whitespace-nowrap scale-10 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000">
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
