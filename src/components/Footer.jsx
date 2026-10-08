import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4A1722] text-[#FAF6F2]">

      {/* =====================================================
          LUXURY BACKGROUND
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_10%_15%,rgba(232,183,181,0.20),transparent_25%),radial-gradient(circle_at_90%_30%,rgba(201,130,128,0.18),transparent_28%),radial-gradient(circle_at_45%_100%,rgba(125,36,53,0.7),transparent_40%)]
        "
      />

      {/* Metallic shine */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(ellipse_at_25%_10%,rgba(255,255,255,0.10),transparent_18%),radial-gradient(ellipse_at_75%_70%,rgba(255,255,255,0.06),transparent_20%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">

        {/* =====================================================
            TOP BRAND STATEMENT
        ====================================================== */}
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 pb-16">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="
                inline-block
                group
              "
            >
              <span
                className="
                  serif
                  block
                  text-4xl
                  md:text-5xl
                  tracking-[0.18em]
                  text-[#FAF6F2]
                  group-hover:text-[#E8B7B5]
                  transition-colors
                  duration-300
                "
              >
                LES ONGLES
              </span>

              <span
                className="
                  block
                  text-[9px]
                  md:text-[10px]
                  tracking-[0.32em]
                  uppercase
                  text-[#D9A09A]
                  mt-3
                "
              >
                Instant Luxury Extensions & Nail Education
              </span>
            </Link>

            <p className="max-w-xl text-sm md:text-base text-[#E5CBCD] leading-relaxed mt-7">
              A luxury nail brand from Amritsar, specialising in naturally
              fitting, customisable extensions and professional nail
              education.
            </p>

            <p className="max-w-xl text-sm text-[#CDAEB1] leading-relaxed mt-4">
              Creating beautiful nails, empowering artists and turning
              creativity into a craft.
            </p>

            {/* Location */}
            <div className="flex items-center gap-3 mt-7">
              <span className="h-px w-10 bg-[#C98280]" />

              <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8B7B5]">
                Amritsar · Punjab · India
              </span>
            </div>
          </div>

          {/* PARIS STATEMENT */}
          <div className="lg:text-right flex lg:justify-end items-end">
            <div>
              <p className="serif italic text-2xl md:text-3xl text-[#F7E6E1] leading-relaxed">
                From Amritsar,
                <br />
                with a dream of Paris.
              </p>

              <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8898B] mt-5">
                Art · Beauty · Luxury
              </p>
            </div>
          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C98280]/50 to-transparent" />


        {/* =====================================================
            FOOTER CONTENT
        ====================================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-14">

          {/* EXPLORE */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#E8B7B5] mb-7">
              Explore
            </h4>

            <div className="grid grid-cols-2 gap-y-4 text-sm">

              <Link
                to="/"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                About
              </Link>

              <Link
                to="/portfolio"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                Portfolio
              </Link>

              <Link
                to="/extensions"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                Extensions
              </Link>

              <Link
                to="/education"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                Education
              </Link>

              <Link
                to="/reviews"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                Reviews
              </Link>

              <Link
                to="/contact"
                className="text-[#E5CBCD] hover:text-white transition-colors"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* CONNECT */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#E8B7B5] mb-7">
              Connect
            </h4>

            <div className="flex flex-col gap-4">

              {/* WhatsApp */}
              <a
                href="https://wa.me/917814117379"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-[#E5CBCD]
                  hover:text-white
                  transition-colors
                "
              >
                <span className="flex items-center gap-3">
                  <FaWhatsapp className="text-lg text-[#D9A09A]" />
                  +91 78141 17379
                </span>

                <FiArrowUpRight
                  className="
                    opacity-0
                    -translate-x-1
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                  "
                />
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/les_ongles_1/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-[#E5CBCD]
                  hover:text-white
                  transition-colors
                "
              >
                <span className="flex items-center gap-3">
                  <FaInstagram className="text-lg text-[#D9A09A]" />
                  Instagram
                </span>

                <FiArrowUpRight
                  className="
                    opacity-0
                    -translate-x-1
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                  "
                />
              </a>


              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Les_Ongles01"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-[#E5CBCD]
                  hover:text-white
                  transition-colors
                "
              >
                <span className="flex items-center gap-3">
                  <FaYoutube className="text-lg text-[#D9A09A]" />
                  YouTube
                </span>

                <FiArrowUpRight
                  className="
                    opacity-0
                    -translate-x-1
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                  "
                />
              </a>


              {/* Email */}
              <a
                href="mailto:lesongles8@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-[#E5CBCD]
                  hover:text-white
                  transition-colors
                "
              >
                <span className="flex items-center gap-3">
                  <FiMail className="text-lg text-[#D9A09A]" />
                  lesongles8@gmail.com
                </span>

                <FiArrowUpRight
                  className="
                    opacity-0
                    -translate-x-1
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                  "
                />
              </a>

            </div>
          </div>


          {/* ENQUIRE */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#E8B7B5] mb-7">
              Create With Us
            </h4>

            <p className="text-sm text-[#D6B9BB] leading-relaxed mb-7">
              Have a design in mind, need a bridal set or want to learn the
              craft? Let's create something beautiful together.
            </p>

            <a
              href="https://wa.me/917814117379"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-4
                bg-[#FAF6F2]
                text-[#4A1722]
                px-7
                py-4
                text-[10px]
                tracking-[0.2em]
                uppercase
                hover:bg-[#E8B7B5]
                transition-colors
              "
            >
              Enquire on WhatsApp
              <span className="text-lg">→</span>
            </a>
          </div>

        </div>


        {/* =====================================================
            BOTTOM DIVIDER
        ====================================================== */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C98280]/40 to-transparent" />


        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
        <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[10px] tracking-[0.08em] text-[#BFA2A5] text-center md:text-left">
            © {new Date().getFullYear()} LES ONGLES. All rights reserved.
          </p>

          <p className="text-[9px] tracking-[0.22em] uppercase text-[#BFA2A5]">
            Instant Luxury · Beautifully You
          </p>

        </div>

      </div>
    </footer>
  );
}