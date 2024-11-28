"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ZoomEffect = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      gsap.to(elementRef.current, {
        opacity: 1,
        transform: "none",
        duration: 0.8,
      });
    }
  }, [inView]);

  return (
    <span className="parent-zoom-effect">
      <div
        ref={(el) => {
          ref(el);
          elementRef.current = el;
        }}
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        {children}
      </div>
    </span>
  );
};

export default ZoomEffect;
