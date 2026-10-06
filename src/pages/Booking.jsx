import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { services } from "../data/services";
import { designs } from "../data/designs";

const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: null,
    design: null,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = "Book Appointment · Arsh Atelier";
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [step]);

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleConfirm = () => {
    // Frontend-ready for future POST /api/bookings
    console.log("Booking request:", data);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-lg text-center">
            <p className="text-xs tracking-widest uppercase text-gold mb-4">Request Sent</p>
            <h1 className="serif text-4xl md:text-5xl mb-6">You’re almost there</h1>
            <p className="text-brown/80 leading-relaxed mb-4">
              Thank you, {data.name}. Your appointment request has been received.
            </p>
            <div className="bg-cream p-6 text-left text-sm space-y-2 mb-10">
              <p><span className="text-brown/50">Service:</span> {data.service?.title}</p>
              {data.design && <p><span className="text-brown/50">Design:</span> {data.design.title}</p>}
              <p><span className="text-brown/50">Date:</span> {data.date}</p>
              <p><span className="text-brown/50">Time:</span> {data.time}</p>
            </div>
            <p className="text-sm text-brown/60 mb-10">
              I’ll confirm availability within a few hours via WhatsApp or email.
            </p>
            <Button to="/">Back to Home</Button>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-2xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gold mb-2">Appointment</p>
        <h1 className="serif text-4xl md:text-5xl mb-2">Book a Session</h1>
        <p className="text-brown/70 mb-10">Step {step} of 6</p>

        {/* Progress */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className={`h-1 flex-1 transition-colors duration-300 ${
                n <= step ? "bg-charcoal" : "bg-nude"
              }`}
            />
          ))}
        </div>

        <div ref={contentRef}>
          {/* Step 1 — Service */}
          {step === 1 && (
            <div>
              <h2 className="serif text-2xl mb-8">Select a Service</h2>
              <div className="space-y-3">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setData({ ...data, service: s });
                      next();
                    }}
                    className={`w-full text-left border px-6 py-5 transition-all duration-300 ${
                      data.service?.id === s.id
                        ? "border-charcoal bg-cream"
                        : "border-nude hover:border-charcoal"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="serif text-lg">{s.title}</span>
                      <span className="text-sm text-brown/60">from ₹{s.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Design */}
          {step === 2 && (
            <div>
              <h2 className="serif text-2xl mb-2">Select a Design</h2>
              <p className="text-sm text-brown/60 mb-8">Optional — or skip for a custom consultation</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {designs.slice(0, 6).map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setData({ ...data, design: d })}
                    className={`text-left border overflow-hidden transition-all duration-300 ${
                      data.design?.id === d.id ? "border-charcoal" : "border-nude hover:border-charcoal"
                    }`}
                  >
                    <div className="aspect-square overflow-hidden bg-cream">
                      <img src={d.images[0]} alt={d.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="p-3 text-sm serif">{d.title}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={back} variant="secondary">Back</Button>
                <Button onClick={next}>Continue</Button>
              </div>
            </div>
          )}

          {/* Step 3 — Date */}
          {step === 3 && (
            <div>
              <h2 className="serif text-2xl mb-8">Select a Date</h2>
              <input
                type="date"
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-nude bg-transparent px-4 py-4 text-lg focus:border-charcoal mb-8"
              />
              <div className="flex gap-4">
                <Button onClick={back} variant="secondary">Back</Button>
                <Button onClick={next} className={!data.date ? "opacity-40 pointer-events-none" : ""}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 4 — Time */}
          {step === 4 && (
            <div>
              <h2 className="serif text-2xl mb-8">Preferred Time</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setData({ ...data, time: t })}
                    className={`py-4 text-sm tracking-wide border transition-all duration-300 ${
                      data.time === t
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-nude hover:border-charcoal"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={back} variant="secondary">Back</Button>
                <Button onClick={next} className={!data.time ? "opacity-40 pointer-events-none" : ""}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 5 — Details */}
          {step === 5 && (
            <div>
              <h2 className="serif text-2xl mb-8">Your Details</h2>
              <div className="space-y-5 mb-8">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brown/60 mb-2">Notes (optional)</label>
                  <textarea
                    rows={3}
                    value={data.notes}
                    onChange={(e) => setData({ ...data, notes: e.target.value })}
                    className="w-full border border-nude bg-transparent px-4 py-3 focus:border-charcoal resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={back} variant="secondary">Back</Button>
                <Button
                  onClick={next}
                  className={!data.name || !data.phone || !data.email ? "opacity-40 pointer-events-none" : ""}
                >
                  Review
                </Button>
              </div>
            </div>
          )}

          {/* Step 6 — Confirmation */}
          {step === 6 && (
            <div>
              <h2 className="serif text-2xl mb-8">Confirm Request</h2>
              <div className="bg-cream p-8 space-y-4 text-sm mb-10">
                <div className="flex justify-between border-b border-nude pb-3">
                  <span className="text-brown/50">Service</span>
                  <span>{data.service?.title}</span>
                </div>
                {data.design && (
                  <div className="flex justify-between border-b border-nude pb-3">
                    <span className="text-brown/50">Design</span>
                    <span>{data.design.title}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-nude pb-3">
                  <span className="text-brown/50">Date</span>
                  <span>{data.date}</span>
                </div>
                <div className="flex justify-between border-b border-nude pb-3">
                  <span className="text-brown/50">Time</span>
                  <span>{data.time}</span>
                </div>
                <div className="flex justify-between border-b border-nude pb-3">
                  <span className="text-brown/50">Name</span>
                  <span>{data.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown/50">Contact</span>
                  <span>{data.phone}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={back} variant="secondary">Back</Button>
                <Button onClick={handleConfirm}>Confirm Request</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
