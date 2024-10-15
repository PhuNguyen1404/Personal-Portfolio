"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    catergory: "PHP",
    title: "Project 01",
    description:
      "This project focuses on handling database connections, dynamically generate content, and perform CRUD operations (Create, Read, Update, Delete). The tasks involve building pages that display university data from a MySQL database, processing user inputs, and enabling actions such as editing or deleting records. Additional functionality includes processing form submissions and handling image uploads.",
    stack: [
      { name: "Html 5" },
      { name: "CSS " },
      { name: "JaveScript" },
      { name: "PHP" },
    ],
    image: "/assets/work/php.png",
    live: "",
    github:
      "https://github.com/PhuNguyen1404/Personal-Project/tree/cb6e68d63b4303b02d1d1f1d1941e64252d0c589/Advanced%20PHP",
  },
  {
    num: "02",
    catergory: "frontend",
    title: "Project 02",
    description:
      "This project is a dynamic showcase of skills and projects in web development. Built using modern technologies such as Next JS, Tailwind CSS, Framer Motion, and React, the portfolio features a responsive design that enhances user experience across devices. It includes sections highlighting various projects, with detailed descriptions and links to live demos, making it an effective digital resume.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind" },
      { name: "React.js" },
      { name: "Netx.js" },
    ],
    image: "/assets/work/porfolio.png",
    live: "https://nguyen-ngoc-phu-personal-portfolio.vercel.app",
    github: "https://github.com/PhuNguyen1404/Personal-Portfolio.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project?.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#e76f51] transition-all duration-500 capitalize">
                {project?.catergory} project
              </h2>
              <p className="text-white/60">{project?.description}</p>
              <ul className="flex gap-4">
                {project?.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[#e76f51] ">
                      {item.name}
                      {index !== project?.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-5">
                <Link href={project?.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project?.github || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className=" relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-fill"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="hover:bg-[#e76f51]-hover text-[#e76f51] text-[35px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
