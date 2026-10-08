import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { FaWhatsapp, FaArrowLeft, FaCheck } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
];

const services = [
  {
    id: "regular",
    title: "Regular Sets",
    price: "800 onwards",
    description: "Elegant everyday extensions with a clean, refined finish.",
  },
  {
    id: "occasion",
    title: "Occasion Sets",
    price: "1,200 onwards",
    description: "Beautifully detailed nails for celebrations and special moments.",
  },
  {
    id: "custom",
    title: "Customised Sets",
    price: "1,500 onwards",
    description: "A personalised set designed around your style and vision.",
  },
  {
    id: "premium",
    title: "Premium & Luxury Sets",
    price: "1,800 onwards",
    description: "Elevated nail artistry with premium details and finishes.",
  },
  {
    id: "bridal",
    title: "Bridal Collection",
    price: "2,000 onwards",
    description: "Luxury bridal nails created for your most special day.",
  },
];

const designs = [
  {
    id: "pink-luxury",
    title: "Pink Luxury",
    category: "Luxury",
    image: "/images/about/pink-luxury-nail-art.png",
  },
  {
    id: "champagne-pearl",
    title: "Champagne Pearl Floral",
    category: "Bridal",
    image: "/images/about/champagne-pearl-floral-nails.png",
  },
  {
    id: "pearl-bow",
    title: "Pearl Glow Bow",
    category: "Luxury",
    image: "/images/about/pearl-glow-bow-nails.png",
  },
  {
    id: "parisian-chic",
    title: "Parisian Chic",
    category: "Statement",
    image: "/images/about/parisian-chic-nails.png",
  },
  {
    id: "royal-maroon",
    title: "Royal Maroon Gold",
    category: "Festive",
    image: "/images/about/royal-maroon-gold-nails.png",
  },
  {
    id: "burgundy-gold",
    title: "Deep Burgundy Gold",
    category: "Luxury",
    image: "/images/about/deep-burgundy-gold-nails.png",
  },
  {
    id: "pink-mehndi",
    title: "Pink Mehndi Floral",
    category: "Bridal",
    image: "/images/about/pink-mehndi-floral-nails.png",
  },
];

const shapes = [
  "Almond",
  "Stiletto",
  "Coffin",
  "Square",
  "Round",
  "Other",
];

