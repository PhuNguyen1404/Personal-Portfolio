"use client";

import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";
import Image from "next/image";

const Extra = () => {
  const documents = [
    {
      name: "Bachelor of Computer",
      description:
        "Academic certificate from Auckland University of Technology",
      image: "/assets/extra/Bachelor of Computer.jpg",
      file: "/assets/extra/Bachelor of Computer.pdf",
      type: "Certificate",
    },
    {
      name: "Internship Confirmation Letter",
      description:
        "Confirmation letter for internship position at ANV LLC (ANV 合同会社)",
      image: "/assets/extra/Phu_INTERNSHIP-CONFIRMATION-LETTER.jpg",
      file: "/assets/extra/Phu_INTERNSHIP-CONFIRMATION-LETTER.pdf",
      type: "Confirmation Letter",
    },
  ];

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
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">Extra Documents</h3>
          <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
            Here you can find additional documents and certificates related to
            my academic and professional background.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-[#232329] rounded-xl p-6 hover:bg-[#2a2a30] transition-all duration-300"
              >
                <div className="aspect-[3/4] relative mb-4 bg-[#1a1a1f] rounded-lg overflow-hidden">
                  <Image
                    src={doc.image}
                    fill
                    className="object-cover rounded-lg"
                    alt={doc.name}
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
                <p className="text-white/60 text-sm mb-4">{doc.description}</p>
                <div className="flex gap-3">
                  <a
                    href={doc.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#e76f51] hover:text-[#e76f51]/80 transition-colors"
                  >
                    <FiEye className="text-lg" />
                    <span className="text-sm">View</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Extra;
