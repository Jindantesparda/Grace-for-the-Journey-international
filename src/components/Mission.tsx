import { motion } from "motion/react";
import { Heart, Compass, Shield, Users } from "lucide-react";

export default function Mission() {
  const values = [
    {
      icon: <Compass className="text-gold" />,
      title: "Vision",
      desc: "To be a global beacon of hope and empowerment, guiding individuals towards their true purpose.",
    },
    {
      icon: <Shield className="text-gold" />,
      title: "Mission",
      desc: "Grace for the Journey International empowers, equips and motivates people to reach their destiny.",
    },
    {
      icon: <Heart className="text-gold" />,
      title: "Values",
      desc: "Integrity, Compassion, Faith, and Excellence in everything we do for our community.",
    },
    {
      icon: <Users className="text-gold" />,
      title: "Community",
      desc: "Building a global network where everyone feels supported and valued on their journey.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="mission">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-24 border-l-4 border-gold pl-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-xs font-bold uppercase tracking-[0.5em]"
          >
            About GFTJI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl text-dark-green mt-6 font-serif italic"
          >
            Guided by Purpose.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-dark-green/70 text-lg leading-relaxed mb-8"
          >
            Grace for the Journey International is a non-profit organization that seeks to provide programming and services to families with special needs children through words of encouragement through the Word of God, prayer, and Philanthropic Work.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-dark-green/70 text-lg leading-relaxed mb-8"
          >
            We host live Bible Readings and Studies, prayer, and intercession on TikTok, Facebook, and YouTube to serve our community. Our mandate is based on 2 Corinthians 12:9
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark-green/70 text-lg leading-relaxed mb-8"
          >
            Troubles may come, miracles happen, and yet those should not be the reason we stop serving and ministering to God.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-dark-green/70 text-lg leading-relaxed mb-8"
          >
            As God said to Apostle Paul My Grace is Sufficient, so is that same grace sufficient for us today.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-dark-green/70 text-lg leading-relaxed mb-8"
          >
            For Moses knew the character of God, while the nation of Israel knew his works.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-dark-green/70 text-lg leading-relaxed"
          >
            We like Moses, seek to know God more than the miracles. Supporting others as we walk towards building a safe space for those in need.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
