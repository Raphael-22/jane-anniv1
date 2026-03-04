import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Closing() {
  return (
    <section className="py-48 px-6 bg-champagne/40 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-12 shadow-lg shadow-rose/5 border border-rose/10">
          <Heart size={32} className="text-rose/60 fill-rose/20" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-accent text-rose/90 mb-16 leading-tight drop-shadow-sm">
          "I’d choose that breakfast table again, every single time."
        </h2>
        
        <div className="mb-24">
          <p className="text-3xl md:text-4xl font-accent text-charcoal/60">— Raphael</p>
        </div>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-10 py-4 bg-white/50 backdrop-blur-sm border border-rose/20 text-charcoal rounded-full uppercase tracking-widest text-xs font-semibold hover:border-rose/50 hover:bg-rose/80 hover:text-white transition-all duration-300 shadow-lg shadow-rose/5"
        >
          Replay our story
        </button>
      </motion.div>
    </section>
  );
}
