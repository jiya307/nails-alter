import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        ".mobile-link",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.45, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-ivory/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="serif text-xl tracking-wide text-charcoal">
            PRIYA ATELIER
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-gold" : "text-charcoal hover:text-gold"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="text-xs tracking-widest uppercase bg-charcoal text-ivory px-6 py-3 hover:bg-brown transition-colors"
            >
              Book Now
            </Link>
          </nav>

          <button
            className="lg:hidden text-charcoal text-2xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt4 />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ivory transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="serif text-xl">PRIYA ATELIER</span>
          <button onClick={() => setOpen(false)} className="text-2xl" aria-label="Close menu">
            <HiOutlineX />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[70vh] gap-8">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="mobile-link serif text-3xl text-charcoal">
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="mobile-link mt-6 bg-charcoal text-ivory px-10 py-4 text-sm tracking-widest uppercase"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
