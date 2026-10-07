import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import DesignCard from "../components/DesignCard";

import { designs } from "../data/designs";
import { testimonials } from "../data/testimonials";
import Luxury from "../assets/Luxury.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    document.title = "Les Ongles · Instant Luxury Extensions & Nail Education";

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".hero-text > *", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      // Feature animation
      gsap.from(".feature-item", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.7,
      });

      // Scroll reveals
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      number: "7+",
      title: "YEARS",
      text: "Nail Industry Experience",
    },
    {
      number: "01",
      title: "INSTANT LUXURY",
      text: "Naturally Fitting Extensions",
    },
    {
      number: "02",
      title: "CUSTOM",
      text: "Made For Your Style",
    },
    {
      number: "03",
      title: "EDUCATION",
      text: "Online & Offline Learning",
    },
  ];

  return (
    <PageTransition>
      <div
        ref={heroRef}
        className="bg-[#f8f4ee] text-[#25211f] overflow-hidden"
      >

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-[center_right] bg-no-repeat"
            style={{
              backgroundImage: `url(${Luxury})`,
            }}
          />

          {/* Soft luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f4ee]/85 via-[#f8f4ee]/15 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-36">

            <div className="hero-text max-w-2xl">

              {/* Location */}
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#9b693f] mb-6">
                Amritsar · India
              </p>

              {/* Main Heading */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[78px] leading-[0.98] tracking-[-0.03em] text-[#211d1b] mb-7">
                Instant Luxury.
                <br />
                Beautifully You.
              </h1>

              {/* Tagline */}
              <p className="text-sm md:text-base tracking-[0.28em] uppercase text-[#302a27] mb-6 max-w-xl">
                Instant Luxury Extensions
                <br />
                & Nail Education
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-[#5f5650] max-w-lg leading-relaxed mb-10">
                Naturally fitting, customisable extensions designed
                to look refined, realistic and beautifully crafted.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <Button
                  to="/extensions"
                  variant="secondary"
                  className="
                    !bg-[#292522]
                    !text-white
                    !border-[#292522]
                    px-7
                    py-3.5
                    tracking-[0.14em]
                    uppercase
                    text-xs
                    hover:!bg-[#9b693f]
                  "
                >
                  Explore Extensions →
                </Button>

                <Button
                  to="/education"
                  variant="secondary"
                  className="
                    !bg-transparent
                    !text-[#292522]
                    !border-[#292522]
                    px-7
                    py-3.5
                    tracking-[0.14em]
                    uppercase
                    text-xs
                    hover:!bg-[#292522]
                    hover:!text-white
                  "
                >
                  Learn With Les Ongles →
                </Button>

              </div>
            </div>
          </div>

          {/* Feature Strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#f8f4ee]/90 backdrop-blur-sm border-t border-[#9b693f]/20">

            <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 lg:grid-cols-4">

              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`
                    feature-item
                    px-5
                    lg:px-8
                    py-2
                    ${
                      index !== 0
                        ? "border-l border-[#9b693f]/20"
                        : ""
                    }
                  `}
                >

                  <div className="flex items-start gap-4">

                    <span className="font-serif text-2xl text-[#9b693f]">
                      {feature.number}
                    </span>

                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#7b5031] font-medium">
                        {feature.title}
                      </p>

                      <p className="text-xs text-[#655c56] mt-1 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* =====================================================
            BRAND INTRO
        ====================================================== */}
        <section className="py-28 md:py-36 px-6">

          <div className="max-w-4xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-6">
              The Les Ongles Story
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[#28221f] mb-8">
              More Than Nails.
              <br />
              It&apos;s An Art Form.
            </h2>

            <p className="max-w-2xl mx-auto text-[#655c56] leading-relaxed text-base md:text-lg">
              Born in Amritsar, India, Les Ongles was created from
              a deep passion for nail artistry, creativity and
              self-expression.
            </p>

            <p className="max-w-2xl mx-auto text-[#655c56] leading-relaxed text-base md:text-lg mt-5">
              Today, Les Ongles brings together Instant Luxury
              Extensions and professional nail education —
              creating beautifully crafted nails while helping
              aspiring artists discover the joy of creating
              with their hands.
            </p>

            <div className="mt-9">
              <Button to="/about" variant="ghost">
                Discover Our Story →
              </Button>
            </div>

          </div>

        </section>


        {/* =====================================================
            EXTENSIONS
        ====================================================== */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-end mb-16 reveal">

              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                  Instant Luxury Extensions
                </p>

                <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[#28221f]">
                  Designed To Fit.
                  <br />
                  Crafted To Impress.
                </h2>
              </div>

              <p className="text-[#655c56] max-w-lg leading-relaxed">
                Thoughtfully crafted, naturally fitting and
                customisable extensions designed to look
                beautifully real and feel like an elevated
                extension of the wearer.
              </p>

            </div>


            {/* Extension Features */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="border border-[#d8c7b7] p-8 reveal">
                <span className="text-[#9b693f] text-2xl">
                  01
                </span>

                <h3 className="font-serif text-2xl mt-8 mb-4">
                  Natural Fit
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Designed to complement the natural shape
                  and appearance of your nails.
                </p>
              </div>


              <div className="border border-[#d8c7b7] p-8 reveal">
                <span className="text-[#9b693f] text-2xl">
                  02
                </span>

                <h3 className="font-serif text-2xl mt-8 mb-4">
                  Customisable
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Your nails should reflect your personality,
                  style and individuality.
                </p>
              </div>


              <div className="border border-[#d8c7b7] p-8 reveal">
                <span className="text-[#9b693f] text-2xl">
                  03
                </span>

                <h3 className="font-serif text-2xl mt-8 mb-4">
                  Beautifully Crafted
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Refined details and finishes created with
                  a focus on luxury and realism.
                </p>
              </div>

            </div>

            <div className="mt-12 text-center reveal">
              <Button to="/extensions" variant="secondary">
                Explore Extensions →
              </Button>
            </div>

          </div>
        </section>


        {/* =====================================================
            SELECTED DESIGNS
        ====================================================== */}
        <section className="py-28 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-12 reveal">

              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-3">
                  The Art Of Les Ongles
                </p>

                <h2 className="font-serif text-4xl md:text-5xl text-[#28221f]">
                  Signature Work
                </h2>
              </div>

              <Button to="/portfolio" variant="ghost">
                View Portfolio →
              </Button>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {designs.slice(0, 3).map((design) => (
                <div key={design.id} className="reveal">
                  <DesignCard design={design} />
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="py-28 px-6 bg-[#eee4da]">

          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto reveal">

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-5">
                Les Ongles Education
              </p>

              <h2 className="font-serif text-4xl md:text-6xl text-[#28221f] leading-tight">
                Create.
                <br />
                Learn. Grow.
              </h2>

              <p className="mt-7 text-[#655c56] leading-relaxed">
                Les Ongles is more than extensions. It is a
                platform for aspiring and growing nail artists
                to learn the craft, build confidence and create
                financial independence.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-6 mt-16">

              <div className="bg-[#f8f4ee] p-10 md:p-14 reveal">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f]">
                  01
                </p>

                <h3 className="font-serif text-3xl mt-7 mb-5">
                  Online Courses
                </h3>

                <p className="text-[#655c56] leading-relaxed mb-8">
                  Learn from wherever you are and build your
                  nail artistry skills at your own pace.
                </p>

                <Button to="/education" variant="ghost">
                  Explore Courses →
                </Button>

              </div>


              <div className="bg-[#f8f4ee] p-10 md:p-14 reveal">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f]">
                  02
                </p>

                <h3 className="font-serif text-3xl mt-7 mb-5">
                  Offline Classes
                </h3>

                <p className="text-[#655c56] leading-relaxed mb-8">
                  Hands-on learning, practical guidance and
                  personalised support for aspiring nail artists.
                </p>

                <Button to="/education" variant="ghost">
                  View Classes →
                </Button>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            FOUNDER
        ====================================================== */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="reveal aspect-[4/5] overflow-hidden">

              <img
                src={Luxury}
                alt="Les Ongles nail artistry"
                className="w-full h-full object-cover"
              />

            </div>


            {/* Text */}
            <div className="reveal">

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-5">
                The Woman Behind Les Ongles
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[#28221f] mb-8">
                Her Art.
                <br />
                Her Identity.
                <br />
                Her Love.
              </h2>

              <p className="text-[#655c56] leading-relaxed max-w-lg mb-5">
                For its founder, nails have never been just
                about beauty. They are a form of art, creativity
                and self-expression — a space where imagination
                comes to life.
              </p>

              <p className="text-[#655c56] leading-relaxed max-w-lg mb-8">
                With more than seven years in the nail industry,
                that passion has grown into a vision for a
                globally recognised nail brand and education
                platform.
              </p>

              <div className="border-t border-[#d8c7b7] pt-7 mb-8">

                <span className="font-serif text-5xl text-[#9b693f]">
                  7+
                </span>

                <p className="text-xs tracking-[0.2em] uppercase text-[#655c56] mt-2">
                  Years In The Nail Industry
                </p>

              </div>

              <Button to="/about" variant="secondary">
                Meet The Founder →
              </Button>

            </div>

          </div>

        </section>


        {/* =====================================================
            AMRITSAR TO THE WORLD
        ====================================================== */}
        <section className="py-32 px-6 bg-[#28221f] text-[#f8f4ee]">

          <div className="max-w-5xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#d4a574] mb-7">
              The Vision
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-9">
              From Amritsar
              <br />
              To The World.
            </h2>

            <p className="max-w-2xl mx-auto text-[#d8cec6] leading-relaxed text-base md:text-lg">
              What began in Amritsar carries a much bigger
              vision — to build Les Ongles into an internationally
              recognised nail brand, while establishing its
              founder as a recognised nail artist and educator
              on an international stage.
            </p>

            <p className="font-serif italic text-2xl md:text-3xl text-[#d4a574] mt-10">
              A dream inspired by Paris.
              <br />
              A journey still unfolding.
            </p>

          </div>

        </section>


        {/* =====================================================
            TESTIMONIAL
        ====================================================== */}
        <section className="py-28 px-6 bg-[#f8f4ee]">

          <div className="max-w-3xl mx-auto text-center reveal">

            <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-8">
              The Les Ongles Experience
            </p>

            <blockquote className="font-serif text-3xl md:text-5xl text-[#28221f] leading-snug mb-8">
              “{testimonials[0].text}”
            </blockquote>

            <p className="text-xs tracking-[0.25em] uppercase text-[#655c56]">
              {testimonials[0].name}
            </p>

            <div className="mt-10">
              <Button to="/reviews" variant="ghost">
                Read All Reviews →
              </Button>
            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="py-32 px-6 text-center bg-white">

          <div className="max-w-3xl mx-auto reveal">

            <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-5">
              Discover Les Ongles
            </p>

            <h2 className="font-serif text-5xl md:text-7xl text-[#28221f] leading-tight mb-8">
              Your Nails.
              <br />
              Your Art.
              <br />
              Your Story.
            </h2>

            <p className="text-[#655c56] max-w-xl mx-auto leading-relaxed mb-10">
              Discover Instant Luxury Extensions or begin your
              journey as a nail artist with Les Ongles Education.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Button
                to="/extensions"
                variant="secondary"
              >
                Explore Extensions
              </Button>

              <Button
                to="/education"
                variant="ghost"
              >
                Explore Education
              </Button>

            </div>

          </div>

        </section>

      </div>
    </PageTransition>
  );
}