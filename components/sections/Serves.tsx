"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ZoomEffect from "../effect/ZoomEffect";
import webDesign from "../../public/gifs/Web-design.gif";
import seo from "../../public/gifs/seo.gif";
import marketing from "../../public/gifs/marketing.gif";

const Serves = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const contorlSizeScroll =
      (window.matchMedia("(max-width: 996px)").matches
        ? document.querySelector(".serves-parent-text")!.scrollHeight -
          document.documentElement.clientHeight
        : document.querySelector(".serves-parent-text")!.scrollHeight -
          document.documentElement.clientHeight * 2) * 2;

    const spaceTop = document
      .querySelector(".serves-section")!
      .getBoundingClientRect().top;

    console.log(spaceTop);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".serves-section",
        start: "top top",
        end: "+=" + contorlSizeScroll,
        markers: false,
        scrub: 0.5,
        invalidateOnRefresh: true,
        pin: ".serves-section",
      },
    });

    tl.to(".serves-img-1", { duration: 0.25 });
    tl.to(".serves-img-1", {
      right: "120%",
      duration: 0.4,
      ease: "back.in(2)",
    }).fromTo(
      ".serves-parent-text",
      {
        background: "#a3ffee",
        duration: 0.25,
      },
      {
        background: "#a2d2ff",
        duration: 0.25,
      }
    );
    tl.fromTo(
      ".serves-img-2",
      {
        right: "-70%",
      },
      {
        ease: "back.out(2)",
        right: "25%",
        duration: 0.4,
      }
    );
    tl.to(".serves-img-2", { duration: 0.6 });
    tl.to(".serves-img-2", {
      right: "120%",
      duration: 0.5,
      ease: "back.in(2)",
    }).to(".serves-parent-text", {
      background: "#ffeea3",
      duration: 0.25,
    });
    tl.fromTo(
      ".serves-img-3",
      {
        right: "-70%",
      },
      {
        right: "25%",
        ease: "back.out(2)",
        duration: 0.5,
      }
    );
    tl.to(".serves-img-3", { duration: 0.75 });
    gsap.to(".serves-parent-text", {
      scrollTrigger: {
        trigger: ".serves-section",
        start: "top top",
        end: "+=" + contorlSizeScroll,
        markers: false,
        scrub: 0.5,
        invalidateOnRefresh: true,
        pin: ".serves-section",
      },
      y: () => -contorlSizeScroll,
      duration: 1,
    });
  }, []);
  return (
    <div className="d-flex  serves-section flex-column flex-lg-row overflow-hidden">
      <div className="serves-parent-img bg-light col-12 col-lg-6 overflow-hidden vh-100  position-relative ">
        <div className="serves-img-1  position-absolute w-50 top-50 text-center">
          <Image
            src={webDesign}
            alt="web-design"
            width={1}
            height={1}
            className="w-100 h-100"
            priority
          />
        </div>
        <div className="serves-img-2  position-absolute w-50 top-50 text-center">
          {" "}
          <Image
            src={seo}
            alt="seo"
            width={1}
            height={1}
            className="w-100 h-100"
            priority
          />
        </div>
        <div className="serves-img-3 position-absolute w-50  top-50 text-center">
          <Image
            src={marketing}
            alt="marketing"
            width={1}
            height={1}
            className="w-100 h-100"
            priority
          />
        </div>
      </div>{" "}
      <div className="serves-parent-text col-12 z-n1 col-lg-6 d-flex flex-column align-items-center justify-content-center">
        <div className="w-75 vh-100 flex-column justify-content-center align-items-center d-flex">
          <ZoomEffect>
            <div className="flex-column justify-content-center align-items-center d-flex">
              <h1>خدمات سئو</h1>
              <p>
                مخاطب خود را میخکوب کنید طراحی سایت منحصر به فرد ، با به روزترین
                متد دنیا
              </p>
            </div>
          </ZoomEffect>
        </div>
        <div className="w-75 vh-100 justify-content-center align-items-center d-flex">
          {" "}
          <ZoomEffect>
            <div className="flex-column justify-content-center align-items-center d-flex">
              <h1>خدمات سئو</h1>
              <p>
                در همین بازار ، سریع و پرقدرت بفروش تحول در فروش ، نتیجه سئوی
                حرفه ای
              </p>
            </div>
          </ZoomEffect>
        </div>
        <div className="w-75 vh-100 justify-content-center align-items-center d-flex">
          {" "}
          <ZoomEffect>
            <div className="flex-column justify-content-center align-items-center d-flex">
              <h1>خدمات سئو</h1>
              <p>
                بار سنگین بازاریابی و فروش را از دوش خود بردارید اختصاص تیم حرفه
                ای و مدرن بازاریابی ویژه کسب و کار شما
              </p>
            </div>
          </ZoomEffect>
        </div>
      </div>
    </div>
  );
};

export default Serves;
