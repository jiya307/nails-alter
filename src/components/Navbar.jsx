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
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        ".mobile-link",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.45,
          ease: "power3.out",
        }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? `
                bg-[#FAF6F2]/95
                backdrop-blur-xl
                border-b
                border-[#c98280]/35
                shadow-[0_8px_30px_rgba(74,23,34,0.12)]
                py-3
              `
              : `
          bg-[#FAF6F2]/75
          backdrop-blur-md
          border-b
          border-white/30
          shadow-[0_4px_25px_rgba(74,23,34,0.08)]
          py-3
        `
          }
        `}
      >
        <div
  className="
    max-w-[1500px]
    mx-auto
    px-5
    sm:px-8
    lg:px-10
    flex
    items-center
    justify-between
    gap-6
  "
>

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
  className="
    group
    flex
    items-center
    shrink-0
  "
>
  <img
    src="/images/about/les-ongles-logo-transparent.png"
    alt="LES ONGLES"
    className="
      w-[58px]
      h-[48px]
      sm:w-[68px]
      sm:h-[54px]
      lg:w-[72px]
      lg:h-[58px]
      object-contain
      transition-transform
      duration-300
      group-hover:scale-105
    "
  />
            <span
              className="
                serif
                text-xl
                md:text-2xl
                tracking-[0.2em]
                text-[#4A1722]
                group-hover:text-[#7D2435]
                transition-colors
                duration-300
              "
            >
              LES ONGLES
            </span>

            <span
              className="
                text-[7px]
                md:text-[8px]
                tracking-[0.25em]
                uppercase
                mt-1
                text-[#B66D70]
              "
            >
              Instant Luxury Extensions
            </span>
          </Link>


          {/* =========================
              DESKTOP NAV
          ========================== */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                    relative
                    text-[10px]
                    xl:text-[11px]
                    tracking-[0.18em]
                    uppercase
                    transition-colors
                    duration-300

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[1px]
                    after:bg-[#7D2435]
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? `
                          text-[#7D2435]
                          after:w-full
                        `
                        : `
                          text-[#4A3B3B]
                          hover:text-[#7D2435]
                          after:w-0
                          hover:after:w-full
                        `
                    }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}


            {/* =========================
                BOOK NOW
            ========================== */}
            <Link
              to="/booking"
              className="
                relative
                overflow-hidden
                group
                bg-[#7D2435]
                text-white
                px-7
                py-3.5
                text-[10px]
                tracking-[0.2em]
                uppercase
                transition-all
                duration-300
                shadow-[0_8px_25px_rgba(125,36,53,0.18)]
                hover:bg-[#4A1722]
              "
            >
              <span className="relative z-10">
                Book Now
              </span>

              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                "
              />
            </Link>

          </nav>


          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            className="
              lg:hidden
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-[#D9A09A]/60
              bg-white/50
              backdrop-blur-md
              text-[#7D2435]
              text-2xl
              transition-all
              duration-300
              hover:bg-[#7D2435]
              hover:text-white
            "
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt4 />
          </button>

        </div>
      </header>


      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`
          fixed
          inset-0
          z-[60]
          transition-transform
          duration-500
          ease-out
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Luxury background */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_15%,#fff4f1_0%,transparent_25%),radial-gradient(circle_at_85%_25%,#e6b5b0_0%,transparent_30%),linear-gradient(135deg,#f8e1dd,#d69a96,#a96367,#7D2435)]
          "
        />

        {/* Shine */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.45),transparent_18%),radial-gradient(ellipse_at_75%_65%,rgba(255,255,255,0.18),transparent_20%)]
          "
        />


        {/* =========================
            MOBILE HEADER
        ========================== */}
        <div className="relative flex justify-between items-center p-6">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex flex-col leading-none"
          >
            <span className="serif text-xl tracking-[0.2em] text-[#4A1722]">
              LES ONGLES
            </span>

            <span className="text-[7px] tracking-[0.25em] uppercase text-[#7D2435] mt-1">
              Instant Luxury Extensions
            </span>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-[#7D2435]/30
              bg-white/40
              text-2xl
              text-[#4A1722]
              hover:bg-[#7D2435]
              hover:text-white
              transition-all
              duration-300
            "
            aria-label="Close menu"
          >
            <HiOutlineX />
          </button>

        </div>


        {/* =========================
            MOBILE LINKS
        ========================== */}
        <nav className="relative flex flex-col items-center justify-center h-[76vh] gap-7">

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="
                mobile-link
                serif
                text-3xl
                md:text-4xl
                text-[#4A1722]
                transition-all
                duration-300
                hover:text-white
              "
            >
              {link.name}
            </Link>
          ))}


          {/* BOOK NOW */}
          <Link
            to="/booking"
            className="
              mobile-link
              mt-5
              bg-[#7D2435]
              text-white
              px-10
              py-4
              text-xs
              tracking-[0.2em]
              uppercase
              shadow-[0_12px_35px_rgba(74,23,34,0.25)]
              transition-all
              duration-300
              hover:bg-[#4A1722]
            "
          >
            Book Now →
          </Link>

        </nav>


        {/* =========================
            MOBILE FOOTER
        ========================== */}
        <div className="absolute bottom-7 left-0 right-0 text-center">

          <p className="text-[9px] tracking-[0.3em] uppercase text-[#4A1722]/70">
            LES ONGLES · AMRITSAR · PUNJAB
          </p>

        </div>

      </div>
    </>
  );
}