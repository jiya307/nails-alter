import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="serif text-2xl mb-4">ARSH ATELIER</h3>
          <p className="text-sm text-ivory/70 leading-relaxed max-w-xs">
            Private nail artistry, considered. Custom sets designed around you.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6 text-gold">Explore</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link>
            <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
            <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/booking" className="hover:text-gold transition-colors">Book Appointment</Link>
            <Link to="/requirement" className="hover:text-gold transition-colors">Tell Your Requirement</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6 text-gold">Connect</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="https://wa.me/918826332176" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold">
              <FaInstagram /> Instagram
            </a>
            <p className="text-ivory/60">New Delhi, India</p>
            <p className="text-ivory/60">hello@arshatelier.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-ivory/10 text-center text-xs text-ivory/50">
        © 2026 ARSH ATELIER · New Delhi
      </div>
    </footer>
  );
}
