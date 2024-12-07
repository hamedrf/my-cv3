"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillProgress = ({
  icon,
  progress,
}: Readonly<{ icon: React.ReactNode; progress: number }>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [progressState, setProgressState] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log("hello");
    if (inView && elementRef.current) {
      gsap.to(elementRef.current, {
        width: `${progress}%`,
        duration: 2,
        delay: 0.5,
        ease: "elastic.out(1,0.5)",
      });
      const animation = gsap.to(
        {},
        {
          duration: 2,
          onUpdate: function () {
            const value = Math.ceil((progress * this.progress()) as number);
            setProgressState(value);
          },
        }
      );
      return () => {
        animation.kill();
      };
    }
  }, [inView, elementRef.current]);
  return (
    <div
      className="w-100 d-flex align-items-center my-3 p-3 bg-second rounded-5 "
      ref={ref}
    >
      <div className=" w-75">
        <div
          dir="ltr"
          className=" w-100 rounded-5 bg-secondary  bg-opacity-25 overflow-hidden "
          style={{ height: "25px" }}
        >
          <div
            className="position-relative bg-gradients rounded-5 overflow-hidden"
            ref={elementRef}
            style={{ height: "25px", width: "0" }}
          >
            <div
              className="position-absolute top-50 translate-middle "
              style={{ left: "50%" }}
            >
              {progressState}%
            </div>
          </div>
        </div>
      </div>
      <div className="w-25 d-flex justify-content-center flex-wrap align-items-center">
        {icon}
      </div>
    </div>
  );
};

export default SkillProgress;
