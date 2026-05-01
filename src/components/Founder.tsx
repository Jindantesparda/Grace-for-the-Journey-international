import { motion } from "motion/react";
import { Award, BookOpen, Quote, Users } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-24 bg-cream overflow-hidden" id="founder">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/5 rounded-full scale-125 blur-3xl -z-10" />
            <div className="relative border-2 border-gold/30 p-4 rounded-[40px]">
              <div className="rounded-[30px] overflow-hidden aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop" 
                  alt="Dr. Brenda Goudeaux" 
                  className="w-full h-full object-cover grayscale brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-1">Founder & CEO</p>
                    <h3 className="text-3xl font-serif">Dr. Brenda Goudeaux</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-gold text-dark-green p-8 rounded-2xl shadow-xl max-w-[240px]">
               <Award className="mb-4" />
               <p className="text-xs font-bold uppercase tracking-widest mb-2">Excellence in Ministry</p>
               <p className="text-[10px] leading-relaxed">Recognized global leader in spiritual empowerment and women's advocacy.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Quote className="text-gold/20 w-24 h-24 mb-8" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.6em] mb-6 block">Meet the Visionary</span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl text-dark-green mb-12 leading-[0.8] tracking-tighter">Leading with<br /><span className="italic">Wisdom.</span></h2>
            
            <div className="space-y-8 text-dark-green/70 text-base md:text-lg leading-relaxed font-sans max-w-xl">
              <p className="font-semibold text-dark-green">
                Dr. Brenda Goudeaux is the visionary founder of Grace for the Journey International. Her life’s work is dedicated to uplifting others through spiritual guidance and compassionate outreach.
              </p>
              <p>
                With decades of experience in ministry and global leadership, she has touched thousands of lives, providing the tools and inspiration needed to navigate the complexities of life with grace.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-gold/10 pt-12">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-[1px] bg-gold" />
                <h4 className="font-bold text-dark-green text-[10px] uppercase tracking-[0.3em]">Published Author</h4>
                <p className="text-xs text-dark-green/50 italic">Influential works on spiritual empowerment.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-[1px] bg-gold" />
                <h4 className="font-bold text-dark-green text-[10px] uppercase tracking-[0.3em]">Global Speaker</h4>
                <p className="text-xs text-dark-green/50 italic">Keynote leader at international summits.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 15 }}
              className="mt-16 flex items-center gap-6 text-dark-green font-black text-xs uppercase tracking-[0.4em] group"
            >
              Full Profile 
              <div className="w-12 h-[1px] bg-gold group-hover:w-24 transition-all duration-500" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
