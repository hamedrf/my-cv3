"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface UnderlineProps {
  text: string;
  delay?: number;
}

const Underline: React.FC<UnderlineProps> = ({ text, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(".underline", {
        width: "100%",
        duration: 1,
        delay: delay,
        ease: "bounce.out",
      });
    }
  }, [inView]);

  return (
    <span className="position-relative" ref={ref}>
      <span>{text}</span>
      <span
        className="position-absolute underline  rounded-5 bg-main"
        style={{ height: "5px", right: "0px", width: "0%", bottom: "-5px" }}
      ></span>
    </span>
  );
};

export default Underline;
