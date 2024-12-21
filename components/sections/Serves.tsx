"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZoomEffect from "../effect/ZoomEffect";
import Speed from "../../public/gifs/web-speed.gif";
import Power from "../../public/gifs/web-power.gif";
import Image from "next/image";

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
      <div className="serves-parent-img bg-light col-12 col-lg-6 overflow-hidden  position-relative ">
        <div className="serves-img-1  position-absolute w-50 top-50 text-center">
          <img src="gifs/Web-design.gif" alt="design" className="w-100 h-100" />
        </div>
        <div className="serves-img-2  position-absolute w-50 top-50 text-center">
          {" "}
          <Image
            src={Speed}
            alt="speed"
            width={1}
            height={1}
            className="w-100 h-100"
            priority
          />
        </div>
        <div className="serves-img-3 position-absolute w-50  top-50 text-center">
          <Image
            src={Power}
            alt="power"
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
              <h1 className="fw-bold my-4">طراحی مدرن، کاربردی و جذاب</h1>
              <p className="text-size-sm ">
                با استفاده از ابزارهایی مثل GSAP، jQuery، و React، می‌توانید
                طراحی‌های مدرن و جذابی ساخت که نه تنها زیبا هستند، بلکه تجربه
                کاربری بی‌نظیری نیز فراهم می‌کنند. این تکنولوژی‌ها به شما کمک
                می‌کنند تا انیمیشن‌های جذاب و تعاملات پویا ایجاد کنید که باعث
                جذب کاربران می‌شود.
              </p>
            </div>
          </ZoomEffect>
        </div>
        <div className="w-75 vh-100 justify-content-center align-items-center d-flex">
          {" "}
          <ZoomEffect>
            <div className="flex-column justify-content-center align-items-center d-flex">
              <h1 className="fw-bold my-4">سرعت بالا، جذب کاربر</h1>
              <p className="text-size-sm">
                سرعت سایت یکی از عوامل کلیدی جذب کاربران است. با استفاده از
                Next.js می‌توانید سایتی سریع و بهینه ایجاد کنید که بارگذاری آن
                در کمترین زمان انجام می‌شود. این سرعت بالا تجربه کاربری روان و
                خوشایندی را فراهم می‌کند و باعث می‌شود کاربران سایت شما را ترک
                نکرده و به تعامل بیشتری با آن ادامه دهند. در نتیجه، سرعت بالا نه
                تنها به بهبود تجربه کاربری کمک می‌کند، بلکه به جذب کاربر نیز کمک
                می‌کند.
              </p>
            </div>
          </ZoomEffect>
        </div>
        <div className="w-75 vh-100 justify-content-center align-items-center d-flex">
          {" "}
          <ZoomEffect>
            <div className="flex-column justify-content-center align-items-center d-flex">
              <h1 className="fw-bold my-4">قدرت سایت و هندل کردن ترافیک ها </h1>
              <p className="text-size-sm">
                با استفاده از Next.js و TypeScript، سایت شما قادر به هندل کردن
                ترافیک و درخواست‌های زیاد خواهد بود. این ابزارها به شما امکان
                می‌دهند که سایت سریع، بهینه و مقیاس‌پذیر ایجاد کنید که همیشه
                عملکرد عالی داشته باشد و نیازهای کاربران را به بهترین شکل ممکن
                برآورده کند.
              </p>
            </div>
          </ZoomEffect>
        </div>
      </div>
    </div>
  );
};

export default Serves;
