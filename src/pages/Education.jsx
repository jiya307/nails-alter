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
    document.title = "Nail Education · Les Ongles";

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

  return (
    <PageTransition>
      <main
        ref={ref}
        className="bg-[#f8f4ee] text-[#292522] min-h-screen"
      >

        {/* HERO */}
        <section className="pt-36 pb-24 px-6">

          <div className="max-w-7xl mx-auto">

            <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-5 reveal">
              Les Ongles · Education
            </p>

            <h1 className="serif text-5xl md:text-7xl leading-tight reveal">
              Learn The Craft.
              <br />
              Create Your Future.
            </h1>

            <p className="max-w-2xl text-[#655c56] leading-relaxed mt-7 reveal">
              Les Ongles offers online and offline nail education
              for aspiring and growing nail artists who want to
              learn, create and build confidence in their craft.
            </p>

          </div>

        </section>


        {/* INTRO */}
        <section className="bg-white py-24 px-6">

          <div className="max-w-4xl mx-auto text-center reveal">

            <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-5">
              More Than A Skill
            </p>

            <h2 className="serif text-4xl md:text-5xl leading-tight">
              Learn. Create. Build.
            </h2>

            <p className="text-[#655c56] leading-relaxed mt-7 max-w-2xl mx-auto">
              Nail artistry is more than beauty. It is creativity,
              self-expression and a skill that can open the door
              to confidence and financial independence.
            </p>

          </div>

        </section>


        {/* COURSES */}
        <section className="py-28 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="mb-14 reveal">

              <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                Our Courses
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Choose Your Learning Path
              </h2>

            </div>


            <div className="grid md:grid-cols-2 gap-5">

              {courses.map((course) => (
                <article
                  key={course.number}
                  className="bg-white border border-[#ddcec0] p-8 md:p-10 reveal"
                >

                  <span className="serif text-3xl text-[#9b693f]">
                    {course.number}
                  </span>

                  <h3 className="serif text-2xl md:text-3xl mt-6 mb-4">
                    {course.title}
                  </h3>

                  <p className="text-[#655c56] leading-relaxed text-sm">
                    {course.description}
                  </p>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-[#9b693f]">
                    Price on enquiry
                  </p>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* LEARNING MODES */}
        <section className="bg-[#eee4da] py-24 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-14 reveal">

              <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                Flexible Learning
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Online & Offline Classes
              </h2>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-[#f8f4ee] p-10 reveal">

                <span className="serif text-3xl text-[#9b693f]">
                  01
                </span>

                <h3 className="serif text-2xl mt-5 mb-4">
                  Online Learning
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Learn from wherever you are and develop your
                  nail artistry skills with Les Ongles.
                </p>

              </div>


              <div className="bg-[#f8f4ee] p-10 reveal">

                <span className="serif text-3xl text-[#9b693f]">
                  02
                </span>

                <h3 className="serif text-2xl mt-5 mb-4">
                  Offline Classes
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Learn through hands-on training and develop
                  practical confidence in your nail artistry journey.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="bg-[#292522] text-[#f8f4ee] py-28 px-6 text-center">

          <div className="max-w-3xl mx-auto reveal">

            <p className="text-xs tracking-[0.3em] uppercase text-[#d4a574] mb-5">
              Start Your Journey
            </p>

            <h2 className="serif text-4xl md:text-6xl leading-tight mb-7">
              Turn Your Creativity
              <br />
              Into Your Craft.
            </h2>

            <p className="text-[#d8cec6] max-w-xl mx-auto leading-relaxed mb-9">
              Interested in learning with Les Ongles?
              Get in touch to enquire about courses and classes.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#f8f4ee] text-[#292522] px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#d4a574] transition-colors"
            >
              Enquire About Courses →
            </a>

          </div>

        </section>

      </main>
    </PageTransition>
  );
}