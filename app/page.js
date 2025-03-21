import Image from "next/image";
import vector from "../app/public/vector.jpeg";
import { Download } from "lucide-react";
import Socials from "./_components/Socials";
import About from "./_components/About";
import Github from "./_components/Github";

export default function Home() {
  return (
    <div>
      <section className="flex md:grid md:grid-cols-2 sm:gap-6 lg:gap-10 gap-10 my-24">
        <div className="space-y-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide">
            Hello I&apos;m <br />
            <span className="text-accent">Yash Agarwal</span>
          </h1>
          <p className="text-xl lg:text-2xl">
            I am an undergrad pursuing Bachelor&apos;s in Technology in
            Electrical Engineering from National Institute of Technology,
            Kurukshetra.
          </p>
          <div className="w-[65%] sm:w-[45%] md:w-fit flex items-center">
            <a
              href="https://drive.google.com/file/d/1jAsSwKS_FicEIkFN_d4UgjtJDBu9zyHA/view?usp=drive_link"
              target="_blank"
              className="text-accent border border-accent rounded-2xl text-xl px-4 sm:px-10 md:px-6 py-2 sm:text-2xl flex gap-2 items-center cursor-pointer"
            >
              <span className="whitespace-nowrap">DOWNLOAD CV</span>
              <span>
                <Download />
              </span>
            </a>
          </div>
          <Socials />
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
      <div className="space-y-4 mb-10">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Days I <span className="text-accent">Code</span></h1>
        <Github/>
      </div>
    </div>
  );
}
