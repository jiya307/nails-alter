import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PageTransition from "../components/PageTransition";

const designs = [
  {
    id: 1,
    title: "Pink Luxury",
    category: "Luxury",
    image: "/images/about/pink-luxury-nail-art.png",
    description: "Soft pink luxury nails with delicate floral and gold detailing.",
  },
  {
    id: 2,
    title: "Champagne Pearl",
    category: "Bridal",
    image: "/images/about/champagne-pearl-floral-nails.png",
    description: "Elegant champagne tones with pearls and romantic floral details.",
  },
  {
    id: 3,
    title: "Pearl Glow",
    category: "Luxury",
    image: "/images/about/pearl-glow-bow-nails.png",
    description: "Milky pearl nails finished with a soft chrome glow and crystal bow.",
  },
  {
    id: 4,
    title: "Parisian Chic",
    category: "Statement",
    image: "/images/about/parisian-chic-nails.png",
    description: "A sophisticated nude, black and gold design inspired by Parisian elegance.",
  },
  {
    id: 5,
    title: "Royal Maroon",
    category: "Festive",
    image: "/images/about/royal-maroon-gold-nails.png",
    description: "Rich maroon, nude and gold detailing for a bold festive finish.",
  },
  {
    id: 6,
    title: "Deep Burgundy",
    category: "Luxury",
    image: "/images/about/deep-burgundy-gold-nails.png",
    description: "Deep glossy burgundy paired with champagne-gold accents and crystals.",
  },
  {
    id: 7,
    title: "Pink Mehndi Floral",
    category: "Festive",
    image: "/images/about/pink-mehndi-floral-nails.png",
    description: "Pink luxury nails featuring floral, gold and mehndi-inspired details.",
  },
];

