import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Images/Png/Logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Our Dream", path: "/our-dream" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="w-20">
              <img
                src={Logo}
                alt="Aashiyana Logo"
                className="w-full object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300
                    after:absolute after:left-1/2 after:-translate-x-1/2
                    after:bottom-[-6px] after:h-[2px] after:w-0
                    after:bg-orange-500 after:transition-all after:duration-300
                    hover:after:w-full
                    ${
                      isActive
                        ? "text-orange-500 after:w-full"
                        : "text-slate-700 hover:text-orange-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Call Button */}
            <div className="hidden lg:flex">
              <a
                href="tel:+917568005390"
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-slate-800"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[60] transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-screen w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b p-5">
           <Link to="/" className="w-12">
              <img
                src={Logo}
                alt="Aashiyana Logo"
                className="w-full object-contain"
              />
            </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-700"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-5 gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-orange-100 text-orange-500"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Call Button */}
          <a
            href="tel:+917568005390"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>
      </div>
    </>
  );
}