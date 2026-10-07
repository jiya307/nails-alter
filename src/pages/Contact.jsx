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

  return (
    <PageTransition>
      <main className="bg-[#f8f4ee] text-[#292522] min-h-screen">

        {/* ==============================
            HERO
        ============================== */}
        <section className="pt-36 pb-16 px-6">

          <div className="max-w-7xl mx-auto">

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#9b693f] mb-4">
              Les Ongles · Get In Touch
            </p>

            <h1 className="serif text-5xl md:text-7xl leading-tight">
              Let's Create
              <br />
              Something Beautiful.
            </h1>

            <p className="text-[#655c56] max-w-2xl leading-relaxed mt-7">
              Whether you are looking for instant luxury extensions,
              a customised nail set, bridal nails or information
              about our nail education programs, we would love to
              hear from you.
            </p>

          </div>

        </section>


        {/* ==============================
            CONTACT CONTENT
        ============================== */}
        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div>

              <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-7">
                Connect With Us
              </p>


              <div className="space-y-7">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/917814117379"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 group"
                >

                  <span className="w-14 h-14 bg-[#292522] text-[#f8f4ee] flex items-center justify-center group-hover:bg-[#9b693f] transition-colors">
                    <FaWhatsapp size={22} />
                  </span>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-1">
                      WhatsApp
                    </p>

                    <p className="serif text-xl group-hover:text-[#9b693f] transition-colors">
                      7814117379
                    </p>
                  </div>

                </a>


                {/* PHONE */}
                <a
                  href="tel:+917814117379"
                  className="flex items-center gap-5 group"
                >

                  <span className="w-14 h-14 bg-[#292522] text-[#f8f4ee] flex items-center justify-center group-hover:bg-[#9b693f] transition-colors">
                    <FaPhoneAlt size={18} />
                  </span>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-1">
                      Call
                    </p>

                    <p className="serif text-xl group-hover:text-[#9b693f] transition-colors">
                      +91 78141 17379
                    </p>
                  </div>

                </a>


                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/les_ongles_1/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 group"
                >

                  <span className="w-14 h-14 bg-[#292522] text-[#f8f4ee] flex items-center justify-center group-hover:bg-[#9b693f] transition-colors">
                    <FaInstagram size={20} />
                  </span>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-1">
                      Instagram
                    </p>

                    <p className="serif text-xl group-hover:text-[#9b693f] transition-colors">
                      @les_ongles_1
                    </p>
                  </div>

                </a>


                {/* EMAIL */}
                <a
                  href="mailto:lesongles8@gmail.com"
                  className="flex items-center gap-5 group"
                >

                  <span className="w-14 h-14 bg-[#292522] text-[#f8f4ee] flex items-center justify-center group-hover:bg-[#9b693f] transition-colors">
                    <FaEnvelope size={18} />
                  </span>

                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-1">
                      Email
                    </p>

                    <p className="serif text-xl group-hover:text-[#9b693f] transition-colors">
                      lesongles8@gmail.com
                    </p>
                  </div>

                </a>


                {/* LOCATION */}
                <div className="flex items-center gap-5">

                  <span className="w-14 h-14 bg-[#292522] text-[#f8f4ee] flex items-center justify-center">
                    <FaMapMarkerAlt size={18} />
                  </span>

                  <div>

                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-1">
                      Location
                    </p>

                    <p className="serif text-xl">
                      Amritsar, Punjab
                    </p>

                    <p className="text-sm text-[#655c56] mt-1">
                      India
                    </p>

                  </div>

                </div>

              </div>


              {/* BRAND MESSAGE */}
              <div className="mt-14 border-t border-[#d8c7b7] pt-8">

                <p className="serif italic text-2xl text-[#9b693f] leading-relaxed">
                  "Nails are a form of art,
                  creativity and self-expression."
                </p>

                <p className="text-sm text-[#655c56] mt-5 leading-relaxed max-w-md">
                  Les Ongles — Instant Luxury Extensions &
                  Nail Education.
                </p>

              </div>

            </div>


            {/* RIGHT SIDE - FORM */}
            <div>

              {sent ? (

                <div className="bg-white border border-[#ddcec0] p-10 md:p-14 text-center">

                  <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-5">
                    Thank You
                  </p>

                  <h2 className="serif text-3xl md:text-4xl mb-5">
                    Message Received
                  </h2>

                  <p className="text-[#655c56] leading-relaxed mb-8">
                    Thank you for reaching out to Les Ongles.
                    We will get back to you shortly.
                  </p>

                  <Button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        message: "",
                      });
                    }}
                    variant="secondary"
                  >
                    Send Another Message
                  </Button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#ddcec0] p-8 md:p-12 space-y-6"
                >

                  <div className="mb-8">

                    <p className="text-[11px] tracking-[0.3em] uppercase text-[#9b693f] mb-3">
                      Send An Enquiry
                    </p>

                    <h2 className="serif text-3xl md:text-4xl">
                      Tell Us What You Have In Mind
                    </h2>

                  </div>


                  {/* NAME */}
                  <div>

                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#655c56] mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-[#d8c7b7] bg-[#f8f4ee] px-4 py-3.5 outline-none focus:border-[#9b693f] transition-colors"
                    />

                  </div>


                  {/* EMAIL */}
                  <div>

                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#655c56] mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-[#d8c7b7] bg-[#f8f4ee] px-4 py-3.5 outline-none focus:border-[#9b693f] transition-colors"
                    />

                  </div>


                  {/* MESSAGE */}
                  <div>

                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#655c56] mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about the set, design, occasion or course you are interested in..."
                      className="w-full border border-[#d8c7b7] bg-[#f8f4ee] px-4 py-3.5 outline-none focus:border-[#9b693f] transition-colors resize-none"
                    />

                  </div>


                  <Button
                    type="submit"
                    className="w-full !bg-[#292522] !text-[#f8f4ee] hover:!bg-[#9b693f]"
                  >
                    Send Enquiry →
                  </Button>

                  <p className="text-[11px] text-center text-[#655c56]">
                    Prefer WhatsApp?{" "}
                    <a
                      href="https://wa.me/917814117379"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#9b693f] hover:underline"
                    >
                      Message us directly
                    </a>
                  </p>

                </form>

              )}

            </div>

          </div>

        </section>


        {/* ==============================
            FINAL CTA
        ============================== */}
        <section className="bg-[#292522] text-[#f8f4ee] py-24 px-6 text-center">

          <div className="max-w-3xl mx-auto">

            <p className="text-[11px] tracking-[0.3em] uppercase text-[#d4a574] mb-5">
              Les Ongles · Amritsar
            </p>

            <h2 className="serif text-4xl md:text-5xl leading-tight">
              From Amritsar,
              <br />
              With Love.
            </h2>

            <p className="text-[#d8cec6] max-w-xl mx-auto mt-6 leading-relaxed">
              Instant luxury extensions, nail artistry and
              professional nail education.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-[#f8f4ee] text-[#292522] px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#d4a574] transition-colors"
            >
              WhatsApp Les Ongles →
            </a>

          </div>

        </section>

      </main>
    </PageTransition>
  );
}