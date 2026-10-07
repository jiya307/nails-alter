import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

import Luxury from "../assets/Luxury.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "About · Les Ongles";

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.85,
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
      <div
        ref={ref}
        className="bg-[#f8f4ee] text-[#292522] overflow-hidden"
      >

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">

          <div className="max-w-4xl reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-5">
              The Story Behind Les Ongles
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-[#292522]">
              More Than Nails.
              <br />
              A Story Of Art.
            </h1>

            <p className="mt-8 max-w-2xl text-[#655c56] text-base md:text-lg leading-relaxed">
              Born in Amritsar, India, Les Ongles began with a deep
              passion for nail artistry and a desire to create
              something different.
            </p>

          </div>


          {/* Hero Image */}
          <div className="mt-16 reveal aspect-[16/8] overflow-hidden">

            <img
              src={Luxury}
              alt="Les Ongles luxury nail artistry"
              className="w-full h-full object-cover"
            />

          </div>

        </section>


        {/* =====================================================
            BRAND STORY
        ====================================================== */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-4xl mx-auto">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-5 reveal">
              The Beginning
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-10 reveal">
              Where creativity
              <br />
              became a calling.
            </h2>

            <div className="space-y-6 text-[#655c56] leading-relaxed text-base md:text-lg reveal">

              <p>
                Born in Amritsar, India, Les Ongles began with a
                deep passion for nail artistry and a desire to
                create something different.
              </p>

              <p>
                For its founder, nails have never been just about
                beauty. They are a form of art, creativity and
                self-expression — a space where imagination comes
                to life and creating becomes a happy place.
              </p>

              <p>
                This passion became the foundation of Les Ongles:
                a brand created around the belief that nails can
                be both beautiful and deeply personal.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            INSTANT LUXURY EXTENSIONS
        ====================================================== */}
        <section className="py-28 px-6">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="reveal">

              <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-5">
                The Creation
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Instant Luxury
                <br />
                Extensions.
              </h2>

              <p className="text-[#655c56] leading-relaxed mb-6">
                This passion led to the creation of Instant Luxury
                Extensions — thoughtfully crafted, naturally fitting
                and customisable extensions designed to look
                beautifully real and feel like an elevated extension
                of the wearer.
              </p>

              <p className="text-[#655c56] leading-relaxed">
                Every extension is created with the intention of
                bringing together refinement, individuality and
                artistry.
              </p>

              <div className="mt-10">
                <Button to="/extensions" variant="secondary">
                  Explore Extensions →
                </Button>
              </div>

            </div>


            {/* Image */}
            <div className="reveal aspect-[4/5] overflow-hidden">

              <img
                src={Luxury}
                alt="Instant Luxury Extensions by Les Ongles"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="py-28 px-6 bg-[#eee4da]">

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-5 reveal">
              Beyond Extensions
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 reveal">
              Learn. Create.
              <br />
              Become.
            </h2>

            <div className="max-w-2xl mx-auto reveal">

              <p className="text-[#655c56] leading-relaxed text-base md:text-lg mb-6">
                Les Ongles is more than extensions. It is also a
                platform for education, creativity and empowerment.
              </p>

              <p className="text-[#655c56] leading-relaxed text-base md:text-lg">
                Through online and offline courses and classes,
                aspiring and growing nail artists can learn the
                craft, build confidence, create financial
                independence and discover the joy of creating
                with their hands.
              </p>

            </div>

            <div className="mt-10 reveal">
              <Button to="/education" variant="secondary">
                Explore Education →
              </Button>
            </div>

          </div>

        </section>


        {/* =====================================================
            7+ YEARS
        ====================================================== */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-5xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-6">
              Experience
            </p>

            <div className="font-serif text-8xl md:text-[160px] leading-none text-[#9b693f]">
              7+
            </div>

            <h2 className="font-serif text-3xl md:text-5xl mt-5">
              Years In The Nail Industry
            </h2>

            <p className="max-w-2xl mx-auto mt-7 text-[#655c56] leading-relaxed">
              Years of dedication, creativity and continuous
              refinement have shaped the artistic vision behind
              Les Ongles.
            </p>

          </div>

        </section>


        {/* =====================================================
            EMPOWERMENT
        ====================================================== */}
        <section className="py-28 px-6 bg-[#f8f4ee]">

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

            <div className="border border-[#d8c7b7] p-8 md:p-10 reveal">

              <span className="font-serif text-3xl text-[#9b693f]">
                01
              </span>

              <h3 className="font-serif text-2xl mt-8 mb-4">
                Art
              </h3>

              <p className="text-sm text-[#655c56] leading-relaxed">
                Creating with intention, imagination and
                attention to the smallest details.
              </p>

            </div>


            <div className="border border-[#d8c7b7] p-8 md:p-10 reveal">

              <span className="font-serif text-3xl text-[#9b693f]">
                02
              </span>

              <h3 className="font-serif text-2xl mt-8 mb-4">
                Education
              </h3>

              <p className="text-sm text-[#655c56] leading-relaxed">
                Helping aspiring artists learn the craft and
                build confidence in their abilities.
              </p>

            </div>


            <div className="border border-[#d8c7b7] p-8 md:p-10 reveal">

              <span className="font-serif text-3xl text-[#9b693f]">
                03
              </span>

              <h3 className="font-serif text-2xl mt-8 mb-4">
                Independence
              </h3>

              <p className="text-sm text-[#655c56] leading-relaxed">
                Creating opportunities for artists to turn
                creativity into financial independence.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            VISION
        ====================================================== */}
        <section className="py-32 px-6 bg-[#292522] text-[#f8f4ee]">

          <div className="max-w-5xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#d4a574] mb-7">
              The Vision
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10">
              From Amritsar
              <br />
              To The World.
            </h2>

            <p className="max-w-3xl mx-auto text-[#d8cec6] text-base md:text-lg leading-relaxed">
              What began in Amritsar carries a much bigger
              vision: to build Les Ongles into an internationally
              recognised nail brand, while establishing its
              founder as a recognised nail artist and educator
              on an international stage.
            </p>

          </div>

        </section>


        {/* =====================================================
            PARIS
        ====================================================== */}
        <section className="py-32 px-6 bg-[#eee4da]">

          <div className="max-w-4xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-6">
              A Personal Dream
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight text-[#292522] mb-8">
              Paris.
            </h2>

            <p className="font-serif italic text-2xl md:text-3xl text-[#9b693f] leading-relaxed max-w-2xl mx-auto">
              A city that represents the artistry, beauty and
              luxury that has always inspired the founder.
            </p>

            <p className="max-w-2xl mx-auto mt-8 text-[#655c56] leading-relaxed">
              Behind the vision of Les Ongles is a personal dream
              — Paris. A symbol of the artistry and luxury that
              continues to inspire the journey.
            </p>

          </div>

        </section>


        {/* =====================================================
            FINAL BRAND STATEMENT
        ====================================================== */}
        <section className="py-32 px-6 bg-white">

          <div className="max-w-4xl mx-auto text-center reveal">

            <p className="font-serif text-4xl md:text-6xl leading-tight text-[#292522]">
              Les Ongles is not just a brand.
            </p>

            <p className="font-serif italic text-3xl md:text-5xl text-[#9b693f] mt-5">
              It is her art.
              <br />
              Her identity.
              <br />
              Her love.
            </p>

            <p className="max-w-xl mx-auto mt-8 text-[#655c56] leading-relaxed">
              And a dream still unfolding.
            </p>

            <div className="mt-10">
              <Button to="/contact" variant="secondary">
                Connect With Les Ongles →
              </Button>
            </div>

          </div>

        </section>

      </div>
    </PageTransition>
  );
}