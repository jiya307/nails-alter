import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

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
        className="
          relative
          overflow-hidden
          bg-[#f8f1f0]
          text-[#292322]
        "
      >
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-[90vh] flex items-end overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src="/images/about/studio-interior.png"
              alt="Les Ongles studio"
              className="w-full h-full object-cover"
            />

            {/* Luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2b171c]/75 via-[#4a2028]/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#241317]/75 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-20">
            <div className="max-w-3xl reveal">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#f3c7c9] mb-6">
                The Story Behind Les Ongles
              </p>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
                More Than Nails.
                <br />
                <span className="italic text-[#f2b9bd]">
                  A Story Of Art.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed">
                Born in Amritsar, India, Les Ongles began with a deep passion
                for nail artistry and a desire to create something different —
                beautiful, personal and crafted with intention.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO / BRAND STORY
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#fffafa]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div className="reveal">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#a65f69] mb-5">
                The Beginning
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Where creativity
                <br />
                became a calling.
              </h2>

              <div className="space-y-6 text-[#654d4e] leading-relaxed text-base md:text-lg">
                <p>
                  Born in Amritsar, India, Les Ongles began with a deep
                  passion for nail artistry and a desire to create something
                  different.
                </p>

                <p>
                  For its founder, nails have never been just about beauty.
                  They are a form of art, creativity and self-expression — a
                  space where imagination comes to life and creating becomes
                  a happy place.
                </p>

                <p>
                  This passion became the foundation of Les Ongles: a brand
                  created around the belief that nails can be both beautiful
                  and deeply personal.
                </p>
              </div>
            </div>

            {/* Studio Image */}
            <div className="reveal">
              <div className="aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  src="/images/about/studio-interior.png"
                  alt="Les Ongles nail studio interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            7+ YEARS
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#ead1d1]">
          <div className="max-w-6xl mx-auto text-center reveal">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9d5c65] mb-6">
              Experience
            </p>

            <div className="font-serif text-8xl md:text-[160px] leading-none text-[#a45f69]">
              7+
            </div>

            <h2 className="font-serif text-3xl md:text-5xl mt-5">
              Years In The Nail Industry
            </h2>

            <p className="max-w-2xl mx-auto mt-7 text-[#654d4e] leading-relaxed">
              Years of dedication, creativity and continuous refinement have
              shaped the artistic vision behind Les Ongles.
            </p>
          </div>
        </section>

        {/* =====================================================
            INSTANT LUXURY EXTENSIONS
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#f8f1f0]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <div className="reveal order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about/press-on-nail-collection.png"
                  alt="Les Ongles press-on nail collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="reveal order-1 lg:order-2">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#a65f69] mb-5">
                The Creation
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Instant Luxury
                <br />
                Extensions.
              </h2>

              <p className="text-[#654d4e] leading-relaxed mb-6">
                This passion led to the creation of Instant Luxury Extensions
                — thoughtfully crafted, naturally fitting and customisable
                extensions designed to look beautifully real and feel like an
                elevated extension of the wearer.
              </p>

              <p className="text-[#654d4e] leading-relaxed">
                Every extension is created with the intention of bringing
                together refinement, individuality and artistry.
              </p>

              <div className="mt-10">
                <Button to="/extensions" variant="secondary">
                  Explore Extensions →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NAIL ART / CRAFT
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#fffafa]">
          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl reveal mb-14">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#a65f69] mb-5">
                The Art
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                Every set tells
                <br />
                <span className="italic text-[#a65f69]">
                  a different story.
                </span>
              </h2>

              <p className="mt-7 text-[#654d4e] leading-relaxed max-w-2xl">
                From delicate bridal details to statement luxury designs,
                every Les Ongles creation is made to express individuality,
                personality and style.
              </p>
            </div>

            {/* Nail images */}
            <div className="grid md:grid-cols-3 gap-5">

              <div className="reveal aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about/luxury-nail-desgins.png"
                  alt="Les Ongles nail artistry"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="reveal aspect-[4/5] overflow-hidden md:mt-16">
                <img
                  src="/images/about/pink-luxury-nail-art.png"
                  alt="Les Ongles luxury nail design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="reveal aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about/champagne-pearl-floral-nails.png"
                  alt="Les Ongles bridal nail design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#ead1d1]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <div className="reveal">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about/nails.png"
                  alt="Professional nail education at Les Ongles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="reveal">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#a65f69] mb-5">
                Beyond Extensions
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Learn. Create.
                <br />
                Become.
              </h2>

              <p className="text-[#654d4e] leading-relaxed text-base md:text-lg mb-6">
                Les Ongles is more than extensions. It is also a platform for
                education, creativity and empowerment.
              </p>

              <p className="text-[#654d4e] leading-relaxed text-base md:text-lg">
                Through online and offline courses and classes, aspiring and
                growing nail artists can learn the craft, build confidence,
                create financial independence and discover the joy of creating
                with their hands.
              </p>

              <div className="mt-10">
                <Button to="/education" variant="secondary">
                  Explore Education →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CERTIFICATES / PROFESSIONAL JOURNEY
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#fffafa]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div className="reveal">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#a65f69] mb-5">
                The Journey
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Built on
                <br />
                <span className="italic text-[#a65f69]">
                  knowledge & craft.
                </span>
              </h2>

              <p className="text-[#654d4e] leading-relaxed text-base md:text-lg">
                Years of practice, learning and refinement continue to shape
                the Les Ongles approach to nail artistry and professional
                education.
              </p>
            </div>

            <div className="reveal">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about/certificates-and-products.png"
                  alt="Les Ongles professional nail certificates"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EMPOWERMENT
        ====================================================== */}

        <section className="py-24 md:py-32 px-6 bg-[#f5dfdf]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

            <div className="border border-[#c99599] p-8 md:p-10 reveal">
              <span className="font-serif text-3xl text-[#a65f69]">
                01
              </span>

              <h3 className="font-serif text-2xl mt-8 mb-4">
                Art
              </h3>

              <p className="text-sm text-[#654d4e] leading-relaxed">
                Creating with intention, imagination and attention to the
                smallest details.
              </p>
            </div>

            <div className="border border-[#c99599] p-8 md:p-10 reveal">
              <span className="font-serif text-3xl text-[#a65f69]">
                02
              </span>

              <h3 className="font-serif text-2xl mt-8 mb-4">
                Education
              </h3>

              <p className="text-sm text-[#654d4e] leading-relaxed">
                Helping aspiring artists learn the craft and build confidence
                in their abilities.
              </p>
            </div>

            <div className="border border-[#c99599] p-8 md:p-10 reveal">
              <span className="font-serif text-3xl text-[#a65f69]">
                03
              </span>

              <h3 className="font-serif text-2xl mt-8 mb-4">
                Independence
              </h3>

              <p className="text-sm text-[#654d4e] leading-relaxed">
                Creating opportunities for artists to turn creativity into
                financial independence.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            VISION
        ====================================================== */}

        <section className="relative py-32 px-6 bg-gradient-to-br from-[#5d3038] via-[#8e4d59] to-[#4a252d] text-[#fff4f1]">
          <div className="max-w-5xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#efc2c3] mb-7">
              The Vision
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10">
              From Amritsar
              <br />
              <span className="italic text-[#f1b7bc]">
                To The World.
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-[#ead7d3] text-base md:text-lg leading-relaxed">
              What began in Amritsar carries a much bigger vision: to build
              Les Ongles into an internationally recognised nail brand, while
              establishing its founder as a recognised nail artist and
              educator on an international stage.
            </p>
          </div>
        </section>

        {/* =====================================================
            PARIS
        ====================================================== */}

        <section className="py-28 md:py-36 px-6 bg-[#ead1d1]">
          <div className="max-w-4xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#a65f69] mb-6">
              A Personal Dream
            </p>

            <h2 className="font-serif text-6xl md:text-8xl leading-tight text-[#292522] mb-8">
              Paris.
            </h2>

            <p className="font-serif italic text-2xl md:text-3xl text-[#a65f69] leading-relaxed max-w-2xl mx-auto">
              A city that represents the artistry, beauty and luxury that has
              always inspired the founder.
            </p>

            <p className="max-w-2xl mx-auto mt-8 text-[#654d4e] leading-relaxed">
              Behind the vision of Les Ongles is a personal dream — Paris. A
              symbol of the artistry and luxury that continues to inspire the
              journey.
            </p>

          </div>
        </section>

        {/* =====================================================
            FINAL BRAND STATEMENT
        ====================================================== */}

        <section className="py-32 px-6 bg-[#fffafa]">
          <div className="max-w-4xl mx-auto text-center reveal">

            <p className="font-serif text-4xl md:text-6xl leading-tight text-[#292522]">
              Les Ongles is not just a brand.
            </p>

            <p className="font-serif italic text-3xl md:text-5xl text-[#a65f69] mt-5">
              It is her art.
              <br />
              Her identity.
              <br />
              Her love.
            </p>

            <p className="max-w-xl mx-auto mt-8 text-[#654d4e] leading-relaxed">
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