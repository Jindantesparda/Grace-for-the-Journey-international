import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-green text-white py-20 relative overflow-hidden" id="footer">
      {/* Texture bg */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gold" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-4 mb-10">
              <img 
                src="/images/logo.png" 
                alt="GFTJI Logo" 
                className="h-16 w-auto"
              />
              <div className="h-[1px] w-12 bg-white/20 mb-1"></div>
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] leading-relaxed font-bold mb-10 italic">
              Grace for the <br />Journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-dark-green transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-dark-green transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-dark-green transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-widest font-medium">Home</a></li>
              <li><a href="#mission" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-widest font-medium">Mission</a></li>
              <li><a href="#programs" className="text-white/60 hover:text-white text-sm transition-colors uppercase tracking-widest font-medium">Programs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-white/60 text-sm italic">
                <Mail size={16} className="text-gold" /> info@graceftji.com
              </li>
              <li className="flex gap-3 items-center text-white/60 text-sm italic">
                <Phone size={16} className="text-gold" /> +1 (214) 624-8888
              </li>
              <li className="flex gap-3 items-start text-white/60 text-sm italic">
                <MapPin size={16} className="text-gold shrink-0 mt-1" /> Dallas, <br />Texas
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Stay Connected</h4>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-4">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/10 border border-white/20 rounded-full py-2 px-4 text-xs w-full focus:outline-none focus:border-gold" />
              <button className="bg-gold text-dark-green font-bold text-[10px] uppercase tracking-widest px-4 rounded-full">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-[0.3em]">
          <p>© 2026 Grace for the Journey International. All Rights Reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-gold transition-colors font-bold">
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
