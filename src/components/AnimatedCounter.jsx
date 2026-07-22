import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(
    () => {
      countersRef.current.forEach((counter, index) => {
        if (!counter) return;

        const numberElement =
          counter.querySelector(".counter-number");

        const item = counterItems[index];

        const obj = {
          value: 0,
        };

        gsap.to(obj, {
          value: item.value,
          duration: 2.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: counterRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },

          onUpdate: () => {
            numberElement.innerHTML =
              `${Math.floor(obj.value)}${item.suffix}`;
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: counterRef }
  );

  return (
    <section
      id="counter"
      ref={counterRef}
      className="padding-x-lg xl:mt-0 mt-32"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center"
          >
            <h2 className="counter-number text-white text-5xl font-bold mb-2">
              0{item.suffix}
            </h2>

            <p className="text-white text-lg text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;