import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

const extensions = [
  {
    number: "01",
    title: "Regular Sets",
    price: "₹800 onwards",
    description:
      "Classic and beautiful everyday nail sets created for effortless, elegant wear.",
  },
  {
    number: "02",
    title: "Occasion Sets",
    price: "₹1,200 onwards",
    description:
      "Beach, vacation, festival, birthday, party and celebration nails designed for your special moments.",
  },
  {
    number: "03",
    title: "Customised Sets",
    price: "₹1,500 onwards",
    description:
      "Your design. Your inspiration. Share your idea and we will create it specially for you.",
  },
  {
    number: "04",
    title: "Premium & Luxury Sets",
    price: "₹1,800 onwards",
    description:
      "Statement nails featuring crystals, charms, 3D designs, intricate artwork and more.",
  },
  {
    number: "05",
    title: "Bridal Collection",
    price: "₹2,000 onwards",
    description:
      "Elegant bridal nails for engagement, Anand Karaj, reception, bridal shower and your complete bridal look.",
  },
];

const shapes = [
  "Almond",
  "Stiletto",
  "Coffin",
  "Square",
  "Round",
];

const lengths = ["Short", "Medium", "Long"];

export default function Extensions() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "Instant Luxury Extensions · Les Ongles";

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
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-7xl mx-auto">

            <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-5 reveal">
              Les Ongles
            </p>

            <h1 className="serif text-5xl md:text-7xl leading-tight reveal">
              Instant Luxury
              <br />
              Extensions.
            </h1>

            <p className="max-w-2xl text-[#655c56] leading-relaxed mt-7 reveal">
              Naturally fitting, customisable extensions designed
              to look refined, realistic and beautifully crafted.
            </p>

          </div>
        </section>


        {/* EXTENSION COLLECTION */}
        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="mb-12 reveal">
              <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-3">
                Our Collection
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Find Your Set
              </h2>
            </div>

            <div className="bg-white border border-[#ddcec0]">

              {extensions.map((item) => (
                <div
                  key={item.number}
                  className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-center p-7 md:p-9 border-b last:border-b-0 border-[#ddcec0] reveal"
                >

                  <span className="serif text-2xl text-[#9b693f]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="serif text-2xl md:text-3xl mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#655c56] leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-[10px] uppercase tracking-widest text-[#9b693f] mb-1">
                      Starting at
                    </p>

                    <p className="serif text-2xl whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* WHAT YOU RECEIVE */}
        <section className="bg-white py-28 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-2xl mb-14 reveal">

              <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-4">
                What's Inside
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Your Press-On Nail Box
              </h2>

              <p className="text-[#655c56] leading-relaxed mt-5">
                Every set comes prepared with everything you need
                for a beautiful application.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              <div className="border border-[#ddcec0] p-8 md:p-10 reveal">

                <h3 className="serif text-2xl mb-7">
                  Every Box Includes
                </h3>

                <ul className="space-y-4 text-sm">

                  <li>• 16 press-on nails</li>
                  <li>• Application prep kit</li>
                  <li>• Visiting card with QR application guide</li>
                  <li>• Freebie included</li>

                </ul>

              </div>


              <div className="border border-[#ddcec0] p-8 md:p-10 reveal">

                <h3 className="serif text-2xl mb-7">
                  Application Prep Kit
                </h3>

                <ul className="space-y-4 text-sm">

                  <li>• Nail file</li>
                  <li>• Cuticle pusher</li>
                  <li>• Alcohol prep pads</li>
                  <li>• Adhesive tabs</li>
                  <li>• Nail glue</li>

                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* SHAPES & LENGTHS */}
        <section className="py-28 px-6 bg-[#eee4da]">

          <div className="max-w-7xl mx-auto text-center">

            <p className="text-xs tracking-[0.3em] uppercase text-[#9b693f] mb-4 reveal">
              Personalise Your Set
            </p>

            <h2 className="serif text-4xl md:text-5xl reveal">
              Shapes & Lengths
            </h2>

            <p className="text-[#655c56] mt-5 reveal">
              Choose any shape and length according to your preference.
            </p>


            <div className="grid md:grid-cols-2 gap-6 mt-14">

              <div className="bg-[#f8f4ee] p-10 reveal">

                <p className="text-xs tracking-widest uppercase text-[#9b693f] mb-6">
                  Shapes
                </p>

                <div className="flex flex-wrap justify-center gap-3">

                  {shapes.map((shape) => (
                    <span
                      key={shape}
                      className="border border-[#d8c7b7] px-5 py-3 text-sm"
                    >
                      {shape}
                    </span>
                  ))}

                  <span className="border border-[#d8c7b7] px-5 py-3 text-sm">
                    And more
                  </span>

                </div>

              </div>


              <div className="bg-[#f8f4ee] p-10 reveal">

                <p className="text-xs tracking-widest uppercase text-[#9b693f] mb-6">
                  Lengths
                </p>

                <div className="flex justify-center flex-wrap gap-3">

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

          </div>

        </section>


        {/* CTA */}
        <section className="bg-[#292522] text-[#f8f4ee] py-24 px-6 text-center">

          <div className="max-w-2xl mx-auto reveal">

            <p className="text-xs tracking-[0.3em] uppercase text-[#d4a574] mb-5">
              Create Your Set
            </p>

            <h2 className="serif text-4xl md:text-5xl mb-6">
              Your Nails.
              <br />
              Your Style.
            </h2>

            <p className="text-[#d8cec6] leading-relaxed mb-9">
              Have a design in mind? Tell us what you are looking
              for and create your own customised set.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#f8f4ee] text-[#292522] px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#d4a574] transition-colors"
            >
              Enquire on WhatsApp →
            </a>

          </div>

        </section>

      </main>
    </PageTransition>
  );
}