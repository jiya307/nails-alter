import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact · Arsh Atelier";
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-ready for future POST /api/enquiries
    console.log("Contact form:", form);
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gold mb-2">Get in Touch</p>
        <h1 className="serif text-5xl md:text-6xl mb-6">Contact</h1>
        <p className="text-brown/80 max-w-xl mb-16">
          Prefer a quick message? Reach out on WhatsApp or Instagram. For detailed requests, use the form or the requirement page.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info + CTAs */}
          <div>
            <div className="space-y-8 mb-12">
              <a
                href="https://wa.me/918826332176"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 bg-charcoal text-ivory flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors">
                  <FaWhatsapp size={20} />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-brown/50">WhatsApp</p>
                  <p className="serif text-lg group-hover:text-gold transition-colors">Message Now</p>
                </div>
              </a>

              <a href="tel:+918826332176" className="flex items-center gap-4 group">
                <span className="w-12 h-12 bg-charcoal text-ivory flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors">
                  <FaPhoneAlt size={16} />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-brown/50">Call</p>
                  <p className="serif text-lg group-hover:text-gold transition-colors">+91 88263 32176</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 bg-charcoal text-ivory flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors">
                  <FaInstagram size={18} />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-brown/50">Instagram</p>
                  <p className="serif text-lg group-hover:text-gold transition-colors">@arshatelier</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-charcoal text-ivory flex items-center justify-center">
                  <FaEnvelope size={16} />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-brown/50">Email</p>
                  <p className="serif text-lg">hello@arshatelier.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-charcoal text-ivory flex items-center justify-center">
                  <FaMapMarkerAlt size={16} />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-brown/50">Studio</p>
                  <p className="serif text-lg">New Delhi, India</p>
                  <p className="text-sm text-brown/60 mt-1">Private appointments only · Location shared on confirmation</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video bg-cream flex items-center justify-center text-brown/40 text-sm">
              Google Maps · New Delhi Studio Area
            </div>
          </div>

          {/* Contact form */}
          <div>
            {sent ? (
              <div className="bg-cream p-12 text-center">
                <p className="serif text-2xl mb-4">Message received</p>
                <p className="text-brown/70 mb-8">Thank you. I’ll get back to you shortly.</p>
                <Button onClick={() => setSent(false)} variant="secondary">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
