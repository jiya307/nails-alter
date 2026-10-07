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
          y: 30,
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
      {/* NAVBAR */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#f8f5f0]/95 backdrop-blur-md shadow-sm py-4"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className={`
              serif text-xl tracking-[0.18em]
              transition-colors duration-500
              ${
                scrolled
                  ? "text-[#252525]"
                  : "text-black"
              }
            `}
          >
            PRIYA ATELIER
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative text-xs
                  tracking-[0.18em]
                  uppercase
                  transition-colors duration-300

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[1px]
                  after:bg-[#b89563]
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? "text-[#b89563] after:w-full"
                      : scrolled
                      ? "text-[#252525] hover:text-[#b89563] after:w-0 hover:after:w-full"
                      : "text-black hover:text-[#e0bd88] after:w-0 hover:after:w-full"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* BOOK NOW */}
            <Link
              to="/booking"
              className="
                text-xs
                tracking-[0.18em]
                uppercase
                bg-[#252525]
                text-white
                px-7
                py-3.5
                transition-all
                duration-300
                hover:bg-[#b89563]
              "
            >
              Book Now
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className={`
              lg:hidden
              text-2xl
              transition-colors duration-300
              ${scrolled ? "text-[#252525]" : "text-white"}
            `}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt4 />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0
          z-[60]
          bg-[#f8f5f0]
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
        {/* MOBILE HEADER */}
        <div className="flex justify-between items-center p-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="
              serif
              text-xl
              tracking-[0.18em]
              text-[#252525]
            "
          >
            PRIYA ATELIER
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-[#252525]"
            aria-label="Close menu"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <nav className="flex flex-col items-center justify-center h-[75vh] gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="
                mobile-link
                serif
                text-3xl
                text-[#252525]
                transition-colors
                duration-300
                hover:text-[#b89563]
              "
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/booking"
            className="
              mobile-link
              mt-6
              bg-[#252525]
              text-white
              px-10
              py-4
              text-sm
              tracking-[0.18em]
              uppercase
              transition-colors
              duration-300
              hover:bg-[#b89563]
            "
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}