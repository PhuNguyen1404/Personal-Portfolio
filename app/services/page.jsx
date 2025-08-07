"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web development",
    descripton:
      "Guarantee that sites meet user expectations by ensuring they look aesthetic, run smoothly and offer easy access points with no loading issues between pages or error messages.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    descripton:
      "Focusing on creating functional, visually appealing, and user-friendly interfaces by conducting usability testing, prototyping, and ensuring seamless interaction between users and digital tools",
    href: "",
  },
  {
    num: "03",
    title: "SQL/Database Development",
    descripton:
      "Designing and implementing robust database solutions using SQL, MySQL, and other database technologies. Creating efficient data structures, optimizing queries, and ensuring data integrity for scalable applications.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-o">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.2, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-[#e76f51] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#e76f51] transition-all duration-500">
                  {services.title}
                </h2>

                <p className="text-white/60 ">{services.descripton}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
