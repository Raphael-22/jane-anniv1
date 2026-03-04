import { motion } from 'motion/react';
import { useState } from 'react';
import { Phone, Heart } from 'lucide-react';

export default function TheCall() {
  const [answered, setAnswered] = useState(false);

  return (
    <section className="py-32 md:py-48 px-6 bg-charcoal text-ivory relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-xl mx-auto text-center relative z-10 w-full">
        {!answered ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose/50 to-transparent" />
            
            <div className="w-24 h-24 rounded-full bg-rose/20 flex items-center justify-center mb-8 animate-pulse shadow-[0_0_30px_rgba(229,62,62,0.3)]">
              <Phone size={32} className="text-rose/80" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-serif mb-2 text-ivory/80">Incoming call from</h3>
            <h2 className="text-5xl md:text-6xl font-accent text-rose/90 mb-12 drop-shadow-md">Jane</h2>
            
            <button
              onClick={() => setAnswered(true)}
              className="group relative px-12 py-4 bg-rose/80 text-white rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-rose transition-all duration-500 overflow-hidden shadow-lg shadow-rose/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart size={16} className="fill-white/50" />
                Answer
                <Heart size={16} className="fill-white/50" />
              </span>
              <div className="absolute inset-0 bg-rose translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(229,62,62,0.2)]">
              <Heart size={32} className="text-rose/80 fill-rose/50" strokeWidth={1.5} />
            </div>
            <h3 className="text-4xl md:text-6xl font-accent text-rose/90 leading-tight mb-8 drop-shadow-sm">
              The call that changed everything.
            </h3>
            <p className="text-xl md:text-2xl text-ivory/80 font-serif italic max-w-lg mx-auto leading-relaxed">
              "You took my number from my brother, and I've been answering ever since."
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
