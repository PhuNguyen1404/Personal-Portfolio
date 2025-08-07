"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiLaravel, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I have successfully completed my bachelor degree in Information Technology major at Ho Chi Minh City University of Science, where I gained comprehensive knowledge in software development, database management, and web technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nguyễn Ngọc Phú",
    },
    {
      fieldName: "Experiences",
      fieldValue: "2 year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "nguyenphu.it1404@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable",
    },
    {
      fieldName: "Languague",
      fieldValue: "Vietnamese, English(IELTS: 6.5)",
    },
  ],
};

const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "My working experiences",
  item: [
    {
      company: "FPT IS",
      position: "Intern/Fresher",
      duration: "Jan 2025 - Present",
    },
    {
      company: "ANV LLC (ANV 合同会社)",
      position: "Intern",
      duration: "Dec 2024 - May 2025",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My experience",
  description:
    "I have earned my bachelor's degree in Information Technology with a focus on software development from Ho Chi Minh City University of Science. My education has not only given me theoretical insights but also practical skills essential for success in the field of modern software development.",
  item: [
    {
      institution: "VNUHCM - University of Science",
      degree: "Bachelor degree - Information Technology",
      duration: "2021 - 2025",
    },
    {
      institution: "AUT - Auckland University of Technology",
      degree: "Bachelor of Computer and Information Sciences",
      duration: "2021 - 2025",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "With expertise in HTML5, CSS3, Tailwind CSS, JavaScript, and backend skills in NodeJS, along with frameworks like Next.js and React.js, I can efficiently transform Figma designs into fully functional, visually appealing web applications.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiMysql />,
      name: "SQL",
    },
  ],
};

const Reusume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 rounded-2xl">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skilllist.map((skills, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-[#e76f51] transition-all duration-300">
                                  {skills.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skills.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                </div>
                <div className="flex-1">
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.item.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-[#e76f51]">
                              {item.duration}
                            </span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-[#e76f51]"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full h-full">
              <div className="flex flex-col gap-[30px] h-full">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <div className="flex-1 flex items-center">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0 w-full">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experiences" className="w-full h-full">
              <div className="flex flex-col gap-[30px] h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experiences.title}</h3>
                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                    {experiences.description}
                  </p>
                </div>
                <div className="flex-1">
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experiences.item.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-[#e76f51]">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-[#e76f51]"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Reusume;
