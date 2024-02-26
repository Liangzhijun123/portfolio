import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, delay, className }: props) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: {
            opacity: 1,
            translateX: 0,
            position: "relative",
            zIndex: 11,
          },
          visible: { opacity: 1, translateX: 2000, position: "absolute" },
        }}
        transition={{
          type: "tween",
          duration: 4,
          damping: 8,
          delay: delay,
          stiffness: 100,
        }}
        initial="hidden"
        animate={controls}
        className={className}
      >
        <div className=" w-[500px] h-[315px] bg-white"></div>
      </motion.div>
      {children}
    </>
  );
}
