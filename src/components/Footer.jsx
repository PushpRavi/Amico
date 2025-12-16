const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold">AMICO Pharmaceuticals</h3>
          <p className="text-sm mt-2 opacity-80">
            Dedicated to global health advancement.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p><i className="fas fa-map-marker-alt mr-2"></i> India</p>
          <p><i className="fas fa-phone mr-2"></i> +91 XXXXXXXXXX</p>
          <p><i className="fas fa-envelope mr-2"></i> amico.pvt.ltd@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 py-6 flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto text-sm">
        <p>© 2025 AMICO Pharmaceuticals Pvt. Ltd.</p>

        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <span>
            Designed by <span className="text-yellow-300 font-semibold">Pushp Ranjan</span>
          </span>
          <a
            href="https://www.linkedin.com/in/pushp-ranjan-a3b500264/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
