import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "About the Artist · Priya Atelier";
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.85,
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
        {/* Hero portrait */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold mb-2 reveal">The Artist</p>
          <h1 className="serif text-5xl md:text-6xl mb-12 reveal">Meet Priya</h1>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal aspect-[3/4] overflow-hidden bg-cream">
              <img
                src="https://i.pinimg.com/736x/65/64/16/6564168a8a0f6f0a25944c98c16241c2.jpg"
                alt="Priya - Nail Artist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="reveal lg:pt-8">
              <h2 className="serif text-3xl md:text-4xl mb-6 leading-snug">
                The tiniest details can hold the most feeling.
              </h2>
              <p className="text-brown/80 leading-relaxed mb-6">
                priya Atelier began as a quiet practice — a private space where nail art is treated as a considered craft rather than a quick service. Every set is a conversation about colour, proportion, texture, and the version of yourself you want to take with you.
              </p>
              <p className="text-brown/80 leading-relaxed">
                Based in New Delhi, Priya works one-on-one with clients who value precision, longevity, and designs that feel personal rather than trendy for a moment.
              </p>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-20 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs tracking-widest uppercase text-gold mb-4 reveal">Journey</p>
            <h2 className="serif text-4xl mb-8 reveal">How it started</h2>
            <div className="space-y-6 text-brown/80 leading-relaxed reveal">
              <p>
                What began as a fascination with the architecture of the nail — shape, apex, free edge — grew into a dedicated practice. After formal training and years of refining technique, Priya opened a private studio focused entirely on custom nail artistry.
              </p>
              <p>
                There are no walk-in queues and no rushed appointments. Each session is booked with intention, allowing time for consultation, careful preparation, and work that is meant to last.
              </p>
            </div>
          </div>
        </section>

        {/* Specialization & Philosophy */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal">
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Specialization</p>
              <h2 className="serif text-3xl mb-6">What she is known for</h2>
              <ul className="space-y-4 text-brown/80">
                <li className="border-b border-nude pb-4">Soft chrome and mirror finishes</li>
                <li className="border-b border-nude pb-4">Bridal and occasion sets with photographic detail</li>
                <li className="border-b border-nude pb-4">Minimal, high-gloss everyday luxury</li>
                <li className="border-b border-nude pb-4">Custom sculpted extensions with natural structure</li>
                <li>Hand-painted accents and gold foil work</li>
              </ul>
            </div>
            <div className="reveal">
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Philosophy</p>
              <h2 className="serif text-3xl mb-6">Why nail art matters</h2>
              <p className="text-brown/80 leading-relaxed mb-6">
                Nails are small, but they are always present. They appear in every photograph, every gesture, every quiet moment of the day. Priya believes they deserve the same care as any other considered detail of personal style.
              </p>
              <p className="text-brown/80 leading-relaxed">
                The goal is never excess for its own sake — it is proportion, colour that flatters, and a finish that feels intentional.
              </p>
            </div>
          </div>
        </section>

        {/* Studio */}
        <section className="py-20 bg-white text-black">
          <div className="max-w-3xl mx-auto px-6 text-center reveal">
            <p className="text-xs tracking-widest uppercase text-gold mb-4">The Studio</p>
            <h2 className="serif text-4xl mb-6">A quiet space in New Delhi</h2>
            <p className="text-black/75 leading-relaxed mb-10">
              Appointments are private. The studio is designed for calm focus — good light, clean tools, and uninterrupted time so the work can be precise.
            </p>
            <Button to="/booking" className="bg-pink-200 text-black hover:bg-gold">Book a Session</Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
