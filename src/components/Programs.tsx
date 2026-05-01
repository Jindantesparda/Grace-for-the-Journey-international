import { motion } from "motion/react";
import { BookMarked, Sparkles, GraduationCap, HeartHandshake } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Spiritual Encouragement",
      desc: "Faith-centered support to strengthen parents emotionally and spiritually on their unique journey.",
      icon: <Sparkles size={24} />,
      image: "/images/initspirit.png"
    },
    {
      title: "Financial Empowerment",
      desc: "Providing opportunities and resources to help families achieve financial stability and dignity.",
      icon: <GraduationCap size={24} />,
      image: "/images/initfinancial.png"
    },
    {
      title: "Advocacy & Resources",
      desc: "Practical tools and advocacy support to navigate the complexities of raising a child with special needs.",
      icon: <HeartHandshake size={24} />,
      image: "/images/initadvocacy.png"
    }
  ];

  return (
    <section className="py-24 bg-dark-green text-white" id="programs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold text-xs font-bold uppercase tracking-[0.6em]"
            >
              Our Core Initiatives
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl lg:text-9xl mt-8 leading-[0.9]"
            >
              Empowerment<br />Through <span className="text-gold italic">Action.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/40 text-xs max-w-[200px] uppercase tracking-[0.2em] font-bold leading-relaxed border-l-2 border-gold pl-4">
              We provide comprehensive support systems designed to foster resilience, growth, and lasting change for families of children with special needs.
            </p>
            <div className="h-[2px] w-24 bg-gold/40"></div>
            <motion.button
              whileHover={{ x: 10 }}
              className="text-gold font-bold text-xs uppercase tracking-[0.3em] group flex items-center gap-2"
            >
              View All Programs 
              <div className="h-[1px] bg-gold flex-grow group-hover:w-16 transition-all duration-500" />
            </motion.button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden border border-white/5"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-6 w-12 h-12 bg-gold/20 border border-gold/40 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark-green transition-all duration-500">
                  {p.icon}
                </div>
                <h3 className="text-3xl text-white mb-4 group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="text-white/70 text-sm max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {p.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all duration-700">
                   Learn More <div className="h-[1px] bg-gold flex-grow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
