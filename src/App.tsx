import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Users, 
  Globe, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-full px-8 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center text-white">
            <Heart size={18} />
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight">Grace for the Journey</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Programs', 'Impact', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium hover:text-brand-olive transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="pill-button bg-brand-olive text-white hover:bg-brand-olive/90 text-sm">
            Support Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-6 right-6 glass-card rounded-3xl p-8 flex flex-col gap-6"
          >
            {['About', 'Programs', 'Impact', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-serif border-b border-brand-ink/10 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="pill-button bg-brand-olive text-white w-full">
              Support Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive text-xs font-semibold uppercase tracking-widest mb-6">
            International Empowerment
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
            Gracefully <span className="italic">Empowering</span> <br />
            and <span className="text-brand-olive">Encouraging</span>.
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We believe in the transformative power of grace. Our mission is to walk alongside individuals and communities, providing the tools and support needed for the journey ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="pill-button bg-brand-olive text-white px-10 py-4 text-lg hover:scale-105 active:scale-95">
              Join the Journey
            </button>
            <button className="pill-button border border-brand-olive text-brand-olive px-10 py-4 text-lg hover:bg-brand-olive/5">
              Learn Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="glass-card p-8 rounded-[2rem] hover:shadow-lg transition-all group"
  >
    <div className="w-14 h-14 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-brand-olive mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-brand-ink/60 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Programs = () => {
  return (
    <section id="programs" className="py-24 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Core Initiatives</h2>
            <p className="text-lg text-brand-ink/60">
              We provide comprehensive support systems designed to foster resilience, growth, and lasting change in communities worldwide.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-olive font-medium group">
            View All Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Sparkles}
            title="Personal Mentorship"
            description="One-on-one guidance focused on personal growth, spiritual well-being, and leadership development."
            delay={0.1}
          />
          <FeatureCard 
            icon={Globe}
            title="Global Outreach"
            description="Connecting resources with needs across borders, supporting education and health initiatives in underserved regions."
            delay={0.2}
          />
          <FeatureCard 
            icon={Users}
            title="Community Building"
            description="Creating safe spaces for dialogue, support, and collective action to solve local challenges."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/grace/800/1000" 
                alt="Community Impact" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl max-w-xs hidden md:block">
              <p className="text-brand-olive font-serif text-4xl mb-2">15k+</p>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-ink/60">Lives Impacted Globally</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Real Stories of <span className="italic">Grace</span> and Transformation.
            </h2>
            <div className="space-y-8">
              {[
                {
                  quote: "Grace for the Journey didn't just give me resources; they gave me a new perspective on what's possible.",
                  author: "Sarah M.",
                  role: "Program Participant"
                },
                {
                  quote: "The mentorship program changed my life. I now lead my own community initiative back home.",
                  author: "David K.",
                  role: "Alumni Leader"
                }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="border-l-2 border-brand-olive/30 pl-8"
                >
                  <p className="text-xl font-serif italic mb-4 text-brand-ink/80">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-brand-ink/50">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-olive to-transparent opacity-30" />
        
        <Mail className="mx-auto text-brand-olive mb-8" size={48} />
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Stay Connected</h2>
        <p className="text-lg text-brand-ink/60 max-w-xl mx-auto mb-10">
          Join our global community. Sign up for updates, stories of impact, and ways you can get involved.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/50 border border-brand-ink/10 focus:outline-none focus:border-brand-olive transition-colors"
              required
            />
            <button 
              type="submit"
              className="pill-button bg-brand-olive text-white px-8 py-4 flex items-center justify-center gap-2 group"
            >
              Sign Up <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <AnimatePresence>
            {submitted && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-brand-olive mt-4 font-medium"
              >
                Thank you for joining our journey!
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <p className="text-[10px] text-brand-ink/40 mt-12 uppercase tracking-widest">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center text-white">
                <Heart size={18} />
              </div>
              <span className="font-serif text-2xl font-semibold">Grace for the Journey</span>
            </div>
            <p className="text-brand-ink/50 max-w-sm leading-relaxed">
              Gracefully empowering and encouraging individuals and communities worldwide through mentorship, outreach, and sustainable support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-brand-ink/40">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Our Programs', 'Impact Stories', 'Ways to Give', 'Contact'].map(link => (
                <li key={link}><a href="#" className="hover:text-brand-olive transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-brand-ink/40">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-olive hover:text-white hover:border-brand-olive transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-ink/5 gap-4">
          <p className="text-xs text-brand-ink/40">
            Copyright © 2025 Grace for the Journey International - All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-brand-ink/40">
            <a href="#" className="hover:text-brand-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-ink transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-ink transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-olive/20">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
