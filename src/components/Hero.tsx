import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white" id="hero">
      {/* Editorial side text */}
      <div className="absolute right-0 top-0 h-full w-16 bg-cream border-l border-gold/10 hidden lg:flex flex-col items-center py-12 justify-between z-10">
        <div className="vertical-text text-[10px] uppercase tracking-[0.8em] font-bold text-dark-green/20">Follow Our Path</div>
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-[1px] h-24 bg-gold"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="lg:col-span-7"
        >
          <span className="inline-block text-gold text-xs font-bold uppercase tracking-[0.5em] mb-8">
            Dallas, Texas • Special Needs Support
          </span>
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] mb-12 text-dark-green">
            Grace <br />
            <span className="italic text-gold block ml-12">For The</span>
            <span className="block">Journey.</span>
          </h1>
          <p className="text-dark-green/60 text-base md:text-lg max-w-md mb-12 font-sans leading-relaxed tracking-wide">
            Empowering global communities through sustainable development, spiritual guidance, and radical compassion. Every mile traveled is a life transformed.
          </p>
          <div className="flex flex-wrap items-center gap-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gold-gradient text-white px-16 py-6 text-lg uppercase tracking-[0.3em] font-bold shadow-2xl shadow-gold/50 rounded-lg"
            >
              Partner With Us
            </motion.button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-dark-green/20" />
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-dark-green/40 italic">
                "My grace is sufficient for you, for my power is made perfect in weakness." - 2 Corinthians 12:9
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] bg-neutral-100 shadow-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-dark-green mix-blend-multiply opacity-20 z-10 transition-opacity group-hover:opacity-10" />
            <img 
              src="/images/7.jpeg"
              alt="Social Hero" 
              className="w-full h-full object-cover grayscale brightness-110 contrast-125"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-dark-green via-transparent to-transparent z-20">
              <p className="font-serif text-5xl text-gold leading-none mb-4 font-bold">01</p>
              <h3 className="text-white uppercase tracking-tighter text-4xl font-black mb-6 leading-none">Current Mission:<br />Nairobi, Kenya</h3>
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.4em]">Safe Water Initiative</p>
            </div>
            
            <div className="absolute inset-0 border-[30px] border-white/10 pointer-events-none z-30" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-24 -left-20 p-10 bg-dark-green/90 backdrop-blur-xl border border-gold/30 shadow-3xl w-72 z-40"
          >
            <div className="flex justify-between items-center mb-8">
               <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Impact Report</span>
               <span className="text-white font-serif text-xl italic">2026</span>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-4xl font-serif italic text-white leading-none">15</span>
                <span className="text-[10px] uppercase tracking-tighter text-white/30 mb-1 font-bold">Countries</span>
              </div>
              <div className="h-[1px] bg-gold/30 w-full" />
              <div className="flex justify-between items-end">
                <span className="text-4xl font-serif italic text-white leading-none">52k</span>
                <span className="text-[10px] uppercase tracking-tighter text-white/30 mb-1 font-bold">Lives Touched</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
