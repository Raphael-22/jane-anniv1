import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const quotes = [
  "Some stories don’t begin with fireworks. Sometimes they begin with breakfast.",
  "I almost left without your number. Somehow, life had other plans.",
  "What felt small that day became everything later."
];

export default function Quotes() {
  return (
    <section className="py-32 md:py-48 px-6 bg-charcoal text-ivory relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-b from-charcoal via-rose/10 to-charcoal pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 space-y-32 md:space-y-48">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`text-center relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
          >
            <Heart 
              size={48} 
              className={`absolute -top-12 opacity-10 text-rose/50 fill-rose/50 ${index % 2 === 0 ? 'left-0' : 'right-0'}`} 
            />
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-accent leading-tight text-rose/90 drop-shadow-sm">
              "{quote}"
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
