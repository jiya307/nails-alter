import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import PageTransition from "../components/PageTransition";
import DesignCard from "../components/DesignCard";
import { designs, categories } from "../data/designs";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const gridRef = useRef(null);

  const filtered = active === "All" ? designs : designs.filter((d) => d.category === active);

  useEffect(() => {
    document.title = "Portfolio · les Ongles";
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll(".design-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out" }
    );
  }, [active]);

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gold mb-2">Gallery</p>
        <h1 className="serif text-5xl md:text-6xl mb-12">Portfolio</h1>

        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300 ${
                active === cat
                  ? "bg-charcoal text-ivory"
                  : "border border-nude text-charcoal hover:border-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filtered.map((d) => (
            <div key={d.id} className="design-item">
              <DesignCard design={d} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brown/60 py-20">No designs in this category yet.</p>
        )}
      </section>
    </PageTransition>
  );
}
