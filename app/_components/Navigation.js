"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "motion/react";
import { useState } from "react";

function Navigation() {
  const path = usePathname();
  const [sidebar, setSidebar] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-bold">
        Yash<span className="text-accent">.</span>
      </Link>
      <motion.ul className="sm:flex items-center sm:gap-6 xl:gap-8 text-xs sm:text-lg lg:text-xl font-semibold hidden">
        {links.map((link) => (
          <motion.li
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.2 }}
            key={link.name}
            className={`hover:underline hover:text-accent-hover transition-all duration-200 ${
              link.path === path ? "text-accent underline" : ""
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
      <div className="sm:hidden">
        <span>
          <CiMenuFries size={24} onClick={() => setSidebar(!sidebar)} />
        </span>
      </div>
      {sidebar && (
        <div className="fixed top-0 right-0 h-screen bg-secondary w-[40%] z-11">
          <div className="flex justify-end">
            <RxCross2
              size={24}
              className="mr-4 mt-4 text-accent"
              onClick={() => setSidebar(false)}
            />
          </div>
          <div className="p-4 flex flex-col justify-center items-center">
            <Link href="/" className="text-xl font-bold my-8">
              Yash<span className="text-accent">.</span>
            </Link>
            <motion.ul className="flex flex-col gap-5 items-center text-xl font-semibold">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  className={` ${
                    link.path === path ? "text-accent underline" : ""
                  }`}
                >
                  <Link href={link.path} onClick={() => setSidebar(false)}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
