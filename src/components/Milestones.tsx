import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Milestones() {
  return (
    <section className="py-32 md:py-48 px-6 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <Heart className="mx-auto text-rose/40 fill-rose/20 mb-6" size={32} />
          <h2 className="text-5xl md:text-7xl font-accent text-rose/80 mb-4">Our Milestones</h2>
          <p className="text-taupe uppercase tracking-widest text-sm font-medium">The dates that matter</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-rose/10 via-rose/30 to-rose/10 -translate-y-1/2 z-0" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="w-6 h-6 rounded-full bg-rose/80 mx-auto mb-8 shadow-[0_0_0_8px_rgba(229,62,62,0.1)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-accent text-rose/90 mb-4">September 4, 2022</h3>
            <h4 className="text-xl text-charcoal/80 font-serif italic mb-6">We met</h4>
            <p className="text-charcoal/60 max-w-xs mx-auto leading-relaxed">
              Two strangers at a breakfast table. A morning that quietly changed the course of my life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center relative z-10"
          >
            <div className="w-6 h-6 rounded-full bg-rose/80 mx-auto mb-8 shadow-[0_0_0_8px_rgba(229,62,62,0.1)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-accent text-rose/90 mb-4">September 16, 2022</h3>
            <h4 className="text-xl text-charcoal/80 font-serif italic mb-6">We became us</h4>
            <p className="text-charcoal/60 max-w-xs mx-auto leading-relaxed">
              The day 'you and I' officially became 'we'. The start of our real adventure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
