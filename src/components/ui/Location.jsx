import { FiMapPin, FiArrowUpRight } from "react-icons/fi";

const studioAddress =
  "133B, inside Ramgharia Gate, opposite Kabir Residency, Namdhari Kanda, Baba Deep Singh Colony, Amritsar, Punjab 143006";

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  studioAddress
)}&output=embed`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  studioAddress
)}`;

export default function LocationSection() {
  return (
    <section
      aria-labelledby="studio-location-heading"
      className="relative overflow-hidden bg-[#FAF6F2] px-5 py-16 text-[#4A1722] md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[#C98280]" />
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#9B5C62]">
            Our Location
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="py-2">
            <h2
              id="studio-location-heading"
              className="serif text-3xl leading-tight md:text-4xl"
            >
              Visit Our Studio
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#75545A]">
              Your next beautiful set awaits. Visit LES ONGLES in Amritsar for
              luxury nail extensions, custom designs, and nail education.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E8B7B5] bg-white text-[#A94F62]">
                <FiMapPin className="text-lg" />
              </span>
              <p className="text-sm leading-6 text-[#4A1722]">
                {studioAddress}
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#D9A09A] bg-[#F4DCDD] px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#4A1722] transition hover:bg-[#E8B7B5]"
            >
              Get Directions
              <FiArrowUpRight className="text-base" />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E8B7B5]/70 bg-white p-2 shadow-[0_18px_50px_rgba(74,23,34,0.12)]">
            <iframe
              title="LES ONGLES studio location on Google Maps"
              src={mapEmbedUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
