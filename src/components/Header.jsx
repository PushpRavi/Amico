import { useState, useEffect } from "react";
import { Menu, X, FlaskConical, ArrowRight } from "lucide-react"; // install: npm install lucide-react

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle shadow/background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Products", href: "/products" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* Top Banner - Added Gradient and subtle text shadow */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-amber-900 text-center text-m font-bold py-2 px-4 shadow-sm relative z-[60]">
        <span className="inline-flex items-center gap-2">
          🚧 Website is under construction. Something amazing is coming soon.
        </span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100
        ${
          scrolled || open
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <a
              href="/"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                {/* Replaced FontAwesome with Lucide for cleaner SVG look */}
                <FlaskConical className="text-blue-600 w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-slate-800 leading-tight">
                  AMICO
                  <span className="text-blue-600"> Pharmaceuticals</span>
                </h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase hidden sm:block">
                  For the Health of Humanity
                </p>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 group"
                >
                  {link.name}
                  {/* Animated Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              {/* CTA Button */}
              <a
                href="/contact"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight size={16} />
              </a>
            </nav>

            {/* Hamburger Icon (Animated) */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? (
                <X className="w-7 h-7 animate-in fade-in duration-200" />
              ) : (
                <Menu className="w-7 h-7 animate-in fade-in duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 border-t border-gray-100 px-6 py-6 flex flex-col gap-2 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 block w-full text-center px-4 py-3 rounded-lg bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
