import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function ScrollMotion() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%" }
          }
        );
      });

      gsap.to(".season-track", {
        xPercent: -38,
        ease: "none",
        scrollTrigger: {
          trigger: ".season-pin",
          start: "top top",
          end: "+=1600",
          scrub: 0.8,
          pin: true
        }
      });

      gsap.to(".hero-media", {
        y: 70,
        scale: 0.98,
        ease: "none",
        scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: true }
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
