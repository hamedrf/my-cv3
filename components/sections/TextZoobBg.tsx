"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ZoomEffect from "../effect/ZoomEffect";

const TextZoobBg = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const height = window.innerHeight;
    gsap.to(".bg-zoom-in", {
      scrollTrigger: {
        trigger: ".bg-zoom-in",
        start: "center bottom",
        end: "+=" + height / 2 + " bottom",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
      scale: window.matchMedia("(max-width: 996px)").matches ? 3.2 : 5,
    });
  }, []);
  return (
    <section className="vw-100 vh-100 position-relative d-flex justify-content-center align-items-center">
      <div className="bg-zoom-in z-n1 col-11 col-md-9 col-lg-6 col-xl-5 col-xxl-3  bg-main rounded-circle top-50 position-absolute "></div>
      <h4 className="col-11 text-main col-md-9 col-lg-6 col-xl-5 col-xxl-3">
        <ZoomEffect>
          <span className="text-size-md">
            فقط سایت طراحی نمی کنیم، با استفاده از به روز ترین متد بازاریابی تا
            رسیدن به اهدافتان در کنار شما هستیم Description …..
          </span>
        </ZoomEffect>
      </h4>
    </section>
  );
};

export default TextZoobBg;
