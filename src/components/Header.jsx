import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      {/* Top Banner */}
      <div className="bg-yellow-400 text-gray-900 text-center text-base md:text-lg font-bold py-3 px-4">
        <div className="container mx-auto">
          <i className="fas fa-tools mr-2 animate-pulse"></i>
          Website is under construction. Something amazing is coming soon.
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-5">
          {/* Logo Section */}
          <div className="flex items-center gap-3 text-blue-800 hover:opacity-90 transition-opacity cursor-pointer">
            <i className="fas fa-flask text-3xl md:text-4xl"></i>
            <h1 className="font-extrabold text-2xl md:text-3xl tracking-tight">
              AMICO Pharmaceuticals
            </h1>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center gap-8 text-lg font-medium text-gray-700">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="flex items-center gap-2 hover:text-blue-700 transition-colors duration-200"
            >
              <i className="fa fa-phone text-blue-600 text-xl"></i>
              <span>+91 XXXXXXXXXX</span>
            </a>
            <a 
              href="mailto:amico.pvt.ltd@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-700 transition-colors duration-200"
            >
              <i className="fa fa-envelope text-blue-600 text-xl"></i>
              <span>amico.pvt.ltd@gmail.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-gray-700 hover:text-blue-800 focus:outline-none transition-transform active:scale-95"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {/* Toggles between Hamburger and Close icon */}
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Using overflow-hidden and height logic or simple conditional rendering */}
      {open && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200 shadow-inner">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5 text-lg font-medium text-gray-700">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-blue-700 transition-all shadow-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                <i className="fa fa-phone"></i>
              </div>
              <span>+91 XXXXXXXXXX</span>
            </a>
            
            <a 
              href="mailto:amico.pvt.ltd@gmail.com" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-blue-700 transition-all shadow-sm"
            >
               <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                <i className="fa fa-envelope"></i>
              </div>
              <span>amico.pvt.ltd@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;