import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function FadeUp({ text, delay }: { text: any; delay?: number }) {
  const ref = useRef(null);
  const InView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (InView) {
      controls.start("animate"); // Trigger animation when component comes into view
    }
  }, [InView, controls]);

  return (
    <motion.div
      className=" pb-3"
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: { y: 70, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay: delay ? delay : 0.2,
            duration: 1,
            type: "spring",
          },
        },
      }}
    >
      {text}
    </motion.div>
  );
}
