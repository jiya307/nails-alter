import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import DesignCard from "../components/DesignCard";
import { designs } from "../data/designs";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import nailhero from "../assets/nail-hero.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    document.title = "Les Ongles · Nail Studio";
    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".feature-item", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.7,
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: "✦", label: "Trendy Designs" },
    { icon: "🛡", label: "Hygienic & Safe" },
    { icon: "👜", label: "Premium Products" },
    { icon: "✿", label: "Personalized Care" },
  ];

  return (
    <PageTransition>
      <div ref={heroRef} className="bg-[#f6eded] text-white">
        {/* ── HERO – full background image ─────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                `url(${nailhero})`,
            }}
          />
          {/* Dark gradient overlay (matches reference) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

          {/* Text content – left side */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-36 hero-text">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-5">
              Premium Nail Art Studio
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4 text-white">
              Les Ongles
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/90 mb-5">
              Where Nails Meet Art
            </p>

            <p className="text-base text-white/65 max-w-sm mb-10 leading-relaxed">
              Beautiful nails for every mood, every moment
              <br />
              and every version of you.
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#f5b8c8] hover:bg-[#f0a3b8] text-[#1a1a1a] font-medium text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact on WhatsApp
            </a>
          </div>

          {/* Feature strip – bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="max-w-5xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="feature-item flex flex-col items-center text-center gap-2"
                >
                  <span className="text-2xl text-[#f5b8c8]">{f.icon}</span>
                  <span className="text-xs tracking-wide text-black">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECENT WORK ──────────────────────────────────── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 reveal">
            <div>
              <p className="text-xs tracking-widest uppercase text-[#f5b8c8] mb-2">
                Selected Designs
              </p>
              <h2 className="font-serif text-black text-4xl">Recent Work</h2>
            </div>
            <Button to="/portfolio" variant="ghost">
              View All →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.slice(0, 3).map((d) => (
              <div key={d.id} className="reveal">
                <DesignCard design={d} />
              </div>
            ))}
          </div>
        </section>

        {/* ── ARTIST ───────────────────────────────────────── */}
        <section className="py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-xs tracking-widest uppercase text-black mb-4">
                The Artist
              </p>
              <h2 className="font-serif text-black text-4xl md:text-5xl mb-6 leading-tight">
                The tiniest details
                <br />
                can hold the most feeling.
              </h2>
              <p className="text-black/65 leading-relaxed mb-8 max-w-md">
                At Les Ongles, every set is a conversation—about colour,
                proportion, texture, and the version of yourself you want to
                take with you.
              </p>
              <Button to="/about" variant="secondary">
                Meet the Artist →
              </Button>
            </div>
            <div className="reveal aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://storage.googleapis.com/gpt-engineer-file-uploads/10680d76-c6b1-49eb-95db-48eda4cd9c62/image-gen/09ec95f4-c8c4-46a4-9ff3-73e293d7894f?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=go-api%40lovable-core-prod.iam.gserviceaccount.com%2F20261006%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20261006T185733Z&X-Goog-Expires=3599&X-Goog-Signature=16a2217f068a9716ce90d19e27b310d18ad5840bb46256f8597029248914792de40209210d83c100384f76c3203ebb29fe6770f12ad9bda495464dbc44d0e3ccf2a9550ad1b1a0817859c102c6cdba2257fc6d6f041890bf459a522c731c800b104ccbc42813468be727142c34dd91cd03b188de8822087f4fe68406420b36bac97b2d8f5656c9572b32695104bcfadf99cc67290f0f0b009dee2f6d25fd10836ed94c7da885e70f44aa859424d3ea39ade27c1e8d3f8f093456b9aba6cf71e35dece6242e122770a46c381214b3036ef4bce0bdd4f88d14947c7ae8677960ebfc7f343ee3b054c67a770a95993948ac833f4b4286d43ccf318c4aa8689a4c4e&X-Goog-SignedHeaders=host"
                alt="Artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#f5b8c8] mb-2 reveal">
            Services
          </p>
          <h2 className="font-serif text-black text-4xl mb-16 reveal">
            Made for your moment.
          </h2>
          <div className="space-y-12">
            {services.slice(0, 3).map((s, i) => (
              <div
                key={s.id}
                className="reveal flex text-black flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-12"
              >
                <div className="flex gap-8 items-start">
                  <span className="text-[#f5b8c8]  text-sm">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                    <p className="text-black max-w-md">{s.description}</p>
                  </div>
                </div>
                <Button to="/services" variant="ghost">
                  From ₹{s.price} →
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────── */}
        <section className="py-24 bg-white/50">
          <div className="max-w-3xl mx-auto px-6 text-center reveal">
            <p className="text-xs tracking-widest uppercase text-[#f5b8c8] mb-8">
              Client Words
            </p>
            <blockquote className="font-serif text-3xl md:text-4xl text-black leading-snug mb-8">
              “{testimonials[0].text}”
            </blockquote>
            <p className="text-sm tracking-widest uppercase text-black">
              {testimonials[0].name}
            </p>
            <div className="mt-12">
              <Button
                to="/reviews"
                variant="secondary"
                className="border-white/40 text-black hover:bg-pink-100 hover:text-black"
              >
                Read All Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-32 px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-[#f5b8c8] mb-4 reveal">
            Your Next Appointment
          </p>
          <h2 className="font-serif text-5xl text-black md:text-6xl mb-8 reveal">
            A little luxury,
            <br />
            just for you.
          </h2>
          <div className="reveal flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#f5b8c8] hover:bg-[#f0a3b8] text-[#1a1a1a] font-medium text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              Contact on WhatsApp
            </a>
            <Button to="/booking" variant="secondary">
              Book Appointment
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}