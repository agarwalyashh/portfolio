import { PiGithubLogoBold } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import React from "react";

function Socials() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-3xl xl:text-4xl font-bold md:underline">Connect with me</h1>
      <ul className="flex gap-6">
        <li className="hover:border-accent-hover border rounded-full group cursor-pointer">
          <a href="https://github.com/agarwalyashh" target="_blank">
            <PiGithubLogoBold size={24} className="sm:m-2 m-1 group-hover:text-accent-hover group-hover:scale-[1.15]" />
          </a>
        </li>
        <li className="hover:border-accent-hover border rounded-full group cursor-pointer">
          <a
            href="https://www.linkedin.com/in/agarwalyashh2004/"
            target="_blank"
          >
            <SlSocialLinkedin size={24} className="sm:m-2 m-1 group-hover:text-accent-hover group-hover:scale-[1.15]" />
          </a>
        </li>
        <li className="hover:border-accent-hover border rounded-full group cursor-pointer">
          <a href="mailto:agarwalyashhh004@gmail.com" target="_blank">
            <CiMail size={24} className="sm:m-2 m-1 group-hover:text-accent-hover group-hover:scale-[1.15]" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
