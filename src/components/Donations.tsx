import { motion } from "motion/react";
import { Heart, DollarSign, CreditCard } from "lucide-react";

export default function Donations() {
  return (
    <section className="py-24 bg-dark-green text-white" id="donations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.5em]">Support Our Mission</span>
          <h2 className="text-5xl md:text-6xl text-white font-serif mt-6">Your generosity changes lives.</h2>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
            Every contribution, no matter the size, helps us continue our work of empowering communities and providing spiritual guidance to those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-white/10 rounded-2xl border border-white/20"
          >
            <Heart className="text-gold w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-serif mb-4">Monthly Giving</h3>
            <p className="text-white/70 mb-6">Set up recurring donations to provide consistent support for our ongoing programs.</p>
            <button className="gold-gradient text-dark-green px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold rounded-lg shadow-lg">
              Start Monthly Giving
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-8 bg-white/10 rounded-2xl border border-white/20"
          >
            <DollarSign className="text-gold w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-serif mb-4">One-Time Gift</h3>
            <p className="text-white/70 mb-6">Make a single donation to support specific initiatives or general operations.</p>
            <button className="gold-gradient text-dark-green px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold rounded-lg shadow-lg">
              Donate Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-8 bg-white/10 rounded-2xl border border-white/20"
          >
            <CreditCard className="text-gold w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-serif mb-4">Legacy Giving</h3>
            <p className="text-white/70 mb-6">Plan your legacy by including GFTJI in your estate planning or charitable giving.</p>
            <button className="gold-gradient text-dark-green px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold rounded-lg shadow-lg">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gold-gradient text-dark-green px-16 py-6 text-lg uppercase tracking-[0.3em] font-bold rounded-lg shadow-2xl shadow-gold/50"
          >
            Make a Donation Today
          </motion.button>
        </div>
      </div>
    </section>
  );
}
