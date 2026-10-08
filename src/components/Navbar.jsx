import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Extensions", path: "/extensions" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
  { name: "Enquire", path: "/contact" },
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
      {/* =====================================================
          NAVBAR
      ====================================================== */}
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
                bg-[#FAF6F2]/90
                backdrop-blur-xl
                border-b
                border-[#D9A09A]/40
                shadow-[0_8px_35px_rgba(125,36,53,0.08)]
                py-3
              `
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/"
            className={`
              relative
              group
              flex
              flex-col
              leading-none
              transition-all
              duration-500
            `}
          >
            <span
              className={`
                serif
                text-xl
                md:text-2xl
                tracking-[0.2em]
                transition-colors
                duration-500
                ${
                  scrolled
                    ? "text-[#4A1722]"
                    : "text-[#4A1722]"
                }
              `}
            >
              LES ONGLES
            </span>

            <span
              className={`
                text-[7px]
                md:text-[8px]
                tracking-[0.25em]
                uppercase
                mt-1
                transition-colors
                duration-500
                ${
                  scrolled
                    ? "text-[#B66D70]"
                    : "text-[#7D2435]"
                }
              `}
            >
              Instant Luxury Extensions
            </span>

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-px
                w-0
                bg-gradient-to-r
                from-[#7D2435]
                via-[#C98280]
                to-transparent
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {links.map((link) => (
              <NavLink
                key={`${link.name}-${link.path}`}
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

            {/* =================================================
                ENQUIRE BUTTON
            ================================================== */}
            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="
                ml-1
                relative
                overflow-hidden
                group
                bg-[#7D2435]
                text-white
                px-6
                py-3
                text-[10px]
                tracking-[0.18em]
                uppercase
                transition-all
                duration-300
                hover:bg-[#4A1722]
                shadow-[0_8px_25px_rgba(125,36,53,0.18)]
              "
            >
              <span className="relative z-10">
                Enquire →
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
            </a>
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
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

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
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

        {/* =================================================
            MOBILE HEADER
        ================================================== */}
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

        {/* =================================================
            MOBILE LINKS
        ================================================== */}
        <nav className="relative flex flex-col items-center justify-center h-[76vh] gap-6 px-6">
          {links.map((link) => (
            <Link
              key={`${link.name}-${link.path}`}
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
                hover:tracking-[0.06em]
              "
            >
              {link.name}
            </Link>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/917814117379"
            target="_blank"
            rel="noreferrer"
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
            Enquire on WhatsApp →
          </a>
        </nav>

        {/* =================================================
            MOBILE FOOTER
        ================================================== */}
        <div className="relative absolute bottom-7 left-0 right-0 text-center">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#4A1722]/70">
            LES ONGLES · AMRITSAR · PUNJAB
          </p>
        </div>
      </div>
    </>
  );
}