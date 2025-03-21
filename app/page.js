import Image from "next/image";
import vector from "../app/public/vector.jpeg";
import { MdOutlineFileDownload } from "react-icons/md";
import Socials from "./_components/Socials";
import Github from "./_components/Github";
import About from "./_components/About";

export default function Home() {
  return (
    <div>
      <section className="flex md:grid md:grid-cols-2 sm:gap-6 lg:gap-10 gap-10 my-12 sm:my-18 lg:my-24">
        <div className="space-y-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-[80px] font-semibold tracking-wide">
            Hello I&apos;m <br />
            <span className="text-accent whitespace-nowrap">Yash Agarwal</span>
          </h1>
          <p className="text-xl md:text-2xl xl:text-[27px]">
            I am an undergrad pursuing Bachelor&apos;s in Technology in
            Electrical Engineering from National Institute of Technology,
            Kurukshetra.
          </p>
          <div className="md:hidden flex items-center justify-center">
            <div className="h-50 w-50 xs:h-75 xs:w-75 relative">
              <Image
                src={vector}
                alt="avatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-[65%] sm:w-[45%] md:w-fit flex items-center">
            <a
              href="https://drive.google.com/file/d/1jAsSwKS_FicEIkFN_d4UgjtJDBu9zyHA/view?usp=drive_link"
              target="_blank"
              className="text-accent border border-accent rounded-2xl text-xl px-4 sm:px-10 md:px-6 py-2 sm:text-2xl flex gap-2 items-center cursor-pointer group"
            >
              <span className="whitespace-nowrap">DOWNLOAD CV</span>
              <span className="group-hover:translate-y-1 group-hover:scale-[1.05]">
                <MdOutlineFileDownload size={24} />
              </span>
            </a>
          </div>
          <div className="md:hidden">
          <Socials />
          </div>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <div className="md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120 relative">
            <Image
              src={vector}
              alt="avatar"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>
      <div className="hidden md:block">
        <h1 className="md:text-3xl xl:text-4xl underline font-bold mb-6">About Me</h1>
        <About />
      </div>
      <div className="hidden md:block my-10">
        <Socials/>
      </div>
    </div>
  );
}
