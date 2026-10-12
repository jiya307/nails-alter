import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full border-b py-2 transition-colors duration-200 ${
          scrolled
            ? "border-[#C98280]/35 bg-[#FAF6F2]/95 shadow-[0_5px_20px_rgba(74,23,34,0.10)] backdrop-blur-xl"
            : "border-white/30 bg-[#FAF6F2]/85 shadow-[0_3px_14px_rgba(74,23,34,0.06)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-7">
          <Link to="/" aria-label="LES ONGLES home" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <img
              src="/images/about/les-ongles-logo-transparent.png"
              alt="LES ONGLES monogram"
              className="h-[38px] w-[52px] object-contain sm:h-[44px] sm:w-[60px] lg:h-[48px] lg:w-[68px]"
            />
            <span className="serif whitespace-nowrap text-[15px] tracking-[0.16em] text-[#4A1722] sm:text-lg lg:text-xl sm:tracking-[0.2em]">
              LES ONGLES
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[10px] uppercase tracking-[0.13em] 2xl:text-[11px] ${
                    isActive ? "text-[#7D2435]" : "text-[#4A3B3B] hover:text-[#7D2435]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="whitespace-nowrap bg-[#7D2435] px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-white hover:bg-[#4A1722]"
            >
              Book Now
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C98280]/45 bg-[#FAF6F2] text-xl text-[#7D2435] lg:hidden"
          >
            <HiOutlineMenuAlt4 />
          </button>
        </div>
      </header>

      {/* Mobile menu: opens immediately without link entrance animations */}
      {open && (
        <div className="fixed inset-0 z-[100] overflow-y-auto animate-[fadeIn_0.3s_ease-out] bg-[radial-gradient(circle_at_15%_15%,#fff4f1_0%,transparent_25%),radial-gradient(circle_at_85%_25%,#e6b5b0_0%,transparent_30%),linear-gradient(135deg,#f8e1dd,#d69a96,#a96367,#7D2435)] lg:hidden">
          <div className="relative z-10 flex items-center justify-between px-3 py-2.5 sm:px-5">
            <Link to="/" onClick={() => setOpen(false)} aria-label="LES ONGLES home" className="flex items-center gap-2">
              <img
                src="/images/about/les-ongles-logo-transparent.png"
                alt="LES ONGLES monogram"
                className="h-[38px] w-[52px] object-contain sm:h-[44px] sm:w-[60px]"
              />
              <span className="serif whitespace-nowrap text-[15px] tracking-[0.16em] text-[#4A1722] sm:text-lg sm:tracking-[0.2em]">
                LES ONGLES
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center border border-[#7D2435]/30 bg-white/50 text-xl text-[#4A1722]"
            >
              <HiOutlineX />
            </button>
          </div>

          <nav className="relative z-10 flex min-h-[calc(100dvh-100px)] flex-col items-center justify-center gap-4 px-5 py-5 sm:gap-5">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
  `serif text-2xl sm:text-3xl opacity-0 animate-[menuSlideUp_0.45s_ease-out_forwards] ${
    isActive ? "text-white" : "text-[#4A1722]"
  }`
}
style={{ animationDelay: `${links.indexOf(link) * 80}ms` }}
                
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#7D2435] px-8 py-3 text-[11px] uppercase tracking-[0.16em] text-white"
            >
              Book Now →
            </Link>
          </nav>

          <p className="pb-4 text-center text-[9px] uppercase tracking-[0.22em] text-[#4A1722]/70">
            LES ONGLES · AMRITSAR · PUNJAB
          </p>
        </div>
      )}
    </>
  );
}
