"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

function Navigation() {
  const path = usePathname();

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
      <motion.ul className="sm:flex items-center sm:gap-6 xl:gap-8 text-lg lg:text-xl font-semibold hidden">
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
      <button className="sm:hidden hover:bg-accent-hover">
        <AlignJustify />
      </button>
    </nav>
  );
}

export default Navigation;
