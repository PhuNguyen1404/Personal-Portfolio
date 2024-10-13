import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-[#e76f51]">Nguyễn Ngọc Phú</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As a Full Stack Developer, I build scalable, efficient web apps
              using front-end tools like React and back-end frameworks like
              Node.js. I manage the full development cycle, delivering
              high-quality, user-friendly solutions while collaborating on
              creative projects that solve real-world challenges.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 v border border-[#e76f51]"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#e76f51] rounded-full flex justify-center items-center text-[#e76f51] text-base hover:bg-[#e76f51] hover:text-primary hover: transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
