import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-10
          flex flex-col md:flex-row
          items-center justify-between
          gap-8
        "
      >
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/logo.png"
              alt="PlayPals Logo"
              className="h-20 w-50 object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* NAV */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Games", "Contact", "Privacy"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`/${item.toLowerCase()}`}
                  className="
                    text-gray-400
                    hover:text-green-400
                    transition-colors
                  "
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* CREDIT */}
          <p className="text-xs text-gray-500">
            © 2026 PlayPals. Developed by{" "}
            <span className="text-green-400 font-medium">
              Mithil Goradia
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
