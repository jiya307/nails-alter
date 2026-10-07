import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import PageTransition from "../components/PageTransition";
import DesignCard from "../components/DesignCard";
import { designs, categories } from "../data/designs";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const gridRef = useRef(null);

  // Filter designs according to selected category
  const filtered =
    active === "All"
      ? designs
      : designs.filter((design) => design.category === active);

  // Page title
  useEffect(() => {
    document.title = "Nail Gallery · Les Ongles";
  }, []);

  // Animate gallery whenever category changes
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".design-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <PageTransition>
      <main className="bg-[#f8f4ee] min-h-screen text-[#292522]">

        {/* ==============================
            HERO
        ============================== */}
        <section className="pt-36 pb-16 px-6">
          <div className="max-w-7xl mx-auto">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-4">
              Les Ongles · The Collection
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end">

              <div>
                <h1 className="serif text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
                  The Nail
                  <br />
                  Gallery.
                </h1>
              </div>

              <div className="lg:pb-2">
                <p className="text-[#655c56] leading-relaxed max-w-lg">
                  Explore handcrafted nail designs created with
                  precision, creativity and a love for beautiful
                  details. From everyday elegance to statement
                  luxury and bridal creations.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ==============================
            DIVIDER
        ============================== */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-[#d8c7b7]" />
        </div>


        {/* ==============================
            CATEGORY FILTER
        ============================== */}
        <section className="py-10 px-6">

          <div className="max-w-7xl mx-auto">

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9b693f] mb-5">
              Explore By Collection
            </p>

            <div className="flex flex-wrap gap-3">

              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`text-[11px] tracking-[0.16em] uppercase px-5 py-3 transition-all duration-300 ${
                    active === cat
                      ? "bg-[#292522] text-white border border-[#292522]"
                      : "border border-[#d8c7b7] text-[#292522] hover:bg-[#eee4da] hover:border-[#9b693f]"
                  }`}
                >
                  {cat}
                </button>
              ))}

            </div>

          </div>
        </section>


        {/* ==============================
            PORTFOLIO GRID
        ============================== */}
        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto">

            {filtered.length > 0 ? (

              <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12"
              >

                {filtered.map((design) => (
                  <div
                    key={design.id}
                    className="design-item"
                  >
                    <DesignCard design={design} />
                  </div>
                ))}

              </div>

            ) : (

              <div className="py-24 text-center">

                <p className="serif text-3xl mb-3">
                  Coming Soon
                </p>

                <p className="text-[#655c56] text-sm">
                  New designs are being added to this collection.
                </p>

              </div>

            )}

          </div>
        </section>


        {/* ==============================
            CUSTOM DESIGN CTA
        ============================== */}
        <section className="bg-white border-y border-[#e5d8cc]">

          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              <div>

                <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-5">
                  Made For You
                </p>

                <h2 className="serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Have a design
                  <br />
                  in mind?
                </h2>

              </div>

              <div>

                <p className="text-[#655c56] leading-relaxed max-w-lg mb-8">
                  Share your inspiration with Les Ongles and let us
                  create a customised set designed around your style,
                  occasion and preferences.
                </p>

                <a
                  href="https://wa.me/917814117379"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-[#292522] text-white px-7 py-4 text-[11px] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#9b693f]"
                >
                  Create My Custom Set →
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* ==============================
            COLLECTION INFO
        ============================== */}
        <section className="py-24 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-2xl mx-auto mb-14">

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                Instant Luxury Extensions
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Made To Feel Like You.
              </h2>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-[#d8c7b7] bg-white">

              {/* Item 1 */}
              <div className="p-7 md:p-8 border-b sm:border-r lg:border-b-0 border-[#d8c7b7]">

                <span className="serif text-2xl text-[#9b693f]">
                  01
                </span>

                <h3 className="serif text-xl mt-5 mb-2">
                  Your Inspiration
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Share a design, idea or inspiration for your custom set.
                </p>

              </div>


              {/* Item 2 */}
              <div className="p-7 md:p-8 border-b lg:border-b-0 lg:border-r border-[#d8c7b7]">

                <span className="serif text-2xl text-[#9b693f]">
                  02
                </span>

                <h3 className="serif text-xl mt-5 mb-2">
                  Choose Your Shape
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Almond, stiletto, coffin, square, round and more.
                </p>

              </div>


              {/* Item 3 */}
              <div className="p-7 md:p-8 border-b sm:border-b-0 sm:border-r border-[#d8c7b7]">

                <span className="serif text-2xl text-[#9b693f]">
                  03
                </span>

                <h3 className="serif text-xl mt-5 mb-2">
                  Choose Your Length
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Available in short, medium and long lengths.
                </p>

              </div>


              {/* Item 4 */}
              <div className="p-7 md:p-8">

                <span className="serif text-2xl text-[#9b693f]">
                  04
                </span>

                <h3 className="serif text-xl mt-5 mb-2">
                  Made For You
                </h3>

                <p className="text-sm text-[#655c56] leading-relaxed">
                  Naturally fitting extensions crafted around your style.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* ==============================
            BOTTOM CTA
        ============================== */}
        <section className="bg-[#292522] text-[#f8f4ee] py-24 px-6">

          <div className="max-w-3xl mx-auto text-center">

            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574] mb-5">
              Les Ongles · Amritsar
            </p>

            <h2 className="serif text-4xl md:text-6xl leading-tight mb-6">
              Your Nails.
              <br />
              Your Story.
            </h2>

            <p className="text-[#d8cec6] leading-relaxed max-w-xl mx-auto mb-9">
              Discover instant luxury extensions designed to look
              refined, realistic and beautifully yours.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-[#f8f4ee] text-[#292522] px-8 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors hover:bg-[#d4a574]"
            >
              Enquire on WhatsApp →
            </a>

          </div>

        </section>

      </main>
    </PageTransition>
  );
}