import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { calculateTimeSince } from '../utils/time';

export default function TimeCounter() {
  const [time, setTime] = useState(calculateTimeSince('2022-09-04T09:00:00'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeSince('2022-09-04T09:00:00'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 md:py-48 px-6 bg-champagne/30 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-accent text-rose/80 mb-16">
          Every second since that breakfast
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Days', value: time.days },
            { label: 'Hours', value: time.hours },
            { label: 'Minutes', value: time.minutes },
            { label: 'Seconds', value: time.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-lg shadow-rose/5 border border-rose/10"
            >
              <span className="text-5xl md:text-7xl font-serif text-charcoal mb-2 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-rose/60 font-semibold">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
