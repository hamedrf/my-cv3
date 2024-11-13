"use client";
import gsap from "gsap";
import { useRef } from "react";

export enum colorBtn {
  main = "main",
  second = "second",
}
const MainBtn = ({
  text,
  color,
  rounded = true,
}: {
  text: string;
  color: colorBtn;
  rounded?: boolean;
}) => {
  const btnRef = useRef(null);

  const mouseEnter = () => {
    gsap.to(btnRef.current, {
      scaleX: 1.09,
      scaleY: 0.98,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
  };
  const mouseLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 1,
      ease: "elastic.out(1.3, 0.2)",
    });
  };
  return (
    <button
      dir="rtl"
      ref={btnRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={`btn btn-lg btn-${color} ${
        rounded && "rounded-5"
      } position-relative`}
    >
      <span
        className="position-absolute  top-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center z-1 "
        style={{ left: "50%" }}
      >
        {text}
      </span>
      {text}
    </button>
  );
};

export default MainBtn;
