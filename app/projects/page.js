import myfolio from "../public/myfolio.jpeg";
import wildoasis from "../public/wildoasis.jpeg";
import realestate from "../public/realestate.jpeg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Projects",
};
function page() {
  return (
    <div className=" my-12 sm:my-18 lg:my-24 md:grid md:grid-cols-2 gap-4 md:gap-8 md:space-y-18 lg:space-y-24 xl:space-y-30 items-center">
      <div className="space-y-6">
        <div className="space-y-4 border-b border-textcolor/30">
          <h1 className="sm:text-5xl text-4xl md:text-6xl xl:text-8xl font-bold">01</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">The Wild Oasis</h1>
          <p>
            The Wild Oasis Hotel Booking App is a Next.js & Supabase-powered
            hotel booking platform that allows guests to browse, reserve, and
            manage their hotel stays seamlessly.
          </p>
          <p className="text-accent text-xl mb-2">
            NextJS, Supabase, Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a
            href="https://thewildoasis-rosy.vercel.app/"
            target="_blank"
            className="bg-secondary cursor-pointer rounded-full"
          >
            <span>
              <MdArrowOutward className="m-1 sm:m-2 sm:h-8 sm:w-8 h-6 w-6 lg:h-10 lg:w-10" />
            </span>
          </a>
          <a
            target="_blank"
            href="https://github.com/agarwalyashh/The-Wild-Oasis"
            className="bg-secondary cursor-pointer rounded-full"
          >
            <span>
              <FaGithub className="m-1 sm:m-2 sm:h-8 sm:w-8 h-6 w-6 lg:h-10 lg:w-10" />
            </span>
          </a>
        </div>
      </div>
      <div className="relative mb-16 md:mb-0">
        <Image src={wildoasis} alt="projectImage" className="object-cover" />
      </div>
      <div className="space-y-6">
        <div className="space-y-4 border-b border-textcolor/30">
          <h1 className="sm:text-5xl text-4xl md:text-6xl xl:text-8xl font-bold">02</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">MyFolio</h1>
          <p>
            Your No-Code Portfolio Maker. Create and launch your personal
            developer portfolio in minutes—no coding required! Just fill in your
            details, showcase your projects, customize your theme, and get a
            unique portfolio link instantly.
          </p>
          <p className="text-accent text-xl mb-2">
            ReactJS, NodeJS, MongoDB, ExpressJS, Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a href="https://myfolio.tech" target="_blank">
            <span className="bg-secondary cursor-pointer rounded-full">
              <MdArrowOutward className="m-1 sm:m-2 sm:h-8 sm:w-8 h-6 w-6 lg:h-10 lg:w-10" />
            </span>
          </a>
          <a href="https://github.com/agarwalyashh/MyFolio" target="_blank">
            <span className="bg-secondary cursor-pointer rounded-full">
              <FaGithub className="m-1 sm:m-2 sm:h-8 sm:w-8 h-6 w-6 lg:h-10 lg:w-10" />
            </span>
          </a>
        </div>
      </div>
      <div className="relative mb-16 md:mb-0">
        <Image src={myfolio} alt="projectImage" className="object-cover" />
      </div>
      <div className="space-y-6">
        <div className="space-y-4 border-b border-textcolor/30">
          <h1 className="sm:text-5xl text-4xl md:text-6xl xl:text-8xl font-bold">03</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">Real Estate App</h1>
          <p>
            Using Various Machine Learning Models, I built a real estate price
            predictor for the market in Gurgaon. Besides that, I also used draw
            to draw and show insights about the market and added a recommender
            system which recommends similar properties based on search results
          </p>
          <p className="text-accent text-xl mb-2">
            Python, Streamlit, Optuna, Machine Learning
          </p>
        </div>
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a
            className="bg-secondary cursor-pointer rounded-full"
            target="_blank"
            href="https://real-estate-gurgaon.streamlit.app/"
          >
            <span>
              <MdArrowOutward className="m-1 sm:m-2 sm:h-8 sm:w-8 h-6 w-6 lg:h-10 lg:w-10" />
            </span>
          </a>
          <a
            className="bg-secondary cursor-pointer rounded-full"
            target="_blank"
            href="https://github.com/agarwalyashh/Real-Estate"
          >
            <span>
              <FaGithub className="m-1 sm:m-2 sm:h-8 sm:w-8 h-6 w-6 lg:h-10 lg:w-10" />
            </span>
          </a>
        </div>
      </div>
      <div className="relative mb-16 md:mb-0">
        <Image src={realestate} alt="projectImage" className="object-cover" />
      </div>
    </div>
  );
}

export default page;
