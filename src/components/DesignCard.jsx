import { Link } from "react-router-dom";

export default function DesignCard({ design }) {
  return (
    <Link to={`/portfolio/${design.id}`} className="group block overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        <img
          src={design.images[0]}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-500" />
      </div>
      <div className="mt-4">
        <p className="text-xs tracking-widest uppercase text-gold mb-1">{design.category}</p>
        <h3 className="serif text-lg">{design.title}</h3>
      </div>
    </Link>
  );
}
