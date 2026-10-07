import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const extensionServices = [
  {
    id: 1,
    title: "Regular Sets",
    price: "₹800 onwards",
    description:
      "Classic and beautiful everyday nail sets designed for effortless luxury.",
  },
  {
    id: 2,
    title: "Occasion Sets",
    price: "₹1,200 onwards",
    description:
      "Beautiful sets for beach days, vacations, festivals, birthdays, parties, celebrations and more.",
  },
  {
    id: 3,
    title: "Customised Sets",
    price: "₹1,500 onwards",
    description:
      "Your design, your inspiration. Share your idea and we create a set especially for you.",
  },
  {
    id: 4,
    title: "Premium & Luxury Sets",
    price: "₹1,800 onwards",
    description:
      "Statement nails featuring crystals, charms, 3D designs, intricate artwork and more.",
  },
  {
    id: 5,
    title: "Bridal Collection",
    price: "₹2,000 onwards",
    description:
      "Specially designed bridal nails for engagements, Anand Karaj, receptions, bridal showers and complete bridal looks.",
  },
];

const courses = [
  "Nail Artist Advanced Course",
  "Nail Artist Foundation Professional Course",
  "Professional Nail Technician Course",
  "Press On Nail Making Course",
];

const shapes = [
  "Almond",
  "Stiletto",
  "Coffin",
  "Square",
  "Round",
  "And more",
];

const lengths = ["Short", "Medium", "Long"];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "Extensions & Education · Les Ongles";

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
              Les Ongles
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight">
              Instant Luxury
              <br />
              Extensions.
            </h1>

            <p className="mt-7 text-[#655c56] text-base md:text-lg leading-relaxed max-w-2xl">
              Naturally fitting, customisable press-on extensions
              designed to look refined, realistic and beautifully
              crafted.
            </p>

          </div>

        </section>


        {/* =====================================================
            EXTENSIONS / PRICES
        ====================================================== */}
        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12 reveal">

              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-3">
                  01 · Extensions
                </p>

                <h2 className="font-serif text-4xl md:text-5xl">
                  Choose Your Set
                </h2>
              </div>

              <p className="text-sm text-[#655c56] max-w-md leading-relaxed">
                All prices are starting prices. Final pricing may
                vary depending on the design and level of
                customisation.
              </p>

            </div>


            <div className="border border-[#d8c7b7] bg-white">

              {extensionServices.map((service, index) => (
                <article
                  key={service.id}
                  className="grid md:grid-cols-[80px_1fr_auto] gap-5 md:gap-8 items-center p-6 md:p-8 border-b last:border-b-0 border-[#d8c7b7] reveal"
                >

                  <span className="font-serif text-2xl text-[#9b693f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <h3 className="font-serif text-2xl md:text-3xl mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#655c56] leading-relaxed max-w-2xl">
                      {service.description}
                    </p>

                  </div>

                  <div className="md:text-right">

                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-1">
                      From
                    </p>

                    <p className="font-serif text-2xl whitespace-nowrap">
                      {service.price}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT YOU RECEIVE
        ====================================================== */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl mb-14 reveal">

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                What's Included
              </p>

              <h2 className="font-serif text-4xl md:text-6xl">
                Everything You Need
              </h2>

              <p className="mt-6 text-[#655c56] leading-relaxed">
                Every press-on nail box comes prepared with the
                essentials you need for application.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              <div className="border border-[#d8c7b7] p-8 md:p-10 reveal">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f]">
                  Every Box Includes
                </p>

                <ul className="mt-7 space-y-4">

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">01</span>
                    <span>16 press-on nails</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">02</span>
                    <span>Application prep kit</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">03</span>
                    <span>Visiting card with QR application guide</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">04</span>
                    <span>Freebie included</span>
                  </li>

                </ul>

              </div>


              <div className="border border-[#d8c7b7] p-8 md:p-10 reveal">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f]">
                  Application Prep Kit
                </p>

                <ul className="mt-7 space-y-4">

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">01</span>
                    <span>Nail file</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">02</span>
                    <span>Cuticle pusher</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">03</span>
                    <span>Alcohol prep pads</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">04</span>
                    <span>Adhesive tabs</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#9b693f]">05</span>
                    <span>Nail glue</span>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SHAPES & LENGTHS
        ====================================================== */}
        <section className="py-28 px-6 bg-[#eee4da]">

          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto reveal">

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                Personalise Your Set
              </p>

              <h2 className="font-serif text-4xl md:text-6xl">
                Shapes & Lengths
              </h2>

              <p className="mt-6 text-[#655c56]">
                Choose the shape and length that best expresses
                your personal style.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-6 mt-14">

              {/* Shapes */}
              <div className="bg-[#f8f4ee] p-8 md:p-12 reveal">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f] mb-6">
                  Shapes
                </p>

                <div className="flex flex-wrap gap-3">

                  {shapes.map((shape) => (
                    <span
                      key={shape}
                      className="border border-[#d8c7b7] px-5 py-3 text-sm"
                    >
                      {shape}
                    </span>
                  ))}

                </div>

              </div>


              {/* Lengths */}
              <div className="bg-[#f8f4ee] p-8 md:p-12 reveal">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f] mb-6">
                  Lengths
                </p>

                <div className="flex flex-wrap gap-3">

                  {lengths.map((length) => (
                    <span
                      key={length}
                      className="border border-[#d8c7b7] px-6 py-3 text-sm"
                    >
                      {length}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            <p className="text-center text-sm text-[#655c56] mt-8 reveal">
              Clients can choose any shape and any length according
              to their preference.
            </p>

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="py-28 px-6 bg-[#292522] text-[#f8f4ee]">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl reveal">

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574] mb-5">
                02 · Nail Education
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                Learn The Craft.
                <br />
                Build Your Future.
              </h2>

              <p className="mt-7 text-[#d8cec6] leading-relaxed max-w-2xl">
                Les Ongles offers professional nail education
                for aspiring and growing nail artists who want
                to develop their skills, confidence and creative
                identity.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-4 mt-14">

              {courses.map((course, index) => (
                <div
                  key={course}
                  className="border border-[#d4a574]/30 p-7 md:p-9 reveal"
                >

                  <div className="flex gap-5 items-start">

                    <span className="font-serif text-2xl text-[#d4a574]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>

                      <h3 className="font-serif text-xl md:text-2xl">
                        {course}
                      </h3>

                      <p className="text-xs tracking-[0.15em] uppercase text-[#b9aaa0] mt-3">
                        Price on enquiry
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>


            <div className="mt-12 reveal">

              <Button
                to="/education"
                className="!bg-[#f8f4ee] !text-[#292522] hover:!bg-[#d4a574]"
              >
                Explore Education →
              </Button>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="py-28 px-6 bg-white text-center">

          <div className="max-w-3xl mx-auto reveal">

            <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-5">
              Ready To Create?
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Your Nails.
              <br />
              Your Style.
            </h2>

            <p className="mt-6 text-[#655c56] max-w-xl mx-auto leading-relaxed">
              Tell us what you have in mind and discover the
              possibilities with Les Ongles.
            </p>

            <div className="mt-9 flex justify-center gap-4 flex-wrap">

              <Button to="/contact" variant="secondary">
                Enquire Now →
              </Button>

              <Button to="/education" variant="ghost">
                Explore Courses
              </Button>

            </div>

          </div>

        </section>

      </div>
    </PageTransition>
  );
}