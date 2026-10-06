import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { testimonials } from "../data/testimonials";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "Reviews · Arsh Atelier";
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
          <p className="text-xs tracking-widest uppercase text-gold mb-2 reveal">Client Words</p>
          <h1 className="serif text-5xl md:text-6xl mb-6 reveal">Reviews</h1>
          <p className="text-brown/80 max-w-xl reveal">
            Quiet feedback from women who value precision and a calm, considered experience.
          </p>
        </section>

        {/* Featured large quote */}
        <section className="py-16 bg-charcoal text-ivory">
          <div className="max-w-3xl mx-auto px-6 text-center reveal">
            <div className="flex justify-center gap-1 mb-8 text-gold">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
            <blockquote className="serif text-3xl md:text-4xl leading-snug mb-8">
              “{testimonials[0].text}”
            </blockquote>
            <p className="text-sm tracking-widest uppercase text-ivory/60">
              {testimonials[0].name} · {testimonials[0].date}
            </p>
          </div>
        </section>

        {/* Grid of reviews */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {testimonials.slice(1).map((t) => (
              <article key={t.id} className="reveal border-t border-nude pt-10">
                <div className="flex gap-1 mb-4 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
                <p className="text-brown/85 leading-relaxed mb-6 text-lg">“{t.text}”</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="tracking-wide">{t.name}</span>
                  <span className="text-brown/50">{t.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 bg-cream text-center px-6">
          <h2 className="serif text-3xl mb-6 reveal">Ready for your own experience?</h2>
          <div className="reveal">
            <Button to="/booking">Book an Appointment</Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
