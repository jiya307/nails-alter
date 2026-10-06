import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { services } from "../data/services";
import { designs } from "../data/designs";

const shapes = ["Almond", "Oval", "Square", "Coffin", "Stiletto", "Round"];
const lengths = ["Short", "Medium", "Long", "Extra Long"];

export default function Requirement() {
  const location = useLocation();
  const preselected = location.state?.selectedDesign || "";

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    selectedDesign: preselected,
    nailLength: "",
    nailShape: "",
    colorPreference: "",
    occasion: "",
    budget: "",
    additional: "",
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Tell Your Requirement · Arsh Atelier";
  }, []);

  useEffect(() => {
    if (preselected) {
      setForm((prev) => ({ ...prev, selectedDesign: preselected }));
    }
  }, [preselected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-ready for future POST /api/enquiries
    console.log("Requirement submitted:", { ...form, referenceImage: fileName });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-lg text-center">
            <p className="text-xs tracking-widest uppercase text-gold mb-4">Received</p>
            <h1 className="serif text-4xl md:text-5xl mb-6">Your requirement is with me</h1>
            <p className="text-brown/80 leading-relaxed mb-10">
              Thank you, {form.fullName || "there"}. I’ll review the details and get back to you within 24 hours to confirm availability and next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/">Back to Home</Button>
              <Button to="/portfolio" variant="secondary">Browse Portfolio</Button>
            </div>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gold mb-2">Enquiry</p>
        <h1 className="serif text-4xl md:text-5xl mb-4">Have something specific in mind?</h1>
        <p className="text-brown/80 mb-12 leading-relaxed">
          Tell me about your dream nails. The more detail you share, the better I can prepare for your session.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                value={form.fullName}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
            />
          </div>

          {/* Date & Time */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Preferred Time</label>
              <input
                type="time"
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              />
            </div>
          </div>

          {/* Service & Design */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              >
                <option value="">Select service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Selected Design</label>
              <select
                name="selectedDesign"
                value={form.selectedDesign}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              >
                <option value="">None / Custom</option>
                {designs.map((d) => (
                  <option key={d.id} value={d.title}>{d.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Nail details */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Nail Length</label>
              <select
                name="nailLength"
                value={form.nailLength}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              >
                <option value="">Select</option>
                {lengths.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Nail Shape</label>
              <select
                name="nailShape"
                value={form.nailShape}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              >
                <option value="">Select</option>
                {shapes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Colour Preference</label>
              <input
                type="text"
                name="colorPreference"
                placeholder="e.g. soft blush, nude, chrome silver"
                value={form.colorPreference}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Occasion</label>
              <input
                type="text"
                name="occasion"
                placeholder="e.g. wedding, party, everyday"
                value={form.occasion}
                onChange={handleChange}
                className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Budget (approx.)</label>
            <input
              type="text"
              name="budget"
              placeholder="e.g. ₹1500 – ₹2500"
              value={form.budget}
              onChange={handleChange}
              className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors"
            />
          </div>

          {/* File upload */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Reference Image</label>
            <label className="flex items-center justify-center border border-dashed border-nude py-8 cursor-pointer hover:border-charcoal transition-colors">
              <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
              <span className="text-sm text-brown/60">
                {fileName || "Click to upload a reference photo"}
              </span>
            </label>
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Additional Requirements</label>
            <textarea
              name="additional"
              rows={4}
              value={form.additional}
              onChange={handleChange}
              placeholder="Anything else I should know..."
              className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal transition-colors resize-none"
            />
          </div>

          <Button type="submit" className="w-full">Send My Requirement</Button>
        </form>
      </section>
    </PageTransition>
  );
}
