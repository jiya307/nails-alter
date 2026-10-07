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
    document.title = "Reviews · Les Ongles";

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <main
        ref={ref}
        className="min-h-screen bg-[#f8f4ee] text-[#292522]"
      >
        {/* Hero */}
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-4 reveal">
              Les Ongles · Client Love
            </p>

            <h1 className="serif text-5xl md:text-7xl leading-tight mb-6 reveal">
              Words From
              <br />
              Our Clients.
            </h1>

            <p className="text-[#655c56] max-w-2xl leading-relaxed reveal">
              Every set is created with care, creativity and attention to
              detail. Here's what our clients have to say about their Les
              Ongles experience.
            </p>
          </div>
        </section>

        {/* Featured Review */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <div className="flex justify-center gap-1 mb-8 text-[#9b693f]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>

            <blockquote className="serif text-3xl md:text-5xl leading-snug mb-8 text-[#292522]">
              “{testimonials[0]?.text || "Beautiful nails, beautifully made."}”
            </blockquote>

            <p className="text-[11px] tracking-[0.25em] uppercase text-[#655c56]">
              {testimonials[0]?.name || "Les Ongles Client"}
              {testimonials[0]?.date && ` · ${testimonials[0].date}`}
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-3">
                Real Experiences
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Loved. Worn. Remembered.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-14 gap-y-16">
              {testimonials.slice(1).map((t) => (
                <article
                  key={t.id}
                  className="reveal border-t border-[#d8c7b7] pt-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5 text-[#9b693f]">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-[#655c56] leading-relaxed mb-7 text-lg">
                    “{t.text}”
                  </p>

                  {/* Client */}
                  <div className="flex justify-between items-center text-sm">
                    <span className="tracking-wide text-[#292522]">
                      {t.name}
                    </span>

                    {t.date && (
                      <span className="text-[#655c56]/60">
                        {t.date}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Quote */}
        <section className="py-24 bg-[#292522] text-[#f8f4ee] px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574] mb-6">
              The Les Ongles Philosophy
            </p>

            <h2 className="serif text-3xl md:text-5xl leading-tight">
              “Nails are a form of art,
              <br />
              creativity and self-expression.”
            </h2>

            <p className="text-[#d8cec6] max-w-xl mx-auto mt-7 leading-relaxed">
              From everyday elegance to customised luxury and bridal
              creations, every Les Ongles set is made to feel uniquely yours.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#eee4da] text-center px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-4 reveal">
              Your Turn
            </p>

            <h2 className="serif text-4xl md:text-5xl mb-6 reveal">
              Ready For Your
              <br />
              Own Les Ongles Set?
            </h2>

            <p className="text-[#655c56] max-w-xl mx-auto leading-relaxed mb-8 reveal">
              Tell us your occasion, design idea or inspiration and let's
              create something beautiful together.
            </p>

            <div className="reveal flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/extensions">
                EXPLORE EXTENSIONS →
              </Button>

              <a
                href="https://wa.me/917814117379"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-[#292522] text-[#292522] text-xs tracking-[0.18em] uppercase hover:bg-[#292522] hover:text-[#f8f4ee] transition-colors"
              >
                WhatsApp Us →
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}