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

const boxItems = [
  "16 press-on nails",
  "Application prep kit",
  "Visiting card with QR application guide",
  "Freebie included",
];

const prepItems = [
  "Nail file",
  "Cuticle pusher",
  "Alcohol prep pads",
  "Adhesive tabs",
  "Nail glue",
];

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
            once: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Les Ongles! 💅

I would like to enquire about your Instant Luxury Extensions.

I am interested in a customised nail set and would love to know more about the available designs, pricing and process.

Thank you!`
    );

    window.open(`https://wa.me/917814117379?text=${message}`, "_blank");
  };

  return (
    <PageTransition>
      <main
        ref={ref}
        className="min-h-screen bg-[#FAF6F2] text-[#292322] overflow-hidden"
      >
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
          {/* Metallic background */}
          <div
            className="
              absolute
              inset-0
              -z-10
              bg-[radial-gradient(circle_at_15%_20%,#fff5f2_0%,transparent_24%),radial-gradient(circle_at_82%_18%,#efc3be_0%,transparent_32%),radial-gradient(circle_at_25%_85%,#c47778_0%,transparent_38%),linear-gradient(135deg,#f8ded9,#d79a96,#b66d70,#e1aaa5)]
            "
          />

          {/* Shine */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-[radial-gradient(ellipse_at_28%_18%,rgba(255,255,255,0.55),transparent_18%),radial-gradient(ellipse_at_78%_35%,rgba(255,255,255,0.22),transparent_17%)]
            "
          />

          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.35em] uppercase text-[#7D2435] mb-5 reveal">
                LES ONGLES · INSTANT LUXURY
              </p>

              <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] reveal">
                Instant Luxury
                <br />
                <span className="text-[#7D2435]">Extensions.</span>
              </h1>

              <p className="max-w-2xl text-[#4A3B3B] leading-relaxed mt-8 text-base md:text-lg reveal">
                Naturally fitting, customisable extensions designed to look
                refined, realistic and beautifully crafted.
              </p>

              <div className="flex flex-wrap gap-4 mt-9 reveal">
                <button
                  onClick={openWhatsApp}
                  className="
                    bg-[#7D2435]
                    text-white
                    px-7
                    py-4
                    text-xs
                    tracking-[0.18em]
                    uppercase
                    hover:bg-[#4A1722]
                    transition-colors
                  "
                >
                  Enquire on WhatsApp →
                </button>

                <a
                  href="/portfolio"
                  className="
                    border
                    border-[#7D2435]/40
                    text-[#7D2435]
                    px-7
                    py-4
                    text-xs
                    tracking-[0.18em]
                    uppercase
                    hover:bg-white/50
                    transition-colors
                  "
                >
                  Explore Designs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO IMAGE / BRAND EXPERIENCE
        ====================================================== */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
            <div className="relative min-h-[430px] overflow-hidden reveal">
              <img
                src="/images/about/press-on-nail-collection.png"
                alt="Les Ongles luxury press-on nail collection"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1722]/75 via-transparent to-white/10" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <p className="text-xs tracking-[0.3em] uppercase mb-3">
                  Handcrafted Luxury
                </p>

                <h2 className="serif text-3xl md:text-4xl">
                  Nails made to feel
                  <br />
                  beautifully yours.
                </h2>
              </div>
            </div>

            <div
              className="
                relative
                overflow-hidden
                p-8
                md:p-12
                flex
                flex-col
                justify-center
                bg-[radial-gradient(circle_at_20%_20%,#fff5f2_0%,transparent_28%),linear-gradient(145deg,#f7ddd9,#d79a96,#b56d70)]
                reveal
              "
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-5">
                The Les Ongles Experience
              </p>

              <h2 className="serif text-4xl md:text-5xl leading-tight">
                Refined.
                <br />
                Realistic.
                <br />
                Beautifully crafted.
              </h2>

              <p className="text-[#4A3B3B] leading-relaxed mt-7">
                Every set is created with attention to shape, finish, detail
                and individuality — so your nails feel like an extension of
                your own style.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#7D2435]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#7D2435]">
                  Amritsar · Punjab
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COLLECTION
        ====================================================== */}
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 reveal">
              <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-4">
                Our Collection
              </p>

              <h2 className="serif text-4xl md:text-6xl">
                Find Your Set.
              </h2>

              <p className="text-[#65585A] leading-relaxed mt-5">
                From effortless everyday nails to detailed bridal and luxury
                designs, choose a set that matches your moment and your style.
              </p>
            </div>

            <div className="space-y-4">
              {extensions.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    grid
                    md:grid-cols-[90px_1fr_auto]
                    gap-6
                    items-center
                    p-7
                    md:p-9
                    bg-white
                    border
                    border-[#D9A09A]/45
                    hover:border-[#B66D70]
                    hover:shadow-[0_20px_60px_rgba(125,36,53,0.10)]
                    transition-all
                    duration-300
                    reveal
                  "
                >
                  {/* Rose-gold accent */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-1
                      bg-gradient-to-b
                      from-[#F0C8C2]
                      via-[#C98280]
                      to-[#7D2435]
                      opacity-70
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />

                  <span className="serif text-3xl text-[#B66D70]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="serif text-2xl md:text-3xl mb-2 group-hover:text-[#7D2435] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#65585A] leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B66D70] mb-2">
                      Starting at
                    </p>

                    <p className="serif text-2xl whitespace-nowrap text-[#4A1722]">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT YOU RECEIVE
        ====================================================== */}
        <section className="relative py-28 px-6 overflow-hidden">
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_12%_15%,#fff4f1_0%,transparent_22%),radial-gradient(circle_at_88%_80%,#edc0bb_0%,transparent_28%),linear-gradient(135deg,#f8e5e1,#e2b0ab,#c47b7b)]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_65%_20%,rgba(255,255,255,0.38),transparent_18%)]
            "
          />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <div className="reveal">
                <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-4">
                  What's Inside
                </p>

                <h2 className="serif text-4xl md:text-6xl leading-tight">
                  Your Press-On
                  <br />
                  Nail Box.
                </h2>

                <p className="text-[#4A3B3B] leading-relaxed mt-6 max-w-xl">
                  Every set comes prepared with everything you need for a
                  beautiful and convenient application.
                </p>

                <img
                  src="/images/about/nail-workstation.png"
                  alt="Les Ongles nail workstation"
                  className="w-full h-64 object-cover mt-10"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div
                  className="
                    bg-white/75
                    backdrop-blur-sm
                    border
                    border-white/70
                    p-8
                    md:p-10
                    reveal
                  "
                >
                  <span className="text-xs tracking-[0.2em] text-[#B66D70]">
                    01
                  </span>

                  <h3 className="serif text-2xl mt-4 mb-7">
                    Every Box Includes
                  </h3>

                  <ul className="space-y-4 text-sm text-[#4A3B3B]">
                    {boxItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-[#7D2435]">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="
                    bg-[#4A1722]
                    text-white
                    p-8
                    md:p-10
                    reveal
                  "
                >
                  <span className="text-xs tracking-[0.2em] text-[#E8B7B5]">
                    02
                  </span>

                  <h3 className="serif text-2xl mt-4 mb-7">
                    Application Prep Kit
                  </h3>

                  <ul className="space-y-4 text-sm text-[#F7E6E1]">
                    {prepItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-[#E8B7B5]">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SHAPES & LENGTHS
        ====================================================== */}
        <section className="py-28 px-6 bg-[#FAF6F2]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto reveal">
              <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-4">
                Personalise Your Set
              </p>

              <h2 className="serif text-4xl md:text-6xl">
                Shapes & Lengths.
              </h2>

              <p className="text-[#65585A] mt-5 leading-relaxed">
                Choose any shape and length according to your preference and
                create a set that feels completely yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-14">
              {/* Shapes */}
              <div
                className="
                  relative
                  overflow-hidden
                  p-10
                  md:p-12
                  bg-[linear-gradient(145deg,#f7ddd9,#d99d98,#b97173)]
                  reveal
                "
              >
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/20 blur-2xl" />

                <p className="relative text-xs tracking-[0.25em] uppercase text-[#7D2435] mb-7">
                  Shapes
                </p>

                <div className="relative flex flex-wrap gap-3">
                  {shapes.map((shape) => (
                    <span
                      key={shape}
                      className="
                        bg-white/75
                        border
                        border-white/80
                        px-5
                        py-3
                        text-sm
                        text-[#4A3B3B]
                        backdrop-blur-sm
                      "
                    >
                      {shape}
                    </span>
                  ))}

                  <span
                    className="
                      bg-[#7D2435]
                      text-white
                      px-5
                      py-3
                      text-sm
                    "
                  >
                    And more
                  </span>
                </div>
              </div>

              {/* Lengths */}
              <div
                className="
                  relative
                  overflow-hidden
                  p-10
                  md:p-12
                  bg-[#4A1722]
                  text-white
                  reveal
                "
              >
                <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-[#D9A09A]/20 blur-3xl" />

                <p className="relative text-xs tracking-[0.25em] uppercase text-[#E8B7B5] mb-7">
                  Lengths
                </p>

                <div className="relative flex flex-wrap gap-3">
                  {lengths.map((length) => (
                    <span
                      key={length}
                      className="
                        border
                        border-[#E8B7B5]/50
                        bg-white/5
                        px-7
                        py-3
                        text-sm
                        text-[#F7E6E1]
                      "
                    >
                      {length}
                    </span>
                  ))}
                </div>

                <p className="relative text-sm text-[#D9BFC0] leading-relaxed mt-8 max-w-md">
                  Whether you prefer short and understated or long and
                  statement-making, your set can be tailored to your style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CUSTOM DESIGN
        ====================================================== */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative min-h-[430px] overflow-hidden reveal">
              <img
                src="/images/about/pink-mehndi-floral-nails.png"
                alt="Custom luxury nail design by Les Ongles"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1722]/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-xs tracking-[0.3em] uppercase mb-2">
                  Custom Creations
                </p>

                <h3 className="serif text-3xl md:text-4xl">
                  Your idea.
                  <br />
                  Your nails.
                </h3>
              </div>
            </div>

            <div
              className="
                flex
                flex-col
                justify-center
                bg-white
                border
                border-[#D9A09A]/40
                p-8
                md:p-12
                reveal
              "
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-5">
                Customised Sets
              </p>

              <h2 className="serif text-4xl md:text-5xl leading-tight">
                Have a design
                <br />
                in mind?
              </h2>

              <p className="text-[#65585A] leading-relaxed mt-6">
                Send us your inspiration, reference image or simply describe
                what you are imagining. We will help turn your idea into a
                beautifully crafted nail set.
              </p>

              <button
                onClick={openWhatsApp}
                className="
                  mt-8
                  self-start
                  bg-[#7D2435]
                  text-white
                  px-7
                  py-4
                  text-xs
                  tracking-[0.18em]
                  uppercase
                  hover:bg-[#4A1722]
                  transition-colors
                "
              >
                Create My Custom Set →
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden py-28 px-6 text-center">
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_18%_25%,#fff2ef_0%,transparent_25%),radial-gradient(circle_at_82%_75%,#c77b7c_0%,transparent_32%),linear-gradient(135deg,#f4d0cb,#d28e8c,#995d62,#c47e7d)]
            "
          />

          <div className="relative max-w-3xl mx-auto reveal">
            <p className="text-xs tracking-[0.35em] uppercase text-[#7D2435] mb-5">
              Create Your Set
            </p>

            <h2 className="serif text-4xl md:text-6xl leading-tight">
              Your Nails.
              <br />
              Your Style.
            </h2>

            <p className="max-w-xl mx-auto text-[#4A3B3B] leading-relaxed mt-6 mb-9">
              Ready for your next set? Tell us what you are looking for and
              let's create something beautifully yours.
            </p>

            <div className="flex justify-center flex-wrap gap-4">
              <button
                onClick={openWhatsApp}
                className="
                  bg-[#7D2435]
                  text-white
                  px-8
                  py-4
                  text-xs
                  tracking-[0.18em]
                  uppercase
                  hover:bg-[#4A1722]
                  transition-colors
                "
              >
                Enquire on WhatsApp →
              </button>

              <a
                href="/contact"
                className="
                  bg-white/60
                  border
                  border-white
                  text-[#4A1722]
                  px-8
                  py-4
                  text-xs
                  tracking-[0.18em]
                  uppercase
                  hover:bg-white
                  transition-colors
                "
              >
                Contact Les Ongles
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}