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
          y: 35,
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

  const featuredReview = testimonials[0];

  return (
    <PageTransition>
      <main
        ref={ref}
        className="
          min-h-screen
          overflow-hidden
          bg-[#f4d8d4]
          text-[#292322]
        "
      >

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#fff4f1]/80 blur-3xl" />

            <div className="absolute right-[-140px] top-10 h-[480px] w-[480px] rounded-full bg-[#c98280]/30 blur-3xl" />

            <div className="absolute bottom-[-180px] left-[30%] h-[420px] w-[420px] rounded-full bg-[#7d2435]/15 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.30),transparent_40%,rgba(125,36,53,0.08))]" />

          </div>

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">

              <div className="reveal">

                <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#7d2435]">
                  Les Ongles · Client Love
                </p>

                <h1 className="serif text-5xl leading-[0.92] md:text-7xl lg:text-8xl">
                  Words
                  <br />
                  <span className="text-[#7d2435]">
                    From You.
                  </span>
                </h1>

              </div>

              <div className="reveal lg:pb-2">

                <p className="max-w-xl text-sm leading-7 text-[#604949] md:text-base">
                  Every Les Ongles set is created with care, creativity
                  and attention to detail. Here are some of the words
                  shared by the women who have experienced our artistry.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="border border-[#b98280]/50 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em]">
                    Handcrafted
                  </span>

                  <span className="border border-[#b98280]/50 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em]">
                    Luxury
                  </span>

                  <span className="border border-[#b98280]/50 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em]">
                    Client Love
                  </span>
                </div>

              </div>

            </div>

            <div className="mt-14 h-px bg-[#9f6668]/30" />

          </div>
        </section>

        {/* =====================================================
            FEATURED REVIEW
        ====================================================== */}
        <section className="relative px-6 py-24 md:py-32">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#c98280]/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl">

            <div
              className="
                reveal
                relative
                overflow-hidden
                border
                border-white/80
                bg-[#fff8f5]/75
                px-7
                py-14
                text-center
                shadow-[0_25px_70px_rgba(87,43,45,0.14)]
                backdrop-blur-sm
                md:px-16
                md:py-20
              "
            >

              <div className="absolute left-1/2 top-[-80px] h-48 w-48 -translate-x-1/2 rounded-full bg-[#c98280]/15 blur-3xl" />

              <div className="relative">

                <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#7d2435]">
                  Featured Client Love
                </p>

                <div className="mb-8 flex justify-center gap-1 text-[#b8894f]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>

                <blockquote className="serif mx-auto max-w-4xl text-3xl leading-snug text-[#382829] md:text-5xl">
                  “
                  {featuredReview?.text ||
                    "Beautiful nails, beautifully made."}
                  ”
                </blockquote>

                <div className="mx-auto mt-10 h-px w-16 bg-[#c98280]" />

                <p className="mt-7 text-[10px] uppercase tracking-[0.25em] text-[#705858]">
                  {featuredReview?.name || "Les Ongles Client"}
                </p>

                {featuredReview?.date && (
                  <p className="mt-2 text-xs text-[#9a7b79]">
                    {featuredReview.date}
                  </p>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            REVIEWS GRID
        ====================================================== */}
        <section className="relative bg-[#f9e8e5] px-6 py-24 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center reveal">

              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#7d2435]">
                Real Experiences
              </p>

              <h2 className="serif text-4xl md:text-6xl">
                Loved. Worn. Remembered.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#705858]">
                From first-time clients to women returning for their
                next signature set, every experience is part of the
                Les Ongles story.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {testimonials.slice(1).map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="
                    reveal
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/80
                    bg-[#fff8f5]/75
                    p-7
                    shadow-[0_15px_45px_rgba(87,43,45,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_25px_60px_rgba(87,43,45,0.14)]
                    md:p-9
                  "
                >

                  <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-[#c98280]/10 blur-2xl transition-all duration-500 group-hover:bg-[#c98280]/25" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex gap-1 text-[#b8894f]">
                        {[...Array(testimonial.rating || 5)].map(
                          (_, i) => (
                            <FaStar key={i} size={11} />
                          )
                        )}
                      </div>

                      <span className="serif text-3xl text-[#c98280]/60">
                        “
                      </span>

                    </div>

                    <p className="mt-7 text-sm leading-7 text-[#604949] md:text-base">
                      “{testimonial.text}”
                    </p>

                    <div className="mt-8 flex items-end justify-between border-t border-[#b98280]/25 pt-5">

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#382829]">
                          {testimonial.name}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#9a7b79]">
                          Les Ongles Client
                        </p>
                      </div>

                      {testimonial.date && (
                        <span className="text-[10px] text-[#9a7b79]">
                          {testimonial.date}
                        </span>
                      )}

                    </div>

                  </div>
                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            CLIENT EXPERIENCE
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#e7b7b4] px-6 py-24 md:py-32">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-white/30 blur-3xl" />

            <div className="absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#7d2435]/15 blur-3xl" />

          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">

            <div className="reveal">

              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#7d2435]">
                The Experience
              </p>

              <h2 className="serif text-4xl leading-tight md:text-6xl">
                More Than
                <br />
                <span className="text-[#7d2435]">
                  Just Nails.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#604949]">
                Les Ongles is about creating a moment where artistry,
                beauty and self-expression come together. Every set is
                created to make you feel confident, beautiful and
                completely yourself.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="border border-white/60 bg-white/30 p-5">
                  <span className="serif text-3xl text-[#7d2435]">
                    01
                  </span>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.16em]">
                    Creativity
                  </p>
                </div>

                <div className="border border-white/60 bg-white/30 p-5">
                  <span className="serif text-3xl text-[#7d2435]">
                    02
                  </span>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.16em]">
                    Confidence
                  </p>
                </div>

              </div>

            </div>

            <div className="reveal">

              <div className="border border-white/70 bg-[#fff8f5]/60 p-8 backdrop-blur-sm md:p-12">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#7d2435]">
                  Les Ongles Philosophy
                </p>

                <div className="mt-7">
                  <span className="serif text-5xl text-[#c98280]">
                    “
                  </span>

                  <h3 className="serif mt-1 text-3xl leading-tight text-[#382829] md:text-4xl">
                    Nails are a form of art,
                    creativity and
                    self-expression.
                  </h3>

                  <div className="mt-7 h-px w-16 bg-[#7d2435]" />

                  <p className="mt-6 text-sm leading-7 text-[#705858]">
                    From everyday elegance to customised luxury and
                    bridal creations, every Les Ongles set is made
                    to feel uniquely yours.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#4a1722] px-6 py-24 text-[#fff8f5] md:py-32">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c98280]/15 blur-3xl" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.07),transparent_35%)]" />

          </div>

          <div className="relative mx-auto max-w-3xl text-center">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#e8b7b5] reveal">
              Your Turn
            </p>

            <h2 className="serif text-4xl leading-tight md:text-6xl reveal">
              Ready For Your
              <br />
              <span className="text-[#e8b7b5]">
                Les Ongles Set?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#ead8d5] reveal">
              Tell us your occasion, design idea or inspiration and
              let's create something beautiful together.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 reveal">

              <Button
                to="/extensions"
                className="!bg-[#f7e6e1] !text-[#4a1722] hover:!bg-[#c98280] hover:!text-white"
              >
                Explore Extensions →
              </Button>

              <a
                href="https://wa.me/917814117379"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-[#f7e6e1]/60
                  px-7
                  py-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#f7e6e1]
                  transition-all
                  duration-300
                  hover:bg-[#f7e6e1]
                  hover:text-[#4a1722]
                "
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