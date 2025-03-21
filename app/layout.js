import Navigation from "./_components/Navigation";
import ParticlesComponent from "./_components/Particles";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Yash Agarwal",
    default: "Yash Agarwal",
  },
  description: "Portfolio@Yash Agarwal",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary ${jetBrainsMono.className} text-textcolor lg:w-[80%] w-[90%] mx-auto my-5 `}
      >
        <ParticlesComponent id="particles"/>
        <header className="relative z-10">
          <Navigation />
        </header>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
