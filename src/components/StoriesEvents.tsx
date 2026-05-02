import { motion } from "motion/react";
import { CalendarDays, MapPin, Quote } from "lucide-react";

const recipientStories = [
  {
    name: "The Thompson Family",
    quote: "After years of feeling isolated, GFTJI provided the community connection we desperately needed. Their financial empowerment program helped us secure a stable future for our son.",
    image: "/images/2.jpeg"
  },
  {
    name: "Maria & Leo",
    quote: "The spiritual encouragement I received here gave me the strength to advocate for Leo's education. We are no longer walking this journey alone.",
    image: "/images/2.jpeg  "
  },
  {
    name: "The Chen Family",
    quote: "Practical resources from GFTJI made a world of difference in navigating Leo's medical needs. They are truly a blessing to Dallas families.",
    image: "/images/2.jpeg"
  }
];

const upcomingEvents = [
  {
    type: "Virtual Prayer Gathering",
    date: "May 2, 2026 - 10:00 AM",
    title: "The Altar Call Prayer",
    location: "Online",
    details: "A powerful morning of intercession and spiritual breakthrough. Join our global community online—scan the QR code on the event flyer to join the meeting.",
    image: "/images/event.jpeg"
  },
  {
    type: "Workshop",
    date: "June 10, 2026",
    title: "Youth Leadership Summit",
    location: "Virtual Event",
    details: "Empowering the next generation of change-makers with practical tools for local advocacy.",
    image: "/images/event2.jpg"
  },
  {
    type: "Prayer",
    date: "July 14, 2026",
    title: "Virtual Prayer Gathering",
    location: "Online via Zoom",
    details: "Join us for a peaceful night of prayer, reflection, and community support for families in need.",
    image: "/images/event3.jpg"
  }
];

export default function StoriesEvents() {
  return (
    <div className="bg-white">
      <section className="py-24" id="recipient-stories">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.5em]">Recipient Stories</span>
            <h2 className="text-5xl md:text-6xl text-dark-green font-serif mt-6">Real families, real hope.</h2>
            <p className="mt-6 text-dark-green/70 text-base md:text-lg leading-relaxed">
              See how your support is changing lives in our community through stories of empowerment, healing, and restored faith.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {recipientStories.map((story, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-[40px] overflow-hidden border border-dark-green/10 shadow-2xl shadow-dark-green/5 bg-cream"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center justify-center mb-6 text-gold">
                    <Quote size={24} />
                  </div>
                  <p className="text-dark-green/80 leading-relaxed text-sm mb-8">{story.quote}</p>
                  <p className="text-dark-green font-semibold uppercase tracking-[0.2em] text-[10px]">— {story.name}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream" id="upcoming-events">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.5em]">Upcoming Events</span>
            <h2 className="text-5xl md:text-6xl text-dark-green font-serif mt-6">Join us in person or online.</h2>
            <p className="mt-6 text-dark-green/70 text-base md:text-lg leading-relaxed">
              Learn, grow, and contribute to our mission at community gatherings, leadership workshops, and transformational prayer events.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group rounded-[40px] border border-dark-green/10 bg-white p-10 shadow-2xl shadow-dark-green/5 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-48 mb-6 overflow-hidden rounded-2xl bg-slate-100">
                  <a href={event.image} target="_blank" rel="noreferrer noopener" className="block h-full w-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain transition-transform duration-500 will-change-transform group-hover:scale-105 cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-between mb-6 gap-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-dark-green/50 font-bold">{event.type}</span>
                  <div className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-dark-green font-bold">
                    {event.date}
                  </div>
                </div>
                <h3 className="text-3xl text-dark-green font-serif mb-6">{event.title}</h3>
                <div className="flex items-center gap-3 text-dark-green/60 text-sm mb-6">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <p className="text-dark-green/70 leading-relaxed">{event.details}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
