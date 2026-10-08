import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const designs = [
  {
    title: "Pink Luxury",
    image: "/images/about/pink-luxury-nail-art.png",
  },
  {
    title: "Champagne Pearl Floral",
    image: "/images/about/champagne-pearl-floral-nails.png",
  },
  {
    title: "Pearl Glow Bow",
    image: "/images/about/pearl-glow-bow-nails.png",
  },
];

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    document.title =
      "LES ONGLES · Instant Luxury Extensions & Nail Education";

    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".stat-card", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    const message =
      "Hello LES ONGLES! I would like to enquire about your Instant Luxury Extensions and nail services.";

    window.open(
      `https://wa.me/917814117379?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <PageTransition>
      <main
        ref={pageRef}
        className="
          min-h-screen
          overflow-hidden
          text-[#292322]
          bg-[#FAF6F2]
        "
      >
        {/* =========================================================
            HERO
        ========================================================= */}

        <section
          className="
            relative
            min-h-[100svh]
            md:min-h-screen
            overflow-hidden
            flex
            items-center
            bg-[radial-gradient(circle_at_15%_15%,#fff8f6_0%,transparent_25%),radial-gradient(circle_at_85%_20%,#edc1bc_0%,transparent_30%),radial-gradient(circle_at_25%_90%,#b96f70_0%,transparent_38%),linear-gradient(135deg,#f8dfdb,#d69b97,#a9686b,#d1938f)]
          "
        >
          {/* Shine */}
          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-[radial-gradient(ellipse_at_25%_20%,rgba(255,255,255,0.48),transparent_18%),radial-gradient(ellipse_at_80%_30%,rgba(255,255,255,0.22),transparent_20%)]
            "
          />

          {/* Studio image */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              md:bg-[center_right]
            "
            style={{
              backgroundImage:
                "url('/images/about/studio-interior.png')",
            }}
          />

          {/* Image overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#4A1722]/75
              via-[#7D2435]/35
              to-transparent
            "
          />

          {/* Mobile readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#4A1722]/60
              via-transparent
              to-transparent
              md:hidden
            "
          />

          <div
            className="
              relative
              z-10
              w-full
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-16
              py-32
              md:py-40
            "
          >
            <div
              className="
                hero-content
                max-w-2xl
                text-white
              "
            >
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  tracking-[0.35em]
                  uppercase
                  text-[#F7E6E1]
                  mb-5
                "
              >
                Amritsar · Punjab · India
              </p>

              <h1
                className="
                  font-serif
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[88px]
                  leading-[0.9]
                  tracking-[-0.04em]
                  mb-7
                "
              >
                Instant
                <br />
                Luxury.
                <br />
                <span className="text-[#F7D8D3]">
                  Beautifully You.
                </span>
              </h1>

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  tracking-[0.2em]
                  uppercase
                  text-[#FAEDEA]
                  max-w-xl
                  leading-[1.8]
                  mb-6
                "
              >
                Instant Luxury Extensions
                <br />
                & Nail Education
              </p>

              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-white/80
                  max-w-lg
                  leading-relaxed
                  mb-8
                "
              >
                Naturally fitting, customisable extensions created
                with refined details, realistic finishes and a love
                for nail artistry.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  to="/extensions"
                  className="
                    !bg-[#F7E6E1]
                    !text-[#4A1722]
                    !border-[#F7E6E1]
                    hover:!bg-white
                    px-7
                    py-4
                    rounded-full
                  "
                >
                  Explore Extensions
                </Button>

                <Button
                  to="/education"
                  variant="secondary"
                  className="
                    !bg-transparent
                    !text-white
                    !border-white/60
                    hover:!bg-white
                    hover:!text-[#4A1722]
                    px-7
                    py-4
                    rounded-full
                  "
                >
                  Learn With LES ONGLES
                </Button>
              </div>
            </div>
          </div>

          {/* =======================================================
              STATS
          ======================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-20
              bg-[#FAF6F2]/90
              backdrop-blur-xl
              border-t
              border-[#7D2435]/15
            "
          >
            <div
              className="
                max-w-7xl
                mx-auto
                grid
                grid-cols-2
                lg:grid-cols-4
              "
            >
              {[
                ["7+", "YEARS", "Nail Industry Experience"],
                ["01", "INSTANT LUXURY", "Naturally Fitting Extensions"],
                ["02", "CUSTOM", "Made For Your Style"],
                ["03", "EDUCATION", "Online & Offline Learning"],
              ].map(([number, title, text], index) => (
                <div
                  key={title}
                  className={`
                    stat-card
                    p-5
                    sm:p-6
                    lg:p-7
                    ${
                      index !== 0
                        ? "border-l border-[#7D2435]/15"
                        : ""
                    }
                    ${
                      index >= 2
                        ? "border-t border-[#7D2435]/15 lg:border-t-0"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-2xl text-[#7D2435]">
                      {number}
                    </span>

                    <div>
                      <p
                        className="
                          text-[9px]
                          sm:text-[10px]
                          tracking-[0.18em]
                          uppercase
                          text-[#7D2435]
                          font-medium
                        "
                      >
                        {title}
                      </p>

                      <p className="text-[10px] sm:text-xs text-[#4A1722]/60 mt-1">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BRAND INTRO
        ========================================================= */}

        <section
          className="
            relative
            py-24
            sm:py-28
            md:py-36
            px-6
            bg-[#FAF6F2]
          "
        >
          <div className="max-w-4xl mx-auto text-center reveal">
            <p
              className="
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                uppercase
                text-[#7D2435]
                mb-6
              "
            >
              The LES ONGLES Story
            </p>

            <h2
              className="
                font-serif
                text-4xl
                sm:text-5xl
                md:text-6xl
                leading-tight
                text-[#4A1722]
                mb-8
              "
            >
              More Than Nails.
              <br />
              <span className="text-[#A9686B]">
                It&apos;s An Art Form.
              </span>
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto
                text-[#4A1722]/65
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              Born in Amritsar, LES ONGLES was created from a
              deep passion for nail artistry, creativity and
              self-expression.
            </p>

            <p
              className="
                max-w-2xl
                mx-auto
                text-[#4A1722]/65
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                mt-5
              "
            >
              From Instant Luxury Extensions to professional nail
              education, LES ONGLES is a space where beauty,
              creativity and confidence come together.
            </p>

            <div className="mt-9">
              <Button
                to="/about"
                variant="ghost"
                className="
                  !text-[#7D2435]
                  !border-[#7D2435]
                  hover:!bg-[#7D2435]
                  hover:!text-white
                "
              >
                Discover Our Story →
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            EXTENSIONS
        ========================================================= */}

        <section
          className="
            py-24
            sm:py-28
            px-6
            bg-[radial-gradient(circle_at_10%_15%,#fff7f5_0%,transparent_25%),radial-gradient(circle_at_90%_80%,#c98382_0%,transparent_30%),linear-gradient(135deg,#f4d6d1,#dfaca8,#c17b7c)]
          "
        >
          <div className="max-w-7xl mx-auto">
            <div
              className="
                grid
                lg:grid-cols-2
                gap-10
                lg:gap-16
                items-center
                mb-14
                reveal
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    tracking-[0.3em]
                    uppercase
                    text-[#7D2435]
                    mb-4
                  "
                >
                  Instant Luxury Extensions
                </p>

                <h2
                  className="
                    font-serif
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    leading-tight
                    text-[#4A1722]
                  "
                >
                  Designed To Fit.
                  <br />
                  <span className="text-[#7D2435]">
                    Crafted To Impress.
                  </span>
                </h2>
              </div>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-[#4A1722]/65
                  max-w-lg
                  leading-relaxed
                "
              >
                Thoughtfully crafted, naturally fitting and
                customisable extensions designed to look
                beautifully real and feel like an elevated
                extension of you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  title: "Natural Fit",
                  text: "Designed to complement the natural shape and appearance of your nails.",
                },
                {
                  number: "02",
                  title: "Customisable",
                  text: "Your nails should reflect your personality, style and individuality.",
                },
                {
                  number: "03",
                  title: "Luxury Finish",
                  text: "Refined details and finishes created with a focus on luxury and realism.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="
                    reveal
                    p-7
                    sm:p-8
                    rounded-3xl
                    bg-white/35
                    backdrop-blur-xl
                    border
                    border-white/60
                    shadow-lg
                  "
                >
                  <span className="font-serif text-2xl text-[#7D2435]">
                    {item.number}
                  </span>

                  <h3
                    className="
                      font-serif
                      text-2xl
                      text-[#4A1722]
                      mt-8
                      mb-4
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A1722]/65 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center reveal">
              <Button
                to="/extensions"
                className="
                  !bg-[#7D2435]
                  !border-[#7D2435]
                  !text-white
                  hover:!bg-[#4A1722]
                  rounded-full
                  px-7
                  py-4
                "
              >
                Explore Extensions →
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            SIGNATURE DESIGNS
        ========================================================= */}

        <section className="py-24 sm:py-28 px-6 bg-[#FAF6F2]">
          <div className="max-w-7xl mx-auto">
            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                items-start
                sm:items-end
                gap-5
                mb-12
                reveal
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    tracking-[0.3em]
                    uppercase
                    text-[#7D2435]
                    mb-3
                  "
                >
                  The Art Of LES ONGLES
                </p>

                <h2
                  className="
                    font-serif
                    text-4xl
                    sm:text-5xl
                    text-[#4A1722]
                  "
                >
                  Signature Work
                </h2>
              </div>

              <Button
                to="/portfolio"
                variant="ghost"
                className="
                  !text-[#7D2435]
                  !border-[#7D2435]
                  hover:!bg-[#7D2435]
                  hover:!text-white
                "
              >
                View Portfolio →
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {designs.map((design) => (
                <div
                  key={design.title}
                  className="
                    reveal
                    group
                    overflow-hidden
                    rounded-[1.5rem]
                    bg-white
                    border
                    border-[#7D2435]/10
                    shadow-[0_15px_45px_rgba(74,23,34,0.08)]
                  "
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-5">
                    <p className="font-serif text-xl text-[#4A1722]">
                      {design.title}
                    </p>

                    <p
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        text-[#7D2435]/60
                        mt-1
                      "
                    >
                      LES ONGLES
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            STUDIO
        ========================================================= */}

        <section
          className="
            py-24
            sm:py-28
            px-6
            bg-[#4A1722]
            text-[#FAF6F2]
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              grid
              lg:grid-cols-2
              gap-10
              lg:gap-16
              items-center
            "
          >
            <div className="reveal">
              <div
                className="
                  rounded-[2rem]
                  overflow-hidden
                  border
                  border-white/15
                  shadow-2xl
                "
              >
                <img
                  src="/images/about/nail-workstation.png"
                  alt="LES ONGLES nail workstation"
                  className="
                    w-full
                    aspect-[4/5]
                    object-cover
                  "
                />
              </div>
            </div>

            <div className="reveal">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  tracking-[0.3em]
                  uppercase
                  text-[#E8B7B5]
                  mb-5
                "
              >
                The LES ONGLES Experience
              </p>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  leading-tight
                  mb-7
                "
              >
                Where Beauty
                <br />
                Becomes Art.
              </h2>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-white/65
                  leading-relaxed
                  max-w-lg
                  mb-5
                "
              >
                Every detail at LES ONGLES is created around
                artistry, individuality and the experience of
                feeling beautiful.
              </p>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-white/65
                  leading-relaxed
                  max-w-lg
                  mb-8
                "
              >
                From your first consultation to your final set,
                every nail is thoughtfully crafted to feel
                personal, polished and unmistakably yours.
              </p>

              <Button
                to="/about"
                variant="secondary"
                className="
                  !bg-[#F7E6E1]
                  !text-[#4A1722]
                  !border-[#F7E6E1]
                  hover:!bg-white
                  rounded-full
                "
              >
                Discover LES ONGLES →
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            EDUCATION
        ========================================================= */}

        <section
          className="
            py-24
            sm:py-28
            px-6
            bg-[#F7E6E1]
          "
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto reveal">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  tracking-[0.3em]
                  uppercase
                  text-[#7D2435]
                  mb-5
                "
              >
                LES ONGLES Education
              </p>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  text-[#4A1722]
                  leading-tight
                "
              >
                Create.
                <br />
                Learn.
                <br />
                <span className="text-[#A9686B]">Grow.</span>
              </h2>

              <p
                className="
                  mt-7
                  text-sm
                  sm:text-base
                  text-[#4A1722]/65
                  leading-relaxed
                "
              >
                LES ONGLES is also a platform for aspiring and
                growing nail artists to learn the craft, build
                confidence and create opportunities for
                financial independence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-14">
              <div
                className="
                  reveal
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  border
                  border-[#7D2435]/10
                "
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/about/certificates-and-products.png"
                    alt="LES ONGLES certificates and nail products"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#7D2435]">
                    01 · Professional Learning
                  </p>

                  <h3 className="font-serif text-3xl text-[#4A1722] mt-4 mb-4">
                    Online Courses
                  </h3>

                  <p className="text-sm text-[#4A1722]/60 leading-relaxed mb-7">
                    Learn nail artistry from wherever you are and
                    develop skills that can grow into a creative
                    career.
                  </p>

                  <Button
                    to="/education"
                    variant="ghost"
                    className="
                      !text-[#7D2435]
                      !border-[#7D2435]
                      hover:!bg-[#7D2435]
                      hover:!text-white
                    "
                  >
                    Explore Courses →
                  </Button>
                </div>
              </div>

              <div
                className="
                  reveal
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  border
                  border-[#7D2435]/10
                "
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/about/nails.png"
                    alt="LES ONGLES nail studio tools"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#7D2435]">
                    02 · Hands-On Experience
                  </p>

                  <h3 className="font-serif text-3xl text-[#4A1722] mt-4 mb-4">
                    Offline Classes
                  </h3>

                  <p className="text-sm text-[#4A1722]/60 leading-relaxed mb-7">
                    Practical guidance, hands-on learning and
                    personalised support for aspiring nail
                    artists.
                  </p>

                  <Button
                    to="/education"
                    variant="ghost"
                    className="
                      !text-[#7D2435]
                      !border-[#7D2435]
                      hover:!bg-[#7D2435]
                      hover:!text-white
                    "
                  >
                    View Classes →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOUNDER / STORY
        ========================================================= */}

        <section className="py-24 sm:py-28 px-6 bg-[#FAF6F2]">
          <div
            className="
              max-w-7xl
              mx-auto
              grid
              lg:grid-cols-2
              gap-10
              lg:gap-16
              items-center
            "
          >
            <div className="reveal">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/about/luxury-nail-desgins.png"
                  alt="LES ONGLES luxury nail artistry"
                  className="
                    w-full
                    aspect-[4/5]
                    object-cover
                  "
                />
              </div>
            </div>

            <div className="reveal">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  tracking-[0.3em]
                  uppercase
                  text-[#7D2435]
                  mb-5
                "
              >
                The Woman Behind LES ONGLES
              </p>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  leading-tight
                  text-[#4A1722]
                  mb-8
                "
              >
                Her Art.
                <br />
                Her Identity.
                <br />
                <span className="text-[#A9686B]">
                  Her Love.
                </span>
              </h2>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-[#4A1722]/65
                  leading-relaxed
                  max-w-lg
                  mb-5
                "
              >
                For its founder, nails have never been just
                about beauty. They are a form of art, creativity
                and self-expression — a space where imagination
                comes to life.
              </p>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-[#4A1722]/65
                  leading-relaxed
                  max-w-lg
                  mb-8
                "
              >
                With more than seven years in the nail industry,
                that passion has grown into a vision for a
                globally recognised nail brand and education
                platform.
              </p>

              <div
                className="
                  border-t
                  border-[#7D2435]/15
                  pt-7
                  mb-8
                "
              >
                <span
                  className="
                    font-serif
                    text-5xl
                    text-[#7D2435]
                  "
                >
                  7+
                </span>

                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    tracking-[0.2em]
                    uppercase
                    text-[#4A1722]/55
                    mt-2
                  "
                >
                  Years In The Nail Industry
                </p>
              </div>

              <Button
                to="/about"
                className="
                  !bg-[#7D2435]
                  !border-[#7D2435]
                  !text-white
                  hover:!bg-[#4A1722]
                  rounded-full
                "
              >
                Discover Our Story →
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            VISION
        ========================================================= */}

        <section
          className="
            py-28
            sm:py-32
            px-6
            text-[#FAF6F2]
            bg-[radial-gradient(circle_at_20%_20%,#a75d64_0%,transparent_28%),radial-gradient(circle_at_85%_75%,#7D2435_0%,transparent_32%),linear-gradient(135deg,#7D2435,#4A1722,#2d1118)]
          "
        >
          <div className="max-w-5xl mx-auto text-center reveal">
            <p
              className="
                text-[10px]
                sm:text-xs
                tracking-[0.35em]
                uppercase
                text-[#E8B7B5]
                mb-7
              "
            >
              The Vision
            </p>

            <h2
              className="
                font-serif
                text-5xl
                sm:text-6xl
                md:text-7xl
                leading-tight
                mb-9
              "
            >
              From Amritsar
              <br />
              <span className="text-[#E8B7B5]">
                To The World.
              </span>
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto
                text-white/65
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              What began in Amritsar carries a much bigger
              vision — to build LES ONGLES into an internationally
              recognised nail brand while establishing its
              founder as a recognised nail artist and educator.
            </p>

            <p
              className="
                font-serif
                italic
                text-2xl
                md:text-3xl
                text-[#E8B7B5]
                mt-10
              "
            >
              A dream inspired by Paris.
              <br />
              A journey still unfolding.
            </p>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section
          className="
            py-28
            sm:py-32
            px-6
            text-center
            bg-[radial-gradient(circle_at_15%_20%,#fff8f6_0%,transparent_25%),radial-gradient(circle_at_85%_80%,#e5aaa6_0%,transparent_30%),linear-gradient(135deg,#F7E6E1,#E6B6B2,#C98280)]
          "
        >
          <div className="max-w-3xl mx-auto reveal">
            <p
              className="
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                uppercase
                text-[#7D2435]
                mb-5
              "
            >
              Discover LES ONGLES
            </p>

            <h2
              className="
                font-serif
                text-5xl
                sm:text-6xl
                md:text-7xl
                text-[#4A1722]
                leading-tight
                mb-8
              "
            >
              Your Nails.
              <br />
              Your Art.
              <br />
              <span className="text-[#7D2435]">
                Your Story.
              </span>
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                text-[#4A1722]/65
                max-w-xl
                mx-auto
                leading-relaxed
                mb-10
              "
            >
              Discover Instant Luxury Extensions or begin your
              journey as a nail artist with LES ONGLES Education.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                to="/extensions"
                className="
                  w-full
                  sm:w-auto
                  !bg-[#7D2435]
                  !border-[#7D2435]
                  !text-white
                  hover:!bg-[#4A1722]
                  rounded-full
                  px-7
                  py-4
                "
              >
                Explore Extensions
              </Button>

              <Button
                to="/education"
                variant="ghost"
                className="
                  w-full
                  sm:w-auto
                  !text-[#7D2435]
                  !border-[#7D2435]
                  hover:!bg-[#7D2435]
                  hover:!text-white
                  rounded-full
                  px-7
                  py-4
                "
              >
                Explore Education
              </Button>

              <button
                onClick={openWhatsApp}
                className="
                  w-full
                  sm:w-auto
                  px-7
                  py-4
                  rounded-full
                  border
                  border-[#7D2435]
                  text-[#7D2435]
                  text-sm
                  hover:bg-[#7D2435]
                  hover:text-white
                  transition-all
                "
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}