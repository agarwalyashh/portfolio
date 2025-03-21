import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Socials() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-2xl">Connect with me</h1>
      <ul className="flex gap-6">
        <li className="hover:border-accent-hover border rounded-full group cursor-pointer">
          <a href="https://github.com/agarwalyashh" target="_blank">
            <Github className="sm:m-2 m-1 group-hover:text-accent-hover group-hover:scale-[1.15]" />
          </a>
        </li>
        <li className="hover:border-accent-hover border rounded-full group cursor-pointer">
          <a
            href="https://www.linkedin.com/in/agarwalyashh2004/"
            target="_blank"
          >
            <Linkedin className="sm:m-2 m-1 group-hover:text-accent-hover group-hover:scale-[1.15]" />
          </a>
        </li>
        <li className="hover:border-accent-hover border rounded-full group cursor-pointer">
          <a href="mailto:agarwalyashhh004@gmail.com" target="_blank">
            <Mail className="sm:m-2 m-1 group-hover:text-accent-hover group-hover:scale-[1.15]" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
