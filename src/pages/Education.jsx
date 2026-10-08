import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    number: "01",
    title: "Nail Artist Advanced Course",
    description:
      "An advanced learning path for nail artists looking to refine their technique, creativity and professional skills.",
  },
  {
    number: "02",
    title: "Nail Artist Foundation Professional Course",
    description:
      "Build a strong professional foundation and learn the essential skills required to begin your nail artistry journey.",
  },
  {
    number: "03",
    title: "Professional Nail Technician Course",
    description:
      "Develop professional nail technician skills and build confidence in delivering quality nail services.",
  },
  {
    number: "04",
    title: "Press On Nail Making Course",
    description:
      "Learn the craft of creating beautiful press-on nail sets and turn your creativity into a professional skill.",
  },
];

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "Nail Education · LES ONGLES";

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
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

  const openWhatsApp = (course = "nail education") => {
    const message = `Hello LES ONGLES! I am interested in ${course}. I would like to know more about the course, fees, schedule and admission details.`;

    window.open(
      `https://wa.me/917814117379?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <PageTransition>
      <main
        ref={ref}
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
            min-h-[90svh]
            md:min-h-[88vh]
            flex
            items-center
            overflow-hidden
            bg-[radial-gradient(circle_at_15%_15%,#fff7f5_0%,transparent_25%),radial-gradient(circle_at_85%_20%,#e8b6b1_0%,transparent_32%),radial-gradient(circle_at_25%_90%,#b66c6e_0%,transparent_38%),linear-gradient(135deg,#f7ddd9,#d69a96,#a9686b,#c98480)]
          "
        >
          {/* Shine */}
          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-[radial-gradient(ellipse_at_25%_18%,rgba(255,255,255,0.48),transparent_18%),radial-gradient(ellipse_at_78%_35%,rgba(255,255,255,0.20),transparent_18%)]
            "
          />

          {/* Background image */}
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
                "url('/images/about/certificates-and-products.png')",
            }}
          />

          {/* Image overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#4A1722]/85
              via-[#7D2435]/55
              to-[#7D2435]/15
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#4A1722]/55
              via-transparent
              to-transparent
            "
          />

          {/* Hero content */}
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
            "
          >
            <div className="max-w-3xl text-white">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  tracking-[0.35em]
                  uppercase
                  text-[#F7E6E1]
                  mb-5
                  reveal
                "
              >
                LES ONGLES · Education
              </p>

              <h1
                className="
                  font-serif
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[82px]
                  leading-[0.92]
                  tracking-[-0.04em]
                  reveal
                "
              >
                Learn The Craft.
                <br />
                <span className="text-[#F7D8D3]">
                  Create Your Future.
                </span>
              </h1>

              <p
                className="
                  max-w-2xl
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-white/80
                  leading-relaxed
                  mt-7
                  reveal
                "
              >
                Professional nail education for aspiring and
                growing nail artists who want to learn, create,
                build confidence and turn creativity into a skill.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-9 reveal">
                <button
                  onClick={() => openWhatsApp()}
                  className="
                    px-7
                    py-4
                    rounded-full
                    bg-[#F7E6E1]
                    text-[#4A1722]
                    text-xs
                    tracking-[0.15em]
                    uppercase
                    hover:bg-white
                    transition-all
                  "
                >
                  Enquire About Courses
                </button>

                <a
                  href="#courses"
                  className="
                    px-7
                    py-4
                    rounded-full
                    border
                    border-white/60
                    text-white
                    text-xs
                    tracking-[0.15em]
                    uppercase
                    hover:bg-white
                    hover:text-[#4A1722]
                    transition-all
                    text-center
                  "
                >
                  Explore Courses
                </a>
              </div>
            </div>
          </div>

          {/* Bottom label */}
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
                md:grid-cols-4
              "
            >
              {[
                ["01", "FOUNDATION", "Build strong fundamentals"],
                ["02", "TECHNIQUE", "Refine your skills"],
                ["03", "CREATIVITY", "Develop your style"],
                ["04", "CAREER", "Grow professionally"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="
                    p-4
                    sm:p-5
                    border-r
                    border-[#7D2435]/10
                  "
                >
                  <span className="font-serif text-xl text-[#7D2435]">
                    {number}
                  </span>

                  <p
                    className="
                      text-[9px]
                      tracking-[0.15em]
                      uppercase
                      text-[#7D2435]
                      mt-1
                    "
                  >
                    {title}
                  </p>

                  <p className="text-[10px] text-[#4A1722]/55 mt-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="py-24 sm:py-28 px-6 bg-[#FAF6F2]">
          <div className="max-w-4xl mx-auto text-center reveal">
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
              More Than A Skill
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
              Learn.
              <br />
              Create.
              <br />
              <span className="text-[#A9686B]">Build.</span>
            </h2>

            <p
              className="
                text-[#4A1722]/65
                leading-relaxed
                mt-7
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                md:text-lg
              "
            >
              Nail artistry is more than beauty. It is creativity,
              self-expression and a skill that can open the door
              to confidence and financial independence.
            </p>

            <p
              className="
                text-[#4A1722]/60
                leading-relaxed
                mt-5
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
              "
            >
              At LES ONGLES, education is about learning the
              technique while discovering your own artistic voice.
            </p>
          </div>
        </section>

        {/* =========================================================
            EDUCATION IMAGE
        ========================================================= */}

        <section className="px-5 sm:px-6 pb-24">
          <div
            className="
              max-w-7xl
              mx-auto
              grid
              lg:grid-cols-2
              gap-6
              items-stretch
            "
          >
            <div
              className="
                reveal
                overflow-hidden
                rounded-[2rem]
                min-h-[360px]
                lg:min-h-[520px]
              "
            >
              <img
                src="/images/about/nails.png"
                alt="LES ONGLES nail studio tools"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </div>

            <div
              className="
                reveal
                overflow-hidden
                rounded-[2rem]
                min-h-[360px]
                lg:min-h-[520px]
              "
            >
              <img
                src="/images/about/nail-workstation.png"
                alt="LES ONGLES nail workstation"
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            COURSES
        ========================================================= */}

        <section
          id="courses"
          className="
            py-24
            sm:py-28
            px-6
            bg-[radial-gradient(circle_at_10%_15%,#fff7f5_0%,transparent_25%),radial-gradient(circle_at_90%_80%,#c98382_0%,transparent_30%),linear-gradient(135deg,#f4d6d1,#dfaca8,#c17b7c)]
          "
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
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
                Our Courses
              </p>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  text-[#4A1722]
                "
              >
                Choose Your
                <br />
                Learning Path.
              </h2>

              <p
                className="
                  max-w-xl
                  text-[#4A1722]/65
                  leading-relaxed
                  mt-5
                  text-sm
                  sm:text-base
                "
              >
                Whether you are starting from the beginning,
                improving your existing skills or specialising in
                press-on nails, there is a learning path for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {courses.map((course) => (
                <article
                  key={course.number}
                  className="
                    bg-white/55
                    backdrop-blur-xl
                    border
                    border-white/70
                    rounded-[1.75rem]
                    p-7
                    md:p-10
                    reveal
                    shadow-[0_18px_50px_rgba(74,23,34,0.10)]
                    hover:-translate-y-1
                    transition-transform
                  "
                >
                  <div className="flex justify-between items-start gap-5">
                    <span
                      className="
                        font-serif
                        text-4xl
                        text-[#7D2435]
                      "
                    >
                      {course.number}
                    </span>

                    <span
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#7D2435]/10
                        text-[9px]
                        tracking-[0.15em]
                        uppercase
                        text-[#7D2435]
                      "
                    >
                      Professional
                    </span>
                  </div>

                  <h3
                    className="
                      font-serif
                      text-2xl
                      md:text-3xl
                      text-[#4A1722]
                      mt-7
                      mb-4
                    "
                  >
                    {course.title}
                  </h3>

                  <p
                    className="
                      text-[#4A1722]/65
                      leading-relaxed
                      text-sm
                    "
                  >
                    {course.description}
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      mt-8
                      pt-6
                      border-t
                      border-[#7D2435]/15
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-[#7D2435]
                      "
                    >
                      Price on enquiry
                    </p>

                    <button
                      onClick={() => openWhatsApp(course.title)}
                      className="
                        text-xs
                        text-[#4A1722]
                        underline
                        underline-offset-4
                        hover:text-[#7D2435]
                      "
                    >
                      Enquire →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CERTIFICATES / CREDIBILITY
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
                Learn With Confidence
              </p>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  text-[#4A1722]
                  leading-tight
                  mb-7
                "
              >
                Learn The Technique.
                <br />
                <span className="text-[#A9686B]">
                  Find Your Art.
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
                From foundation techniques to professional nail
                artistry, LES ONGLES education is designed to help
                students understand the craft and develop their
                confidence.
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
                The goal is not simply to teach a technique. It is
                to help you build a skill that can become part of
                your creative journey and professional future.
              </p>

              <button
                onClick={() => openWhatsApp()}
                className="
                  px-7
                  py-4
                  rounded-full
                  bg-[#7D2435]
                  text-white
                  text-xs
                  tracking-[0.15em]
                  uppercase
                  hover:bg-[#4A1722]
                  transition-colors
                "
              >
                Ask About Admissions →
              </button>
            </div>

            <div
              className="
                reveal
                rounded-[2rem]
                overflow-hidden
                shadow-[0_25px_70px_rgba(74,23,34,0.16)]
              "
            >
              <img
                src="/images/about/certificates-and-products.png"
                alt="LES ONGLES certificates and professional nail products"
                className="
                  w-full
                  aspect-[4/3]
                  object-cover
                "
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            LEARNING MODES
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  tracking-[0.3em]
                  uppercase
                  text-[#E8B7B5]
                  mb-4
                "
              >
                Flexible Learning
              </p>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Online & Offline Classes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="
                  reveal
                  p-8
                  md:p-10
                  rounded-[2rem]
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                "
              >
                <span className="font-serif text-4xl text-[#E8B7B5]">
                  01
                </span>

                <h3 className="font-serif text-3xl mt-6 mb-4">
                  Online Learning
                </h3>

                <p className="text-sm text-white/60 leading-relaxed mb-7">
                  Learn from wherever you are and develop your
                  nail artistry skills with LES ONGLES through a
                  flexible learning experience.
                </p>

                <button
                  onClick={() => openWhatsApp("online nail course")}
                  className="
                    text-xs
                    tracking-[0.15em]
                    uppercase
                    text-[#E8B7B5]
                    border-b
                    border-[#E8B7B5]
                    pb-1
                  "
                >
                  Enquire About Online Courses →
                </button>
              </div>

              <div
                className="
                  reveal
                  p-8
                  md:p-10
                  rounded-[2rem]
                  bg-[#F7E6E1]/10
                  border
                  border-[#E8B7B5]/20
                  backdrop-blur-xl
                "
              >
                <span className="font-serif text-4xl text-[#E8B7B5]">
                  02
                </span>

                <h3 className="font-serif text-3xl mt-6 mb-4">
                  Offline Classes
                </h3>

                <p className="text-sm text-white/60 leading-relaxed mb-7">
                  Learn through hands-on training and practical
                  guidance while developing confidence in your nail
                  artistry journey.
                </p>

                <button
                  onClick={() =>
                    openWhatsApp("offline nail course")
                  }
                  className="
                    text-xs
                    tracking-[0.15em]
                    uppercase
                    text-[#E8B7B5]
                    border-b
                    border-[#E8B7B5]
                    pb-1
                  "
                >
                  Enquire About Offline Classes →
                </button>
              </div>
            </div>
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
              Start Your Journey
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
              Turn Your Creativity
              <br />
              <span className="text-[#7D2435]">
                Into Your Craft.
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
              Ready to learn with LES ONGLES? Get in touch to
              enquire about courses, classes, fees and admission
              details.
            </p>

            <button
              onClick={() => openWhatsApp()}
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                bg-[#7D2435]
                text-white
                text-xs
                tracking-[0.15em]
                uppercase
                shadow-xl
                hover:bg-[#4A1722]
                transition-all
              "
            >
              Enquire About Courses →
            </button>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}