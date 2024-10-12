import { motion } from "framer-motion";

//vatiants
const starAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "100%"],
  },
};

const reverseIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[
        ...Array(6).map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={starAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 1,
              }}
              className="h-full w-full bg-white relative"
            />
          );
        }),
      ]}
    </>
  );
};

export default Stairs;
