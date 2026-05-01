import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Mission", href: "#mission" },
    { name: "Programs", href: "#programs" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-gold/10" id="navbar">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-baseline gap-4"
        >
          <img 
            src="/images/logo.png" 
            alt="GFTJI Logo" 
            className="h-20 w-auto"
          />
          <div className="h-[1px] w-16 bg-gold/40 mb-1 hidden sm:block"></div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-dark-green/60 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gold-gradient text-white px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold shadow-xl shadow-gold/20"
          >
            Give
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark-green">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-cream border-b border-gold/20"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-semibold text-dark-green"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-dark-green text-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-gold/30">
              Donate Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