const categories = [
  "All",
  "Luxury",
  "Bridal",
  "Statement",
  "Festive",
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const gridRef = useRef(null);

  const filteredDesigns =
    active === "All"
      ? designs
      : designs.filter((design) => design.category === active);

  useEffect(() => {
    document.title = "Portfolio · Les Ongles";
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".portfolio-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 35,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-[#f4d8d4] text-[#292322]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#fff4f1]/70 blur-3xl" />
            <div className="absolute top-20 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#c98280]/40 blur-3xl" />
            <div className="absolute bottom-[-180px] left-[30%] h-[400px] w-[400px] rounded-full bg-[#8f5a5d]/25 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_35%,rgba(125,36,53,0.10))]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">

              <div>
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#7d2435]">
                  Les Ongles · The Collection
                </p>

                <h1 className="serif text-5xl leading-[0.92] md:text-7xl lg:text-8xl">
                  Nail
                  <br />
                  <span className="text-[#7d2435]">Artistry.</span>
                </h1>
              </div>

              <div className="lg:pb-2">
                <p className="mb-5 max-w-xl text-sm leading-7 text-[#5f4847] md:text-base">
                  A curated collection of handcrafted nail designs created
                  with precision, creativity and an eye for beautiful details.
                </p>

                <p className="max-w-xl text-sm leading-7 text-[#6f5553]">
                  From soft feminine elegance to statement luxury and bridal
                  artistry — every set is created to feel uniquely yours.
                </p>
              </div>

            </div>

            <div className="mt-14 h-px w-full bg-[#9f6668]/30" />

            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-[9px] uppercase tracking-[0.25em] text-[#765453]">
              <span>Handcrafted</span>
              <span>Luxury Extensions</span>
              <span>Custom Designs</span>
              <span>Amritsar, Punjab</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}
        <section className="relative px-6 pb-12">
          <div className="mx-auto max-w-7xl">

            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
                  Explore The Collection
                </p>

                <h2 className="serif mt-2 text-3xl md:text-4xl">
                  Find Your Style
                </h2>
              </div>

              <p className="max-w-md text-xs leading-6 text-[#6f5553]">
                Explore signature Les Ongles styles curated for everyday
                elegance, celebrations, bridal moments and statement looks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`border px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                    active === category
                      ? "border-[#7d2435] bg-[#7d2435] text-white shadow-lg shadow-[#7d2435]/20"
                      : "border-[#b98280]/60 bg-[#f9e8e5]/50 text-[#4d3938] hover:border-[#7d2435] hover:bg-[#edd0cc]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PORTFOLIO GRID
        ====================================================== */}
        <section className="relative px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl">

            <div
              ref={gridRef}
              className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredDesigns.map((design) => (
                <article
                  key={design.id}
                  className="portfolio-item group"
                >
                  <div className="overflow-hidden rounded-[2px] border border-white/60 bg-[#f9e8e5]/70 shadow-[0_18px_50px_rgba(87,43,45,0.14)]">

                    {/* IMAGE */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#e8c0bd]">
                      <img
                        src={design.image}
                        alt={`Les Ongles ${design.title} nail design`}
                         loading="lazy"
      decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* image shine */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#4a1722]/15 via-transparent to-white/20 opacity-70" />

                      {/* category */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/50 bg-white/70 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-[#5b3638] backdrop-blur-md">
                          {design.category}
                        </span>
                      </div>

                      {/* hover overlay */}
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#4a1722]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="p-6 text-white">
                          <p className="text-[9px] uppercase tracking-[0.25em] text-[#f7ddd9]">
                            Les Ongles
                          </p>

                          <h3 className="serif mt-2 text-2xl">
                            {design.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* INFO */}
                    <div className="bg-[#fff8f5]/75 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#9b5d61]">
                            {design.category}
                          </p>

                          <h3 className="serif text-2xl text-[#382829]">
                            {design.title}
                          </h3>
                        </div>

                        <span className="text-xl text-[#a76568]">
                          ✦
                        </span>
                      </div>

                      <p className="mt-4 text-xs leading-6 text-[#705858]">
                        {design.description}
                      </p>
                    </div>

                  </div>
                </article>
              ))}
            </div>

            {filteredDesigns.length === 0 && (
              <div className="py-24 text-center">
                <p className="serif text-3xl">
                  Coming Soon
                </p>

                <p className="mt-3 text-sm text-[#705858]">
                  New designs are being added to the collection.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            CUSTOM DESIGN SECTION
        ====================================================== */}
        <section className="relative overflow-hidden border-y border-[#a96b6d]/25 bg-[#e7b7b4] px-6 py-24 md:py-32">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-[-100px] h-80 w-80 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -right-20 bottom-[-120px] h-96 w-96 rounded-full bg-[#7d2435]/15 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#7d2435]">
                Made For You
              </p>

              <h2 className="serif text-4xl leading-tight md:text-6xl">
                Have a design
                <br />
                <span className="text-[#7d2435]">
                  in mind?
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-sm leading-7 text-[#5f4646] md:text-base">
                Your inspiration can become your next favourite set.
                Share your reference, colours, occasion or mood with
                Les Ongles and create a customised nail design around
                your personal style.
              </p>

              <a
                href="https://wa.me/917814117379"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-[#7d2435] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#4a1722] hover:shadow-xl"
              >
                Create My Custom Set →
              </a>
            </div>

          </div>
        </section>

        {/* =====================================================
            INSTANT LUXURY EXTENSIONS
        ====================================================== */}
        <section className="relative bg-[#f8ebe8] px-6 py-24 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#7d2435]">
                Instant Luxury Extensions
              </p>

              <h2 className="serif text-4xl leading-tight md:text-5xl">
                Made To Feel Like You.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#705858]">
                Beautifully crafted extensions designed to look refined,
                realistic and naturally yours.
              </p>
            </div>

            <div className="grid overflow-hidden border border-[#b98180]/40 bg-[#fff8f5] sm:grid-cols-2 lg:grid-cols-4">

              <div className="border-b border-[#b98180]/30 p-7 sm:border-r lg:border-b-0">
                <span className="serif text-3xl text-[#9b5d61]">
                  01
                </span>

                <h3 className="serif mt-5 text-xl">
                  Your Inspiration
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#705858]">
                  Share a design, colour palette or inspiration for your
                  custom set.
                </p>
              </div>

              <div className="border-b border-[#b98180]/30 p-7 lg:border-b-0 lg:border-r">
                <span className="serif text-3xl text-[#9b5d61]">
                  02
                </span>

                <h3 className="serif mt-5 text-xl">
                  Choose Your Shape
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#705858]">
                  Almond, stiletto, coffin, square, round and more.
                </p>
              </div>

              <div className="border-b border-[#b98180]/30 p-7 sm:border-r sm:border-b-0">
                <span className="serif text-3xl text-[#9b5d61]">
                  03
                </span>

                <h3 className="serif mt-5 text-xl">
                  Choose Your Length
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#705858]">
                  Select the length that fits your lifestyle and personal
                  aesthetic.
                </p>
              </div>

              <div className="p-7">
                <span className="serif text-3xl text-[#9b5d61]">
                  04
                </span>

                <h3 className="serif mt-5 text-xl">
                  Made For You
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#705858]">
                  Naturally fitting extensions crafted around your style.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#4a1722] px-6 py-24 text-[#fff8f5] md:py-32">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c98280]/20 blur-3xl" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_35%)]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#e8b7b5]">
              Les Ongles · Amritsar
            </p>

            <h2 className="serif text-4xl leading-tight md:text-6xl">
              Your Nails.
              <br />
              <span className="text-[#e8b7b5]">
                Your Story.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#e8d4d1]">
              Discover instant luxury extensions and handcrafted nail
              artistry designed to make every detail beautifully yours.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex bg-[#f7e6e1] px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-[#4a1722] transition-all duration-300 hover:bg-[#c98280] hover:text-white"
            >
              Enquire on WhatsApp →
            </a>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}