"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Underline, { colors } from "../effect/Underline";

const HorizontalScrollTxt = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const contorlSizeScroll =
      document.querySelector(".horizontal-scroll-text-parent")!.scrollWidth -
      document.documentElement.clientWidth;

    const speedDuration = window.matchMedia("(min-width: 996px)").matches
      ? contorlSizeScroll / 2
      : contorlSizeScroll;

    gsap.to(".horizontal-scroll-text-parent", {
      scrollTrigger: {
        trigger: ".horizontal-scroll-text-parent",
        start: "top top",
        end: "+=" + speedDuration,
        pin: ".horizontal-scroll-section",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
      x: () => contorlSizeScroll,
      duration: 1,
    });
    gsap.to(".zoom-out-bg", {
      scrollTrigger: {
        trigger: ".zoom-out-bg",
        start: "+=" + speedDuration,
        end: "+=" + contorlSizeScroll / 10,
        markers: false,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
      scale: 0.9,
      borderRadius: "8.5rem",
      duration: 1,
    });
  }, []);

  return (
    <>
      <div
        className="horizontal-scroll-text-parent position-relative d-flex justify-content-center align-items-center overflow-hidden"
        style={{ marginRight: "-1px" }}
      >
        <div className="horizontal-scroll-text-childe horizontal-scroll-text-1 bg-main ">
          <span className="text-size-lg">
            طراحی سایت باید{" "}
            <Underline text="ساده و جذاب" delay={1} color={colors.second} />{" "}
            باشه
            <br />
            <span className="text-size-sm px-2">
              تا کاربر محو زیبایی بشه و لذت ببره
            </span>
          </span>
        </div>
        <div className="horizontal-scroll-text-childe  bg-main">
          <span className="text-size-lg">
            سایت باید{" "}
            <Underline text="سریع و بهینه  " delay={1} color={colors.second} />{" "}
            باشد
            <br />
            <span className="text-size-sm px-2">
              تا کاربر تجربه‌ای روان و لذت‌بخش داشته باشه
            </span>
          </span>
        </div>
        <div className="horizontal-scroll-text-childe bg-main zoom-out-bg">
          <span className="text-size-lg">
            سایت باید{" "}
            <Underline text=" قوی و پایدار " delay={1} color={colors.second} />{" "}
            باشد
            <br />
            <span className="text-size-sm px-2">
              تا به‌راحتی ترافیک و محصولات شما را مدیریت کند و همیشه در دسترس
              باشد
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollTxt;
