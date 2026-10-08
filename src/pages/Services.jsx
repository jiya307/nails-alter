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

          {/* Luxury background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#fff4f1]/80 blur-3xl" />

            <div className="absolute right-[-150px] top-10 h-[500px] w-[500px] rounded-full bg-[#c98280]/35 blur-3xl" />

            <div className="absolute bottom-[-200px] left-[25%] h-[450px] w-[450px] rounded-full bg-[#7d2435]/20 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_40%,rgba(125,36,53,0.08))]" />
          </div>

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              {/* LEFT */}
              <div className="reveal">

                <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#7d2435]">
                  Les Ongles · Services
                </p>

                <h1 className="serif text-5xl leading-[0.92] md:text-7xl lg:text-8xl">
                  Instant
                  <br />
                  <span className="text-[#7d2435]">
                    Luxury.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-[#604949] md:text-base">
                  Naturally fitting, customisable press-on extensions
                  designed to look refined, realistic and beautifully
                  crafted.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/917814117379"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      bg-[#7d2435]
                      px-7
                      py-4
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#4a1722]
                      hover:shadow-xl
                    "
                  >
                    Enquire Now →
                  </a>

                  <Button
                    to="/portfolio"
                    variant="ghost"
                    className="!border-[#7d2435] !text-[#7d2435]"
                  >
                    View Designs
                  </Button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative reveal">

                <div className="absolute -inset-4 rounded-[2rem] bg-[#c98280]/20 blur-2xl" />

                <div className="relative overflow-hidden border border-white/70 bg-[#f9e8e5] shadow-[0_30px_80px_rgba(87,43,45,0.20)]">

                  <img
                    src="/images/about/royal-maroon-gold-nails.png"
                    alt="Les Ongles press-on nail collection"
                    className="h-[480px] w-full object-cover md:h-[560px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a1722]/35 via-transparent to-white/10" />

                  <div className="absolute bottom-5 left-5 right-5 border border-white/30 bg-white/65 p-5 backdrop-blur-md">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#7d2435]">
                      Les Ongles
                    </p>

                    <p className="serif mt-2 text-2xl text-[#382829]">
                      Made To Feel Like You.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            EXTENSION SERVICES
        ====================================================== */}
        <section className="relative px-6 py-24 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">

              <div className="reveal">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
                  01 · Extensions
                </p>

                <h2 className="serif text-4xl md:text-6xl">
                  Choose Your Set
                </h2>
              </div>

              <p className="reveal max-w-lg text-sm leading-7 text-[#705858] md:justify-self-end">
                From everyday elegance to statement luxury and bridal
                artistry, choose a set designed around your personality,
                occasion and style.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {extensionServices.map((service, index) => (
                <article
                  key={service.id}
                  className="
                    reveal
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/70
                    bg-[#fff8f5]/75
                    p-7
                    shadow-[0_15px_45px_rgba(87,43,45,0.10)]
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_25px_60px_rgba(87,43,45,0.17)]
                  "
                >

                  <div className="absolute right-[-35px] top-[-35px] h-32 w-32 rounded-full bg-[#c98280]/15 blur-2xl transition-all duration-500 group-hover:bg-[#c98280]/30" />

                  <div className="relative">

                    <div className="flex items-start justify-between">
                      <span className="serif text-3xl text-[#9b5d61]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg text-[#a76568]">
                        ✦
                      </span>
                    </div>

                    <h3 className="serif mt-8 text-2xl md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-xs leading-6 text-[#705858]">
                      {service.description}
                    </p>

                    <div className="mt-7 border-t border-[#b98280]/30 pt-5">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-[#9b5d61]">
                        Starting From
                      </p>

                      <p className="serif mt-1 text-2xl text-[#7d2435]">
                        {service.price}
                      </p>
                    </div>

                  </div>
                </article>
              ))}

            </div>

            <p className="mt-7 text-center text-xs text-[#765c5b]">
              Final pricing may vary depending on design complexity and
              level of customisation.
            </p>

          </div>
        </section>

        {/* =====================================================
            FEATURED PRODUCT IMAGE
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#f9e8e5] px-6 py-24 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">

            <div className="reveal overflow-hidden border border-white/80 shadow-[0_25px_70px_rgba(87,43,45,0.16)]">
              <img
                src="/images/about/press-on-nail-collection.png"
                alt="Les Ongles handmade press-on nail collection"
                 loading="lazy"
      decoding="async"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[560px]"
              />
            </div>

            <div className="reveal">

              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#7d2435]">
                Handmade · Refined · Customisable
              </p>

              <h2 className="serif text-4xl leading-tight md:text-6xl">
                Luxury In
                <br />
                <span className="text-[#7d2435]">
                  Every Detail.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#705858]">
                Every Les Ongles set is created with attention to shape,
                colour, detail and finish. Choose from signature designs
                or create something completely your own.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="border border-[#b98280]/40 bg-white/50 p-5">
                  <p className="serif text-2xl text-[#7d2435]">
                    01
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em]">
                    Handcrafted
                  </p>
                </div>

                <div className="border border-[#b98280]/40 bg-white/50 p-5">
                  <p className="serif text-2xl text-[#7d2435]">
                    02
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em]">
                    Custom Fit
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT YOU RECEIVE
        ====================================================== */}
        <section className="relative px-6 py-24 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl reveal">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
                What's Included
              </p>

              <h2 className="serif text-4xl md:text-6xl">
                Everything You Need
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#705858]">
                Every press-on nail box comes prepared with the essentials
                you need for a beautiful and easy application.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">

              <div className="reveal border border-white/80 bg-[#fff8f5]/75 p-8 shadow-[0_15px_45px_rgba(87,43,45,0.08)] md:p-10">

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#9b5d61]">
                  Every Box Includes
                </p>

                <ul className="mt-7 space-y-5">

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">01</span>
                    <span className="text-sm">16 press-on nails</span>
                  </li>

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">02</span>
                    <span className="text-sm">Application prep kit</span>
                  </li>

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">03</span>
                    <span className="text-sm">
                      Visiting card with QR application guide
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#7d2435]">04</span>
                    <span className="text-sm">Freebie included</span>
                  </li>

                </ul>
              </div>

              <div className="reveal border border-white/80 bg-[#fff8f5]/75 p-8 shadow-[0_15px_45px_rgba(87,43,45,0.08)] md:p-10">

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#9b5d61]">
                  Application Prep Kit
                </p>

                <ul className="mt-7 space-y-5">

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">01</span>
                    <span className="text-sm">Nail file</span>
                  </li>

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">02</span>
                    <span className="text-sm">Cuticle pusher</span>
                  </li>

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">03</span>
                    <span className="text-sm">Alcohol prep pads</span>
                  </li>

                  <li className="flex gap-4 border-b border-[#b98280]/20 pb-4">
                    <span className="text-[#7d2435]">04</span>
                    <span className="text-sm">Adhesive tabs</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#7d2435]">05</span>
                    <span className="text-sm">Nail glue</span>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            SHAPES & LENGTHS
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#e7b7b4] px-6 py-24 md:py-32">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute bottom-[-100px] right-[-80px] h-96 w-96 rounded-full bg-[#7d2435]/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center reveal">

              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
                Personalise Your Set
              </p>

              <h2 className="serif text-4xl md:text-6xl">
                Shapes & Lengths
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#604949]">
                Choose the shape and length that best expresses your
                personal style.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">

              {/* SHAPES */}
              <div className="reveal border border-white/60 bg-[#fff8f5]/70 p-8 backdrop-blur-sm md:p-12">

                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-[#7d2435]">
                  Shapes
                </p>

                <div className="flex flex-wrap gap-3">
                  {shapes.map((shape) => (
                    <span
                      key={shape}
                      className="border border-[#b98280]/50 bg-white/40 px-5 py-3 text-sm transition-colors hover:border-[#7d2435] hover:bg-white/70"
                    >
                      {shape}
                    </span>
                  ))}
                </div>

              </div>

              {/* LENGTHS */}
              <div className="reveal border border-white/60 bg-[#fff8f5]/70 p-8 backdrop-blur-sm md:p-12">

                <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-[#7d2435]">
                  Lengths
                </p>

                <div className="flex flex-wrap gap-3">
                  {lengths.map((length) => (
                    <span
                      key={length}
                      className="border border-[#b98280]/50 bg-white/40 px-6 py-3 text-sm transition-colors hover:border-[#7d2435] hover:bg-white/70"
                    >
                      {length}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            <p className="mt-8 text-center text-xs text-[#604949]">
              Clients can choose any shape and any length according
              to their preference.
            </p>

          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#4a1722] px-6 py-24 text-[#fff8f5] md:py-32">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-150px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#c98280]/15 blur-3xl" />

            <div className="absolute bottom-[-200px] left-[-100px] h-[450px] w-[450px] rounded-full bg-[#7d2435]/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">

              <div className="reveal">

                <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#e8b7b5]">
                  02 · Nail Education
                </p>

                <h2 className="serif text-4xl leading-tight md:text-6xl">
                  Learn The Craft.
                  <br />
                  <span className="text-[#e8b7b5]">
                    Build Your Future.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#ead8d5]">
                  Les Ongles offers professional nail education for
                  aspiring and growing nail artists who want to develop
                  their skills, confidence and creative identity.
                </p>

              </div>

              <div className="reveal overflow-hidden border border-white/15">
                <img
                  src="/images/about/certificates-and-products.png"
                  alt="Les Ongles certificates and nail products"
                   loading="lazy"
      decoding="async"
                  className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">

              {courses.map((course, index) => (
                <div
                  key={course}
                  className="
                    reveal
                    border
                    border-[#e8b7b5]/20
                    bg-white/[0.04]
                    p-7
                    transition-all
                    duration-300
                    hover:border-[#e8b7b5]/50
                    hover:bg-white/[0.07]
                    md:p-9
                  "
                >

                  <div className="flex items-start gap-5">

                    <span className="serif text-2xl text-[#e8b7b5]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="serif text-xl md:text-2xl">
                        {course}
                      </h3>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#cdb8b5]">
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
                className="!bg-[#f7e6e1] !text-[#4a1722] hover:!bg-[#c98280] hover:!text-white"
              >
                Explore Education →
              </Button>
            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#f9e8e5] px-6 py-24 text-center md:py-32">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#c98280]/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl reveal">

            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
              Ready To Create?
            </p>

            <h2 className="serif text-4xl leading-tight md:text-6xl">
              Your Nails.
              <br />
              <span className="text-[#7d2435]">
                Your Style.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#705858]">
              Tell us what you have in mind and discover the possibilities
              with Les Ongles.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/917814117379"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#7d2435]
                  px-8
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#4a1722]
                "
              >
                Enquire Now →
              </a>

              <Button
                to="/education"
                variant="ghost"
                className="!border-[#7d2435] !text-[#7d2435]"
              >
                Explore Courses
              </Button>

            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}