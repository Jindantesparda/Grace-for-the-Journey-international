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
  Zap,
  Calendar,
  HandHeart,
  BookOpen,
  Award,
  Phone,
  MapPin,
  Quote
} from 'lucide-react';

const Logo = ({ size = "w-24 h-24" }) => (
  <div className={`relative ${size} flex items-center justify-center overflow-hidden rounded-full`}>
    <img 
      src="/images/logo.png" 
      alt="GFTJI Logo" 
      className="w-full h-full object-contain"
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-full px-8 py-3">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-serif text-xl font-bold tracking-tight text-brand-forest">Graceftji.com</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Programs', 'Events', 'Impact', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm font-medium hover:text-brand-forest transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#donate" className="pill-button bg-brand-forest text-white hover:bg-brand-forest/90 text-sm px-6">
            Donate Now
          </a>
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
            {['About', 'Programs', 'Events', 'Impact', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-lg font-serif border-b border-brand-ink/10 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#donate" className="pill-button bg-brand-olive text-white w-full text-center py-3" onClick={() => setIsOpen(false)}>
              Donate Now
            </a>
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
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-forest/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-forest/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-semibold uppercase tracking-widest mb-6 border border-brand-forest/20">
            Dallas, Texas • Special Needs Support
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-brand-forest">
            Strength in <span className="italic">Weakness</span> <br />
            Hope in the <span className="italic">Journey</span>.
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            "My grace is sufficient for you, for my power is made perfect in weakness." — 2 Corinthians 12:9
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="pill-button bg-brand-forest text-white px-10 py-4 text-lg hover:scale-105 active:scale-95 shadow-lg shadow-brand-forest/20">
              Get Support
            </button>
            <button className="pill-button border-2 border-brand-gold text-brand-forest px-10 py-4 text-lg hover:bg-brand-gold/10 font-bold">
              Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">About GFTJI</h2>
            
            <div className="space-y-6 text-lg text-brand-ink/70 leading-relaxed">
              <p>
                Grace for the Journey International is a non-profit organization that seeks to provide programming and services to families with special needs children through words of encouragement through the Word of God, prayer, and Philanthropic Work.
              </p>
              
              <p className="font-medium text-brand-forest">
                We host live Bible Readings and Studies, prayer, and intercession on TikTok, Facebook, and YouTube to serve our community.
              </p>

              <div className="bg-brand-forest/5 p-8 rounded-3xl border-l-4 border-brand-gold my-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-forest mb-4">Our mandate is based on 2 Corinthians 12:9</h3>
                <p className="text-xl font-serif italic mb-4 text-brand-forest">
                  Troubles may come, miracles happen, and yet those should not be the reason we stop serving and ministering to God.
                </p>
                <p>
                  As God said to Apostle Paul My Grace is Sufficient, so is that same grace sufficient for us today.
                </p>
              </div>

              <p>
                For Moses knew the character of God, while the nation of Israel knew his works.
              </p>
              
              <p>
                We like Moses, seek to know God more than the miracles. Supporting others as we walk towards building a safe space for those in need.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="font-bold">Holistic Support</h4>
                  <p className="text-sm text-brand-ink/50">Spiritual, emotional, and physical care.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold"><Users size={20} /></div>
                <div>
                  <h4 className="font-bold">Community</h4>
                  <p className="text-sm text-brand-ink/50">A place where you never walk alone.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl border-8 border-brand-forest/5">
              <img 
                src="/src/public/images/patient.jpeg" 
                alt="Support Group in Dallas" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="py-24 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Core Initiatives</h2>
            <p className="text-lg text-brand-ink/60">
              We provide comprehensive support systems designed to foster resilience, growth, and lasting change for families of children with special needs.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-forest font-medium group">
            View All Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Sparkles}
            title="Spiritual Encouragement"
            description="Faith-centered support to strengthen parents emotionally and spiritually on their unique journey."
            delay={0.1}
          />
          <FeatureCard 
            icon={Zap}
            title="Financial Empowerment"
            description="Providing opportunities and resources to help families achieve financial stability and dignity."
            delay={0.2}
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Advocacy & Resources"
            description="Practical tools and advocacy support to navigate the complexities of raising a child with special needs."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const RecipientStories = () => {
  const stories = [
    {
      name: "The Thompson Family",
      story: "After years of feeling isolated, GFTJI provided the community connection we desperately needed. Their financial empowerment program helped us secure a stable future for our son.",
      image: "/src/public/images/2.jpeg"
    },
    {
      name: "Maria & Leo",
      story: "The spiritual encouragement I received here gave me the strength to advocate for Leo's education. We are no longer walking this journey alone.",
      image: "/src/public/images/4.jpeg"
    },
    {
      name: "The Chen Family",
      story: "Practical resources from GFTJI made a world of difference in navigating Leo's medical needs. They are truly a blessing to Dallas families.",
      image: "/src/public/images/5.jpeg"
    }
  ];

  return (
    <section id="impact" className="py-24 px-6 bg-brand-forest/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Recipient Stories</h2>
          <p className="text-lg text-brand-ink/60 max-w-2xl mx-auto">
            Real families, real hope. See how your support is changing lives in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden rounded-[2.5rem] group border-t-4 border-brand-gold"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <Quote className="text-brand-gold/20 mb-4" size={32} />
                <p className="text-brand-ink/70 italic mb-6 leading-relaxed">"{item.story}"</p>
                <p className="font-bold text-brand-forest">— {item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    {
      date: "May 2, 2026 - 10:00 AM",
      title: "The Altar Call Prayer",
      location: "Virtual Prayer Gathering",
      description: "A powerful morning of intercession and spiritual breakthrough. Join our global community online—scan the QR code on the event flyer to join the meeting.",
      type: "Virtual Event",
      image: "/src/public/images/event.jpeg" // Path to your new image
    },
    {
      date: "April 22, 2026",
      title: "Spring Charity Gala",
      location: "The Grand Ballroom, Dallas",
      description: "An evening of celebration and fundraising to support our upcoming summer outreach programs.",
      type: "Fundraiser"
    },
    {
      date: "June 10, 2026",
      title: "Youth Leadership Summit",
      location: "Virtual Event",
      description: "Empowering the next generation of change-makers with practical tools for local advocacy.",
      type: "Workshop"
    }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Upcoming Events</h2>
          <p className="text-lg text-brand-ink/60 max-w-2xl mx-auto">
            Join us in person in Dallas or online to learn, grow, and contribute to our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-warm overflow-hidden rounded-[2rem] shadow-sm border border-brand-ink/5 flex flex-col"
            >
              {/* Added Image Display for the main event */}
             {event.image && (
  <div className="aspect-[4/5] w-full overflow-hidden bg-brand-forest/5 p-4"> 
    {/* aspect-[4/5] matches the vertical shape of your flyer better */}
    <img 
      src={event.image} 
      alt={event.title} 
      className="w-full h-full object-contain rounded-xl shadow-md"
    />
  </div>
)}
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-brand-forest/10 text-brand-forest text-xs font-bold rounded-full uppercase tracking-wider">
                    {event.type}
                  </span>
                  <Calendar className="text-brand-gold" size={20} />
                </div>
                <p className="text-brand-forest font-bold text-sm mb-2">{event.date}</p>
                <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
                <p className="text-sm text-brand-ink/40 mb-4 flex items-center gap-1">
                  <Globe size={14} /> {event.location}
                </p>
                <p className="text-brand-ink/60 text-sm leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>
                <button className="text-brand-forest font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Join Gathering <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Donate = () => {
  return (
    <section id="donate" className="py-24 px-6 bg-brand-forest text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Your Legacy of <span className="text-brand-gold italic">Grace</span>.
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              For those who have been blessed with much, GFTJI offers a meaningful way to ensure your resources continue to empower families in Dallas and beyond.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Award className="text-brand-gold" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-brand-gold">Tax-Deductible Giving</h4>
                  <p className="text-brand-gold">Maximize your impact while optimizing your estate planning.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <HandHeart className="text-brand-gold" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-brand-gold">Endowment Opportunities</h4>
                  <p className="text-brand-gold">Create a permanent fund that supports a specific cause in your name.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-brand-ink p-10 md:p-16 rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl font-serif mb-8 text-center text-brand-forest">Make a Significant Gift</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['$500', '$1,000', '$5,000', 'Other'].map((amount) => (
                <button key={amount} className="py-4 border-2 border-brand-forest/20 rounded-2xl font-bold text-xl hover:bg-brand-forest hover:text-white hover:border-brand-forest transition-all">
                  {amount}
                </button>
              ))}
            </div>

            <button className="w-full py-6 bg-brand-forest text-white rounded-2xl font-bold text-2xl shadow-lg hover:scale-[1.02] transition-transform mb-8">
              Donate Securely Online
            </button>

            <div className="pt-8 border-t border-brand-ink/10 text-center">
              <p className="font-bold text-lg mb-2">Prefer to Give by Check?</p>
              <p className="text-brand-ink/60 mb-4">Please make checks payable to:</p>
              <div className="bg-brand-forest/5 p-4 rounded-xl font-mono text-sm border border-brand-forest/10">
                Grace for the Journey International<br />
                Attn: Development Office<br />
                123 Grace Way, Suite 500<br />
                Dallas, Texas 75201
              </div>
            </div>
          </div>
        </div>
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
    className="glass-card p-8 rounded-[2rem] hover:shadow-lg transition-all group border-b-4 border-brand-orange"
  >
    <div className="w-14 h-14 bg-brand-forest/10 rounded-2xl flex items-center justify-center text-brand-forest mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-serif mb-4 text-brand-forest">{title}</h3>
    <p className="text-brand-ink/60 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-card rounded-[3rem] p-12 md:p-16">
          <h2 className="text-4xl font-serif mb-8 text-brand-forest">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-forest/10 rounded-full flex items-center justify-center text-brand-forest">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Call Us</p>
                <p className="text-lg font-medium">+1 (214) 624-8888</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-forest/10 rounded-full flex items-center justify-center text-brand-forest">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Location</p>
                <p className="text-lg font-medium">Dallas, Texas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-forest/10 rounded-full flex items-center justify-center text-brand-forest">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/40">Email</p>
                <p className="text-lg font-medium">info@graceftji.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden border-b-8 border-brand-gold">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-forest to-transparent opacity-30" />
          
          <Mail className="mx-auto text-brand-forest mb-8" size={48} />
          <h2 className="text-4xl font-serif mb-6 text-brand-forest">Stay Connected</h2>
          <p className="text-lg text-brand-ink/60 mb-10">
            Join our global community. Sign up for updates and stories of impact.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full bg-white/50 border border-brand-ink/10 focus:outline-none focus:border-brand-forest transition-colors"
                required
              />
              <button 
                type="submit"
                className="pill-button bg-brand-forest text-white px-8 py-4 flex items-center justify-center gap-2 group"
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
                  className="text-brand-forest mt-4 font-medium"
                >
                  Thank you for joining our journey!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-brand-ink/5 bg-brand-forest text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo />
              <span className="font-serif text-2xl font-bold text-brand-gold">Graceftji.com</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Providing holistic support to parents raising children with special needs through spiritual encouragement, practical resources, and community connection.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-white/40">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Our Programs', 'Upcoming Events', 'Ways to Give', 'Contact'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-white/40">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-forest hover:border-brand-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-white/40">
            Copyright © 2025 Grace for the Journey International - All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/40">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Cookie Policy</a>
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
        <About />
        <Programs />
        <RecipientStories />
        <Events />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

