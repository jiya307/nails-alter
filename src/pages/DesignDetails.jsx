
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { designs } from "../data/designs";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

export default function DesignDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Match URL ID with the design ID
  const design = designs.find((item) => String(item.id) === id);

  useEffect(() => {
    document.title = design
      ? `${design.title} | LES ONGLES - Nail Art Portfolio`
      : "Design Not Found | LES ONGLES";

    return () => {
      document.title = "LES ONGLES | Luxury Nail Art";
    };
  }, [design]);

  if (!design) {
    return (
      <PageTransition>
        <section className="min-h-[70vh] flex flex-col items-center justify-center gap-5 px-6 bg-[#FAF6F2] text-[#4A1722]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9B5D61]">
            LES ONGLES
          </p>

          <h1 className="serif text-4xl text-center">
            Design Not Found
          </h1>

          <p className="text-sm text-center text-[#705858]">
            This design may have been moved or is no longer available.
          </p>

          <Link
            to="/portfolio"
            className="bg-[#7D2435] px-7 py-3 text-xs uppercase tracking-[0.15em] text-white hover:bg-[#4A1722] transition-colors"
          >
            Back to Portfolio
          </Link>
        </section>
      </PageTransition>
    );
  }

  // Supports both `images: []` and `image: ""`
  const designImages = Array.isArray(design.images)
    ? design.images
    : design.image
      ? [design.image]
      : [];

  const handleWant = () => {
    navigate("/requirement", {
      state: {
        selectedDesign: design.title,
        designId: design.id,
      },
    });
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#FAF6F2] text-[#292322]">
        {/* Hero heading */}
        <section className="relative overflow-hidden border-b border-[#C98280]/25 bg-[#F4D8D4] px-5 pb-10 pt-32 sm:px-8 md:pb-14 md:pt-40">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#7D2435]">
              LES ONGLES · THE COLLECTION
            </p>

            <h1 className="serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              {design.title}
              <span className="text-[#7D2435]">.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#705858] md:text-base">
              {design.description}
            </p>
          </div>
        </section>

        {/* Design details */}
        <section className="px-5 py-10 sm:px-8 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Images */}
            <div className="space-y-5">
              {designImages.length > 0 ? (
                designImages.map((img, index) => (
                  <div
                    key={`${img}-${index}`}
                    className="overflow-hidden border border-[#C98280]/25 bg-[#F4D8D4]"
                  >
                    <img
                      src={img}
                      alt={`${design.title} nail design ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-auto max-h-[850px] w-full object-contain"
                    />
                  </div>
                ))
              ) : (
                <div className="flex min-h-[300px] items-center justify-center bg-[#F4D8D4] p-6 text-center text-sm text-[#705858]">
                  Images for this design are coming soon.
                </div>
              )}
            </div>

            {/* Information */}
            <div className="h-fit lg:sticky lg:top-28">
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#9B5D61]">
                {design.category || "Signature Design"}
              </p>

              <h2 className="serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                {design.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#705858]">
                {design.description || "A handcrafted nail design by LES ONGLES."}
              </p>

              <div className="my-8 border-y border-[#C98280]/30 py-6">
                {[
                  ["Nail Shape", design.nailShape],
                  ["Length", design.nailLength],
                  ["Occasion", design.occasion],
                  ["Duration", design.duration],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 border-b border-[#C98280]/15 py-3 last:border-0"
                    >
                      <span className="text-sm text-[#8F7775]">
                        {label}
                      </span>
                      <span className="text-right text-sm text-[#4A1722]">
                        {value}
                      </span>
                    </div>
                  ))}

                {design.price != null && (
                  <div className="flex items-center justify-between gap-4 pt-4">
                    <span className="text-sm text-[#8F7775]">
                      Starting Price
                    </span>
                    <span className="serif text-2xl text-[#7D2435]">
                      ₹{design.price}
                    </span>
                  </div>
                )}
              </div>

              <Button onClick={handleWant} className="w-full">
                I Want This Design
              </Button>

              <Button
                to="/portfolio"
                variant="ghost"
                className="mt-3 w-full"
              >
                ← Back to Portfolio
              </Button>

              <p className="mt-6 text-center text-[10px] uppercase tracking-[0.2em] text-[#9B7775]">
                Instant Luxury · Beautifully You
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