const lengths = ["Short", "Medium", "Long"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const [data, setData] = useState({
    service: null,
    design: null,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    shape: "",
    length: "",
    notes: "",
  });

  const contentRef = useRef(null);

  useEffect(() => {
    document.title = "Book Your Appointment · LES ONGLES";
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        }
      );
    }
  }, [step]);

  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const next = () => {
    setStep((current) => Math.min(current + 1, 6));
  };

  const back = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const sendToWhatsApp = () => {
    const message = `
✨ LES ONGLES — APPOINTMENT REQUEST ✨

Hello LES ONGLES! I would like to book an appointment.

👤 CLIENT DETAILS
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

💅 SERVICE
${data.service?.title || "Not selected"}
Price: ₹${data.service?.price || "To be discussed"}

🎨 DESIGN
${data.design?.title || "Custom / Consultation"}

📅 APPOINTMENT
Date: ${data.date}
Preferred Time: ${data.time}

💎 NAIL PREFERENCES
Shape: ${data.shape || "To be discussed"}
Length: ${data.length || "To be discussed"}

📝 NOTES
${data.notes || "No additional notes"}

Thank you! I look forward to creating my LES ONGLES set. 🤍
    `.trim();

    const whatsappURL = `https://wa.me/917814117379?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <PageTransition>
        <section
          className="
            min-h-screen
            pt-32
            pb-20
            px-6
            flex
            items-center
            justify-center
            bg-[radial-gradient(circle_at_15%_10%,#fff4f1_0%,transparent_22%),radial-gradient(circle_at_85%_18%,#f0c4bf_0%,transparent_28%),radial-gradient(circle_at_25%_85%,#c47778_0%,transparent_32%),linear-gradient(135deg,#f7ddd9,#d59a96,#b86f72,#e2aaa5)]
            text-[#292322]
          "
        >
          <div className="max-w-xl w-full text-center">
            <div
              className="
                mx-auto
                mb-7
                w-16
                h-16
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-white/80
                flex
                items-center
                justify-center
                text-[#7D2435]
                shadow-xl
              "
            >
              <FaCheck size={22} />
            </div>

            <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-4">
              Request Ready
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-serif
                text-[#4A1722]
                mb-6
              "
            >
              Your Nails,
              <br />
              Your Moment.
            </h1>

            <p className="text-[#4A1722]/75 leading-relaxed mb-8">
              Thank you, {data.name}. Your appointment details have been
              prepared for LES ONGLES on WhatsApp.
            </p>

            <div
              className="
                bg-white/65
                backdrop-blur-xl
                border
                border-white/70
                rounded-3xl
                p-6
                md:p-8
                text-left
                shadow-2xl
                mb-8
              "
            >
              <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                  <span className="text-[#4A1722]/50">Service</span>
                  <span className="text-right font-medium">
                    {data.service?.title}
                  </span>
                </div>

                {data.design && (
                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Design</span>
                    <span className="text-right font-medium">
                      {data.design.title}
                    </span>
                  </div>
                )}

                <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                  <span className="text-[#4A1722]/50">Date</span>
                  <span className="font-medium">{data.date}</span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-[#4A1722]/50">Time</span>
                  <span className="font-medium">{data.time}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#4A1722]/60 mb-8">
              WhatsApp has been opened with your appointment request. Send the
              prepared message to complete your enquiry.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                px-7
                py-4
                rounded-full
                bg-[#7D2435]
                text-white
                text-sm
                tracking-wide
                shadow-xl
                hover:bg-[#4A1722]
                transition-all
              "
            >
              <FaWhatsapp />
              Open LES ONGLES WhatsApp
            </a>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main
        className="
          min-h-screen
          pt-28
          pb-20
          px-5
          md:px-6
          text-[#292322]
          overflow-hidden
          bg-[radial-gradient(circle_at_15%_10%,#fff4f1_0%,transparent_22%),radial-gradient(circle_at_85%_18%,#f0c4bf_0%,transparent_28%),radial-gradient(circle_at_25%_85%,#c47778_0%,transparent_32%),linear-gradient(135deg,#f7ddd9,#d59a96,#b86f72,#e2aaa5)]
        "
      >
        {/* SHINY LIGHT EFFECT */}
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            bg-[radial-gradient(ellipse_at_30%_18%,rgba(255,255,255,0.42),transparent_18%),radial-gradient(ellipse_at_75%_35%,rgba(255,255,255,0.20),transparent_16%)]
          "
        />

        <section className="relative max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#7D2435] mb-3">
              LES ONGLES · AMRITSAR
            </p>

            <h1
              className="
                font-serif
                text-4xl
                md:text-6xl
                text-[#4A1722]
                mb-4
              "
            >
              Book Your Appointment
            </h1>

            <p className="max-w-xl mx-auto text-[#4A1722]/70 leading-relaxed">
              Choose your luxury nail experience, preferred design and
              appointment details. Your request will be sent directly to
              LES ONGLES on WhatsApp.
            </p>
          </div>

          {/* PROGRESS */}
          <div className="flex gap-2 mb-10 md:mb-12">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div
                key={number}
                className={`
                  h-1.5
                  flex-1
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    number <= step
                      ? "bg-[#7D2435] shadow-[0_0_12px_rgba(125,36,53,0.35)]"
                      : "bg-white/45"
                  }
                `}
              />
            ))}
          </div>

          {/* STEP */}
          <div className="text-center mb-8">
            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/45
                backdrop-blur-md
                border
                border-white/60
                text-xs
                tracking-widest
                uppercase
                text-[#4A1722]/70
              "
            >
              Step {step} of 6
            </span>
          </div>

          <div
            ref={contentRef}
            className="
              bg-white/60
              backdrop-blur-xl
              border
              border-white/70
              rounded-[2rem]
              p-6
              md:p-10
              shadow-[0_25px_70px_rgba(74,23,34,0.16)]
            "
          >
            {/* STEP 1 — SERVICE */}
            {step === 1 && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8894F] mb-3">
                  Luxury Experience
                </p>

                <h2 className="font-serif text-3xl text-[#4A1722] mb-3">
                  Select a Service
                </h2>

                <p className="text-sm text-[#4A1722]/60 mb-8">
                  Choose the nail experience that feels right for you.
                </p>

                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        updateData("service", service);
                        next();
                      }}
                      className={`
                        w-full
                        text-left
                        p-5
                        rounded-2xl
                        border
                        transition-all
                        duration-300
                        ${
                          data.service?.id === service.id
                            ? "border-[#7D2435] bg-[#7D2435]/10"
                            : "border-[#8F5A5D]/20 bg-white/35 hover:bg-white/65 hover:border-[#7D2435]/50"
                        }
                      `}
                    >
                      <div className="flex justify-between items-start gap-5">
                        <div>
                          <h3 className="font-serif text-xl text-[#4A1722]">
                            {service.title}
                          </h3>

                          <p className="text-xs text-[#4A1722]/55 mt-1 max-w-md">
                            {service.description}
                          </p>
                        </div>

                        <span className="text-sm whitespace-nowrap text-[#7D2435] font-medium">
                          ₹{service.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 — DESIGN */}
            {step === 2 && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8894F] mb-3">
                  Your Style
                </p>

                <h2 className="font-serif text-3xl text-[#4A1722] mb-3">
                  Choose Your Design
                </h2>

                <p className="text-sm text-[#4A1722]/60 mb-8">
                  Select an existing design or skip for a completely
                  customised consultation.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {designs.map((design) => (
                    <button
                      key={design.id}
                      onClick={() => updateData("design", design)}
                      className={`
                        text-left
                        overflow-hidden
                        rounded-2xl
                        border
                        bg-white/30
                        transition-all
                        duration-300
                        ${
                          data.design?.id === design.id
                            ? "border-[#7D2435] shadow-lg"
                            : "border-[#8F5A5D]/20 hover:border-[#7D2435]/50"
                        }
                      `}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={design.image}
                          alt={design.title}
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-500
                            hover:scale-105
                          "
                        />
                      </div>

                      <div className="p-3">
                        <p className="font-serif text-sm text-[#4A1722]">
                          {design.title}
                        </p>

                        <p className="text-[10px] tracking-widest uppercase text-[#7D2435]/60 mt-1">
                          {design.category}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => updateData("design", null)}
                  className="
                    text-sm
                    text-[#7D2435]
                    underline
                    underline-offset-4
                    mb-8
                  "
                >
                  Skip design — I want a custom consultation
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={back}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      border
                      border-[#7D2435]/25
                      text-[#4A1722]
                      hover:bg-white/60
                    "
                  >
                    <FaArrowLeft size={12} />
                    Back
                  </button>

                  <button
                    onClick={next}
                    className="
                      flex-1
                      py-3
                      rounded-full
                      bg-[#7D2435]
                      text-white
                      hover:bg-[#4A1722]
                      transition-colors
                    "
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — DATE */}
            {step === 3 && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8894F] mb-3">
                  Appointment
                </p>

                <h2 className="font-serif text-3xl text-[#4A1722] mb-3">
                  Select a Date
                </h2>

                <p className="text-sm text-[#4A1722]/60 mb-8">
                  Choose your preferred appointment date.
                </p>

                <input
                  type="date"
                  value={data.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => updateData("date", e.target.value)}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#8F5A5D]/20
                    bg-white/50
                    px-5
                    py-4
                    text-[#4A1722]
                    outline-none
                    focus:border-[#7D2435]
                    mb-8
                  "
                />

                <div className="flex gap-3">
                  <button
                    onClick={back}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      border
                      border-[#7D2435]/25
                      text-[#4A1722]
                      hover:bg-white/60
                    "
                  >
                    <FaArrowLeft size={12} />
                    Back
                  </button>

                  <button
                    onClick={next}
                    disabled={!data.date}
                    className="
                      flex-1
                      py-3
                      rounded-full
                      bg-[#7D2435]
                      text-white
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      hover:bg-[#4A1722]
                      transition-colors
                    "
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 — TIME */}
            {step === 4 && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8894F] mb-3">
                  Appointment
                </p>

                <h2 className="font-serif text-3xl text-[#4A1722] mb-3">
                  Preferred Time
                </h2>

                <p className="text-sm text-[#4A1722]/60 mb-8">
                  Select a preferred slot. Final availability will be
                  confirmed by LES ONGLES.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => updateData("time", time)}
                      className={`
                        py-4
                        rounded-xl
                        border
                        text-sm
                        transition-all
                        ${
                          data.time === time
                            ? "bg-[#7D2435] border-[#7D2435] text-white shadow-lg"
                            : "border-[#8F5A5D]/20 bg-white/30 text-[#4A1722] hover:border-[#7D2435]/50"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={back}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      border
                      border-[#7D2435]/25
                      text-[#4A1722]
                      hover:bg-white/60
                    "
                  >
                    <FaArrowLeft size={12} />
                    Back
                  </button>

                  <button
                    onClick={next}
                    disabled={!data.time}
                    className="
                      flex-1
                      py-3
                      rounded-full
                      bg-[#7D2435]
                      text-white
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      hover:bg-[#4A1722]
                      transition-colors
                    "
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5 — DETAILS */}
            {step === 5 && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8894F] mb-3">
                  Almost There
                </p>

                <h2 className="font-serif text-3xl text-[#4A1722] mb-3">
                  Your Details
                </h2>

                <p className="text-sm text-[#4A1722]/60 mb-8">
                  Tell us how we can reach you and your preferred nail style.
                </p>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#4A1722]/55 mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => updateData("name", e.target.value)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#8F5A5D]/20
                        bg-white/45
                        px-4
                        py-3
                        outline-none
                        focus:border-[#7D2435]
                      "
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#4A1722]/55 mb-2">
                      Phone / WhatsApp *
                    </label>

                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => updateData("phone", e.target.value)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#8F5A5D]/20
                        bg-white/45
                        px-4
                        py-3
                        outline-none
                        focus:border-[#7D2435]
                      "
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#4A1722]/55 mb-2">
                      Email *
                    </label>

                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => updateData("email", e.target.value)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#8F5A5D]/20
                        bg-white/45
                        px-4
                        py-3
                        outline-none
                        focus:border-[#7D2435]
                      "
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#4A1722]/55 mb-2">
                        Nail Shape
                      </label>

                      <select
                        value={data.shape}
                        onChange={(e) => updateData("shape", e.target.value)}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#8F5A5D]/20
                          bg-white/60
                          px-4
                          py-3
                          outline-none
                          focus:border-[#7D2435]
                        "
                      >
                        <option value="">Select shape</option>

                        {shapes.map((shape) => (
                          <option key={shape} value={shape}>
                            {shape}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#4A1722]/55 mb-2">
                        Length
                      </label>

                      <select
                        value={data.length}
                        onChange={(e) => updateData("length", e.target.value)}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#8F5A5D]/20
                          bg-white/60
                          px-4
                          py-3
                          outline-none
                          focus:border-[#7D2435]
                        "
                      >
                        <option value="">Select length</option>

                        {lengths.map((length) => (
                          <option key={length} value={length}>
                            {length}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#4A1722]/55 mb-2">
                      Notes / Special Request
                    </label>

                    <textarea
                      rows={4}
                      value={data.notes}
                      onChange={(e) => updateData("notes", e.target.value)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#8F5A5D]/20
                        bg-white/45
                        px-4
                        py-3
                        outline-none
                        focus:border-[#7D2435]
                        resize-none
                      "
                      placeholder="Tell us about your nail inspiration, occasion, colours or anything else..."
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={back}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      border
                      border-[#7D2435]/25
                      text-[#4A1722]
                      hover:bg-white/60
                    "
                  >
                    <FaArrowLeft size={12} />
                    Back
                  </button>

                  <button
                    onClick={next}
                    disabled={!data.name || !data.phone || !data.email}
                    className="
                      flex-1
                      py-3
                      rounded-full
                      bg-[#7D2435]
                      text-white
                      disabled:opacity-40
                      disabled:cursor-not-allowed
                      hover:bg-[#4A1722]
                      transition-colors
                    "
                  >
                    Review Request
                  </button>
                </div>
              </div>
            )}

            {/* STEP 6 — REVIEW */}
            {step === 6 && (
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#B8894F] mb-3">
                  Final Review
                </p>

                <h2 className="font-serif text-3xl text-[#4A1722] mb-3">
                  Confirm Your Request
                </h2>

                <p className="text-sm text-[#4A1722]/60 mb-8">
                  Check your details before sending your appointment request
                  to LES ONGLES.
                </p>

                <div
                  className="
                    bg-white/50
                    rounded-2xl
                    border
                    border-white/70
                    p-6
                    md:p-8
                    space-y-4
                    text-sm
                    mb-8
                  "
                >
                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Service</span>
                    <span className="font-medium text-right">
                      {data.service?.title}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Starting Price</span>
                    <span className="font-medium text-[#7D2435]">
                      ₹{data.service?.price}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Design</span>
                    <span className="font-medium text-right">
                      {data.design?.title || "Custom Consultation"}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Date</span>
                    <span className="font-medium">{data.date}</span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Time</span>
                    <span className="font-medium">{data.time}</span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Name</span>
                    <span className="font-medium">{data.name}</span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Phone</span>
                    <span className="font-medium">{data.phone}</span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                    <span className="text-[#4A1722]/50">Email</span>
                    <span className="font-medium text-right">
                      {data.email}
                    </span>
                  </div>

                  {data.shape && (
                    <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                      <span className="text-[#4A1722]/50">Shape</span>
                      <span className="font-medium">{data.shape}</span>
                    </div>
                  )}

                  {data.length && (
                    <div className="flex justify-between gap-5 border-b border-[#8F5A5D]/15 pb-3">
                      <span className="text-[#4A1722]/50">Length</span>
                      <span className="font-medium">{data.length}</span>
                    </div>
                  )}

                  {data.notes && (
                    <div>
                      <span className="block text-[#4A1722]/50 mb-2">
                        Notes
                      </span>

                      <p className="leading-relaxed">{data.notes}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={back}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-4
                      rounded-full
                      border
                      border-[#7D2435]/25
                      text-[#4A1722]
                      hover:bg-white/60
                    "
                  >
                    <FaArrowLeft size={12} />
                    Edit Details
                  </button>

                  <button
                    onClick={sendToWhatsApp}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-3
                      py-4
                      rounded-full
                      bg-[#7D2435]
                      text-white
                      shadow-xl
                      hover:bg-[#4A1722]
                      hover:-translate-y-0.5
                      transition-all
                    "
                  >
                    <FaWhatsapp size={19} />
                    Send Request on WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM BRAND MESSAGE */}
          <div className="text-center mt-10">
            <p className="font-serif text-xl text-[#4A1722]">
              “Nails are a form of art, creativity and self-expression.”
            </p>

            <p className="text-xs tracking-[0.25em] uppercase text-[#7D2435]/60 mt-3">
              LES ONGLES · Amritsar
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}