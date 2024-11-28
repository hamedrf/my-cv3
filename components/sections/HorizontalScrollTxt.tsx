"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZoomEffect from "../effect/ZoomEffect";

const HorizontalScrollTxt = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const contorlSizeScroll =
      document.querySelector(".horizontal-scroll-text-parent")!.scrollWidth -
      document.documentElement.clientWidth;

    gsap.to(".horizontal-scroll-text-parent", {
      scrollTrigger: {
        trigger: ".horizontal-scroll-text-parent",
        start: "top top",
        end: "+=" + (contorlSizeScroll - contorlSizeScroll / 3),
        pin: ".horizontal-scroll-section",
        markers: false,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
      x: () => contorlSizeScroll,
      duration: 1,
    });
    gsap.to(".zoom-out-bg", {
      scrollTrigger: {
        trigger: ".zoom-out-bg",
        start: "+=" + (contorlSizeScroll - contorlSizeScroll / 3),
        end: "+=" + contorlSizeScroll / 9,
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
          <ZoomEffect>
            <span className="text-size-lg">
              طراحی سایت باید جذاب و مطابق با به روزترین متد دنیا باشه
              <br />
              تا .... بی رقیب بمونی
            </span>
          </ZoomEffect>
        </div>
        <div className="horizontal-scroll-text-childe  bg-main">
          <ZoomEffect>
            <span className="text-size-lg">
              سئوی سایت باید اصولی، منظم و به روز باشه
              <br />
              تا .... همیشه دیده بشی
            </span>
          </ZoomEffect>
        </div>
        <div className="horizontal-scroll-text-childe bg-main zoom-out-bg">
          <ZoomEffect>
            <span className="text-size-lg">
              تیم حرفه ای بازاریابی و فروش باید از CRMو Voip استفاده کنه
              <br />
              تا .... فروش شما دائمی و پایدار بمونه
            </span>
          </ZoomEffect>
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollTxt;
