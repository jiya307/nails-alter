import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#f8f4ee] text-[#292522] pt-20 pb-8 border-t border-[#d8c7b7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="serif text-3xl tracking-[0.12em] text-[#292522]"
            >
              LES ONGLES
            </Link>

            <p className="text-[10px] tracking-[0.3em] uppercase text-[#9b693f] mt-4">
              Instant Luxury Extensions
              <br />
              & Nail Education
            </p>

            <p className="text-sm text-[#655c56] leading-relaxed max-w-md mt-6">
              An Amritsar-based luxury nail brand specialising in
              naturally fitting, customisable extensions and
              professional nail education.
            </p>

            <p className="text-sm text-[#655c56] leading-relaxed max-w-md mt-4">
              Creating beautiful nails, empowering artists and
              turning creativity into a craft.
            </p>

          </div>


          {/* EXPLORE */}
          <div>

            <h4 className="text-[10px] tracking-[0.25em] uppercase mb-6 text-[#9b693f]">
              Explore
            </h4>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                to="/"
                className="hover:text-[#9b693f] transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-[#9b693f] transition-colors"
              >
                About
              </Link>

              <Link
                to="/extensions"
                className="hover:text-[#9b693f] transition-colors"
              >
                Extensions
              </Link>

              <Link
                to="/education"
                className="hover:text-[#9b693f] transition-colors"
              >
                Education
              </Link>

              <Link
                to="/portfolio"
                className="hover:text-[#9b693f] transition-colors"
              >
                Portfolio
              </Link>

              <Link
                to="/reviews"
                className="hover:text-[#9b693f] transition-colors"
              >
                Reviews
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#9b693f] transition-colors"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* CONNECT */}
          <div>

            <h4 className="text-[10px] tracking-[0.25em] uppercase mb-6 text-[#9b693f]">
              Connect
            </h4>

            <div className="flex flex-col gap-4 text-sm">

              {/* WhatsApp */}
              <a
                href="https://wa.me/917814117379"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#9b693f] transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                <span>7814117379</span>
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/les_ongles_1/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#9b693f] transition-colors"
              >
                <FaInstagram className="text-lg" />
                <span>Instagram</span>
              </a>


              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Les_Ongles01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[#9b693f] transition-colors"
              >
                <FaYoutube className="text-lg" />
                <span>YouTube</span>
              </a>


              {/* Email */}
              <a
                href="mailto:lesongles8@gmail.com"
                className="flex items-center gap-3 hover:text-[#9b693f] transition-colors"
              >
                <FiMail className="text-lg" />
                <span>lesongles8@gmail.com</span>
              </a>

            </div>


            {/* Location */}
            <div className="mt-7 pt-5 border-t border-[#d8c7b7]">

              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b693f] mb-2">
                Based In
              </p>

              <p className="text-sm text-[#655c56]">
                Amritsar, Punjab, India
              </p>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#d8c7b7]">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-xs text-[#655c56]">
              © {new Date().getFullYear()} LES ONGLES. All rights reserved.
            </p>

            <p className="font-serif italic text-sm text-[#9b693f]">
              From Amritsar, with a dream of Paris.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}