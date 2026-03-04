import { motion } from 'motion/react';
import { ChevronDown, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-champagne/50 via-ivory to-blush/20 px-6">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-8 w-56 h-72 md:w-72 md:h-96 rounded-t-full rounded-b-full overflow-hidden border-4 border-white/80 shadow-2xl relative"
        >
          <img 
            src="https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/images/1c618e47-4977-440f-9031-6e3e5c94179d.jpg" 
            alt="Jane & Raphael" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent mix-blend-overlay" />
        </motion.div>

        <h2 className="text-sm md:text-base tracking-[0.2em] uppercase text-rose/70 mb-2 font-medium flex items-center gap-2 justify-center">
          <Heart size={14} className="fill-rose/50 text-rose/50" />
          September 4, 2022 — Arz Hotel
          <Heart size={14} className="fill-rose/50 text-rose/50" />
        </h2>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-charcoal mb-4 leading-none tracking-tight">
          Jane Haidar
        </h1>
        
        <p className="text-3xl md:text-5xl text-rose/80 font-accent mb-12 max-w-xl mx-auto">
          The day we met… and everything quietly changed.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a 
            href="#story"
            className="px-8 py-4 bg-rose/80 text-white rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-rose transition-colors duration-300 shadow-lg shadow-rose/20"
          >
            Start the story
          </a>
          <a 
            href="#note"
            className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-rose/20 text-charcoal rounded-full uppercase tracking-widest text-xs font-semibold hover:border-rose/50 hover:bg-white/80 transition-all duration-300"
          >
            A note from Raphael
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose/50 animate-bounce"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
