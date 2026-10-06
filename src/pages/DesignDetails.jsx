import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { designs } from "../data/designs";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

export default function DesignDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const design = designs.find((d) => d.id === id);

  useEffect(() => {
    if (design) document.title = `${design.title} · Arsh Atelier`;
  }, [design]);

  if (!design) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
          <p className="serif text-2xl">Design not found</p>
          <Button to="/portfolio" variant="secondary">Back to Portfolio</Button>
        </div>
      </PageTransition>
    );
  }

  const handleWant = () => {
    navigate("/requirement", { state: { selectedDesign: design.title, designId: design.id } });
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            {design.images.map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden bg-cream">
                <img src={img} alt={`${design.title} ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-32 h-fit">
            <p className="text-xs tracking-widest uppercase text-gold mb-2">{design.category}</p>
            <h1 className="serif text-4xl md:text-5xl mb-6">{design.title}</h1>
            <p className="text-brown/80 leading-relaxed mb-10">{design.description}</p>

            <div className="space-y-4 text-sm border-t border-nude pt-8 mb-10">
              <div className="flex justify-between"><span className="text-brown/60">Nail Shape</span><span>{design.nailShape}</span></div>
              <div className="flex justify-between"><span className="text-brown/60">Length</span><span>{design.nailLength}</span></div>
              <div className="flex justify-between"><span className="text-brown/60">Occasion</span><span>{design.occasion}</span></div>
              <div className="flex justify-between"><span className="text-brown/60">Duration</span><span>{design.duration}</span></div>
              <div className="flex justify-between items-center">
                <span className="text-brown/60">Starting Price</span>
                <span className="serif text-xl">₹{design.price}</span>
              </div>
            </div>

            <Button onClick={handleWant} className="w-full">I Want This Design</Button>
            <Button to="/portfolio" variant="ghost" className="mt-4 w-full">← Back to Portfolio</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
