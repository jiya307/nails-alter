import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { services } from "../data/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "Services · Arsh Atelier";
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={ref}>
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold mb-2 reveal">Offerings</p>
          <h1 className="serif text-5xl md:text-6xl mb-6 reveal">Services</h1>
          <p className="text-brown/80 max-w-xl leading-relaxed reveal">
            Every service begins with consultation. Prices shown are starting points — final quotes depend on design complexity and length.
          </p>
        </section>

        <section className="pb-24 px-6 max-w-7xl mx-auto space-y-0">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`reveal grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 border-t border-nude ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <span className="text-gold text-sm tracking-widest">0{i + 1}</span>
                <h2 className="serif text-3xl md:text-4xl mt-2 mb-4">{s.title}</h2>
                <p className="text-brown/80 leading-relaxed mb-4">{s.description}</p>
                <p className="text-sm text-brown/60 mb-8">{s.details}</p>
                <div className="flex flex-wrap gap-8 mb-10 text-sm">
                  <div>
                    <p className="text-brown/50 text-xs tracking-widest uppercase mb-1">From</p>
                    <p className="serif text-2xl">₹{s.price}</p>
                  </div>
                  <div>
                    <p className="text-brown/50 text-xs tracking-widest uppercase mb-1">Duration</p>
                    <p className="serif text-2xl">{s.duration}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button to="/booking">Book This Service</Button>
                  <Button to="/requirement" variant="secondary">Enquire</Button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="py-20 bg-cream text-center px-6">
          <p className="text-xs tracking-widest uppercase text-gold mb-4 reveal">Not sure?</p>
          <h2 className="serif text-3xl md:text-4xl mb-6 reveal">Tell me what you have in mind</h2>
          <div className="reveal">
            <Button to="/requirement">Share Your Requirement</Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
