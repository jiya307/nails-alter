import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "Instant Luxury Extensions",
    message: "",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact · Les Ongles";
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Les Ongles Contact Form:", form);

    setSent(true);
  };

  const openWhatsApp = () => {
    const message = `Hello Les Ongles!

Name: ${form.name || "Not provided"}
Email: ${form.email || "Not provided"}
Phone: ${form.phone || "Not provided"}
Enquiry: ${form.enquiry}

Message:
${form.message || "I would like to know more about Les Ongles."}`;

    const url = `https://wa.me/917814117379?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-[#f4d8d4] text-[#292322]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#fff4f1]/80 blur-3xl" />

            <div className="absolute right-[-140px] top-10 h-[480px] w-[480px] rounded-full bg-[#c98280]/30 blur-3xl" />

            <div className="absolute bottom-[-180px] left-[25%] h-[420px] w-[420px] rounded-full bg-[#7d2435]/15 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.30),transparent_40%,rgba(125,36,53,0.08))]" />

          </div>

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">

              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#7d2435]">
                  Les Ongles · Get In Touch
                </p>

                <h1 className="serif text-5xl leading-[0.92] md:text-7xl lg:text-8xl">
                  Let's Create
                  <br />
                  <span className="text-[#7d2435]">
                    Something Beautiful.
                  </span>
                </h1>
              </div>

              <div className="lg:pb-2">

                <p className="max-w-xl text-sm leading-7 text-[#604949] md:text-base">
                  Whether you are looking for instant luxury extensions,
                  a customised nail set, bridal nails or professional
                  nail education, we would love to hear from you.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <span className="border border-[#b98280]/50 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em]">
                    Amritsar
                  </span>

                  <span className="border border-[#b98280]/50 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em]">
                    7+ Years
                  </span>

                  <span className="border border-[#b98280]/50 bg-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em]">
                    Nail Artist & Educator
                  </span>

                </div>

              </div>

            </div>

            <div className="mt-14 h-px bg-[#9f6668]/30" />

          </div>
        </section>

        {/* =====================================================
            CONTACT + FORM
        ====================================================== */}
        <section className="relative px-6 pb-28">

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* =================================================
                LEFT CONTACT DETAILS
            ================================================== */}
            <div>

              <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
                Connect With Us
              </p>

              <div className="space-y-5">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/917814117379"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    border
                    border-white/70
                    bg-[#fff8f5]/65
                    p-5
                    shadow-[0_12px_35px_rgba(87,43,45,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#7d2435] text-white transition-colors group-hover:bg-[#4a1722]">
                    <FaWhatsapp size={22} />
                  </span>

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#9b5d61]">
                      WhatsApp
                    </p>

                    <p className="serif text-xl text-[#382829]">
                      +91 78141 17379
                    </p>

                    <p className="mt-1 text-xs text-[#8b6c6b]">
                      Fastest way to enquire
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+917814117379"
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    border
                    border-white/70
                    bg-[#fff8f5]/65
                    p-5
                    shadow-[0_12px_35px_rgba(87,43,45,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#7d2435] text-white transition-colors group-hover:bg-[#4a1722]">
                    <FaPhoneAlt size={18} />
                  </span>

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#9b5d61]">
                      Call
                    </p>

                    <p className="serif text-xl text-[#382829]">
                      +91 78141 17379
                    </p>

                    <p className="mt-1 text-xs text-[#8b6c6b]">
                      Speak directly with us
                    </p>
                  </div>
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/les_ongles_1/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    border
                    border-white/70
                    bg-[#fff8f5]/65
                    p-5
                    shadow-[0_12px_35px_rgba(87,43,45,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#7d2435] text-white transition-colors group-hover:bg-[#4a1722]">
                    <FaInstagram size={20} />
                  </span>

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#9b5d61]">
                      Instagram
                    </p>

                    <p className="serif text-xl text-[#382829]">
                      @les_ongles_1
                    </p>

                    <p className="mt-1 text-xs text-[#8b6c6b]">
                      Follow our latest work
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:lesongles8@gmail.com"
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    border
                    border-white/70
                    bg-[#fff8f5]/65
                    p-5
                    shadow-[0_12px_35px_rgba(87,43,45,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#7d2435] text-white transition-colors group-hover:bg-[#4a1722]">
                    <FaEnvelope size={18} />
                  </span>

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#9b5d61]">
                      Email
                    </p>

                    <p className="serif break-all text-lg text-[#382829]">
                      lesongles8@gmail.com
                    </p>

                    <p className="mt-1 text-xs text-[#8b6c6b]">
                      For detailed enquiries
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div
                  className="
                    flex
                    items-center
                    gap-5
                    border
                    border-white/70
                    bg-[#fff8f5]/65
                    p-5
                    shadow-[0_12px_35px_rgba(87,43,45,0.06)]
                    backdrop-blur-sm
                  "
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#7d2435] text-white">
                    <FaMapMarkerAlt size={18} />
                  </span>

                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#9b5d61]">
                      Location
                    </p>

                    <p className="serif text-xl text-[#382829]">
                      Amritsar, Punjab
                    </p>

                    <p className="mt-1 text-xs text-[#8b6c6b]">
                      India
                    </p>
                  </div>
                </div>

              </div>

              {/* BRAND MESSAGE */}
              <div className="mt-12 border-t border-[#b98280]/30 pt-8">

                <p className="serif text-2xl leading-relaxed text-[#7d2435]">
                  “Nails are a form of art,
                  <br />
                  creativity and self-expression.”
                </p>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#705858]">
                  Les Ongles — Instant Luxury Extensions & Nail Education.
                  Created in Amritsar with a love for artistry, beauty
                  and individuality.
                </p>

              </div>

            </div>

            {/* =================================================
                ENQUIRY FORM
            ================================================== */}
            <div>

              {sent ? (
                <div className="border border-white/80 bg-[#fff8f5]/80 p-10 text-center shadow-[0_25px_70px_rgba(87,43,45,0.12)] backdrop-blur-sm md:p-14">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7d2435] text-2xl text-white">
                    ✓
                  </div>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-[#9b5d61]">
                    Thank You
                  </p>

                  <h2 className="serif mt-4 text-3xl md:text-4xl">
                    Enquiry Received
                  </h2>

                  <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#705858]">
                    Thank you for reaching out to Les Ongles.
                    We have received your enquiry and will get back
                    to you shortly.
                  </p>

                  <Button
                    onClick={() => {
                      setSent(false);

                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        enquiry: "Instant Luxury Extensions",
                        message: "",
                      });
                    }}
                    className="mt-8 !bg-[#7d2435] !text-white hover:!bg-[#4a1722]"
                  >
                    Send Another Enquiry
                  </Button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="
                    border
                    border-white/80
                    bg-[#fff8f5]/80
                    p-7
                    shadow-[0_25px_70px_rgba(87,43,45,0.12)]
                    backdrop-blur-sm
                    md:p-10
                  "
                >

                  <div className="mb-8">

                    <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#7d2435]">
                      Send An Enquiry
                    </p>

                    <h2 className="serif text-3xl md:text-4xl">
                      Tell Us What You Have In Mind
                    </h2>

                    <p className="mt-4 text-xs leading-6 text-[#705858]">
                      Looking for extensions, a custom design, bridal
                      nails or a professional course? Tell us what
                      you are looking for.
                    </p>

                  </div>

                  <div className="space-y-5">

                    {/* NAME */}
                    <div>
                      <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#705858]">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="
                          w-full
                          border
                          border-[#b98280]/40
                          bg-[#f9e8e5]/60
                          px-4
                          py-3.5
                          text-sm
                          outline-none
                          transition-colors
                          placeholder:text-[#a68b89]
                          focus:border-[#7d2435]
                          focus:bg-white
                        "
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#705858]">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="
                          w-full
                          border
                          border-[#b98280]/40
                          bg-[#f9e8e5]/60
                          px-4
                          py-3.5
                          text-sm
                          outline-none
                          transition-colors
                          placeholder:text-[#a68b89]
                          focus:border-[#7d2435]
                          focus:bg-white
                        "
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#705858]">
                        WhatsApp / Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="
                          w-full
                          border
                          border-[#b98280]/40
                          bg-[#f9e8e5]/60
                          px-4
                          py-3.5
                          text-sm
                          outline-none
                          transition-colors
                          placeholder:text-[#a68b89]
                          focus:border-[#7d2435]
                          focus:bg-white
                        "
                      />
                    </div>

                    {/* ENQUIRY TYPE */}
                    <div>
                      <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#705858]">
                        I Am Interested In
                      </label>

                      <select
                        name="enquiry"
                        value={form.enquiry}
                        onChange={handleChange}
                        className="
                          w-full
                          border
                          border-[#b98280]/40
                          bg-[#f9e8e5]/60
                          px-4
                          py-3.5
                          text-sm
                          outline-none
                          transition-colors
                          focus:border-[#7d2435]
                          focus:bg-white
                        "
                      >
                        <option>Instant Luxury Extensions</option>
                        <option>Customised Nail Set</option>
                        <option>Bridal Nails</option>
                        <option>Premium & Luxury Set</option>
                        <option>Press-On Nails</option>
                        <option>Nail Education</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#705858]">
                        Message
                      </label>

                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your design, occasion, preferred style or course..."
                        className="
                          w-full
                          resize-none
                          border
                          border-[#b98280]/40
                          bg-[#f9e8e5]/60
                          px-4
                          py-3.5
                          text-sm
                          outline-none
                          transition-colors
                          placeholder:text-[#a68b89]
                          focus:border-[#7d2435]
                          focus:bg-white
                        "
                      />
                    </div>

                    {/* BUTTONS */}
                    <div className="grid gap-3 sm:grid-cols-2">

                      <Button
                        type="submit"
                        className="w-full !bg-[#7d2435] !text-white hover:!bg-[#4a1722]"
                      >
                        Send Enquiry →
                      </Button>

                      <button
                        type="button"
                        onClick={openWhatsApp}
                        className="
                          inline-flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          border
                          border-[#7d2435]
                          px-5
                          py-3
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-[#7d2435]
                          transition-all
                          duration-300
                          hover:bg-[#7d2435]
                          hover:text-white
                        "
                      >
                        <FaWhatsapp />
                        WhatsApp
                      </button>

                    </div>

                    <p className="pt-2 text-center text-[10px] leading-5 text-[#8b6c6b]">
                      Prefer a direct conversation? WhatsApp us and
                      we'll help you choose the perfect set.
                    </p>

                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

        {/* =====================================================
            LOCATION / BRAND CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#4a1722] px-6 py-24 text-[#fff8f5] md:py-32">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c98280]/15 blur-3xl" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.07),transparent_35%)]" />

          </div>

          <div className="relative mx-auto max-w-3xl text-center">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#e8b7b5]">
              Les Ongles · Amritsar
            </p>

            <h2 className="serif text-4xl leading-tight md:text-6xl">
              From Amritsar,
              <br />
              <span className="text-[#e8b7b5]">
                With Love.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#ead8d5]">
              Instant luxury extensions, handcrafted nail artistry and
              professional nail education — created with love,
              creativity and purpose.
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
                  bg-[#f7e6e1]
                  px-8
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#4a1722]
                  transition-all
                  duration-300
                  hover:bg-[#c98280]
                  hover:text-white
                "
              >
                WhatsApp Les Ongles →
              </a>

              <a
                href="https://www.instagram.com/les_ongles_1/"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-[#f7e6e1]/50
                  px-8
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#f7e6e1]
                  transition-all
                  duration-300
                  hover:bg-[#f7e6e1]
                  hover:text-[#4a1722]
                "
              >
                Follow Instagram →
              </a>

            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}