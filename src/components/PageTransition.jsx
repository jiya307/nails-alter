import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageTransition({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
