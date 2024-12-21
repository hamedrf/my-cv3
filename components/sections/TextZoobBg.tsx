"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ZoomEffect from "../effect/ZoomEffect";
import Underline, { colors } from "../effect/Underline";

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
      scale: window.matchMedia("(max-width: 996px)").matches ? 2.8 : 5,
    });
  }, []);
  return (
    <section
      className="vw-100 position-relative d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div className="bg-zoom-in z-n1 col-11 col-md-9 col-lg-6 col-xl-5 col-xxl-3  bg-main rounded-circle top-50 position-absolute "></div>
      <h4 className="col-11 text-main col-md-9 col-lg-6 col-xl-5 col-xxl-4">
        <ZoomEffect>
          <h1 className="text-center my-4 pt-5 fw-bold text-size-md text-color">
            <Underline text="درباره سایت" color={colors.second} delay={1.5} />
          </h1>
          <span className="text-size-sm pt-1">
            سایتی که شما در حال مشاهده هستید با استفاده از تکنولوژی‌های جدید و
            رویکردهای طراحی مدرن ساخته شده است تا تجربه‌ای بی‌نظیر از نظر ظاهر و
            عملکرد برای کاربران ایجاد کند. هر بخش از سایت با دقت و توجه به
            جزئیات طراحی شده تا تجربه کاربری را ارتقا دهد، جذابیت بصری را حفظ
            کند و عملکرد بهینه‌ای داشته باشد. این سایت نه تنها از نظر طراحی مدرن
            و زیبا است، بلکه به‌طور کامل نیازهای کاربردی کاربران را به بهترین
            شکل پاسخ می‌دهد.
          </span>
        </ZoomEffect>
      </h4>
    </section>
  );
};

export default TextZoobBg;
