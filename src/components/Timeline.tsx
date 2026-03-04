import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart } from 'lucide-react';

const chapters = [
  {
    title: "Breakfast at Arz Hotel",
    short: "It started simply. A morning at Arz Hotel, sitting across from each other at breakfast.",
    full: "Two strangers, unaware of what was about to unfold. The air was crisp, the coffee was warm, and I couldn't help but notice the girl sitting across from me.",
    image: "https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/images/7d36a83d-365d-458f-889d-7b243b9e4a8a.jpg"
  },
  {
    title: "The School Joke",
    short: "I didn't know Athénée de Beyrouth. You didn't know JM.",
    full: "We laughed at the disconnect, a small spark of banter that broke the ice. It was the first of many inside jokes we'd share."
  },
  {
    title: "The Disagreement",
    short: "We somehow landed on the topic of Andrew Tate. I took his side, you stood firmly against him.",
    full: "It was our first real debate, and honestly, I loved your fire. You weren't afraid to speak your mind, and that captivated me."
  },
  {
    title: "Shows & Stories",
    short: "The conversation drifted to the series we watch.",
    full: "We were just trading titles, but really, we were just looking for reasons to keep talking. Every shared interest felt like a tiny victory."
  },
  {
    title: "The Unasked Question",
    short: "I went back to the room to check out. Panic set in.",
    full: "I wanted to ask for your number, terrified I might never see you again, but I was simply too scared to ask. I almost let you slip away.",
    image: "https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/images/4741634b-4394-4054-912f-5309d949210b.jpg"
  },
  {
    title: "Crossing Paths Again",
    short: "Fate, or just good timing, brought us back together later that day.",
    full: "The relief I felt seeing you again was something I couldn't hide. It felt like a second chance I didn't deserve but desperately wanted."
  },
  {
    title: "The ATV Ride",
    short: "We went ATV riding, but in a funny twist of fate, you rode with my brother, and I rode with your sister.",
    full: "We were close, but still just out of reach. I spent half the ride trying to catch glimpses of you."
  },
  {
    title: "A Family Lunch",
    short: "Our families sat down for lunch together.",
    full: "Amidst the noise and the food, my attention kept finding its way back to you. I was trying to play it cool, but I was already hooked."
  },
  {
    title: "By the Chimney",
    short: "We hung out near the chimney area.",
    full: "The warmth of the fire matched the quiet comfort that was starting to build between us. It felt natural, like we'd known each other for years.",
    image: "https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/images/6575971a-2003-491b-8f35-43098319f36f.jpg"
  },
  {
    title: "The Army Place & The Call",
    short: "At the army place, everyone was making fun of me. I pretended to be angry, a silly joke.",
    full: "But the real punchline? You taking my number from my brother and calling me. We laughed, we talked about the sun on the road, and promised to meet again. And we did.",
    image: "https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/images/8537609a-b445-4229-8758-01d754f9a567.jpg"
  }
];

function ChapterCard({ chapter, index }: { chapter: typeof chapters[0], index: number, key?: React.Key }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline line and dot for mobile */}
      <div className="md:hidden absolute left-[11px] top-0 bottom-[-2rem] w-[2px] bg-rose/20" />
      <div className="md:hidden absolute left-0 top-6 w-[24px] h-[24px] rounded-full bg-ivory border-4 border-rose/40 z-10 flex items-center justify-center">
        <Heart size={8} className="fill-rose/50 text-rose/50" />
      </div>

      <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Timeline center line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-[-4rem] w-[2px] bg-rose/20 -translate-x-1/2" />
        <div className="hidden md:block absolute left-1/2 top-1/2 w-[24px] h-[24px] rounded-full bg-ivory border-4 border-rose/40 -translate-x-1/2 -translate-y-1/2 z-10 shadow-md flex items-center justify-center">
          <Heart size={8} className="fill-rose/50 text-rose/50" />
        </div>

        <div className="md:w-1/2" />
        
        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} py-4`}>
          <div 
            onClick={() => setExpanded(!expanded)}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-rose/10 transition-all cursor-pointer border border-rose/10 group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-rose/60 uppercase">
                Chapter {String(index + 1).padStart(2, '0')}
              </span>
              <button className="text-rose/30 group-hover:text-rose/60 transition-colors">
                {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
              {chapter.title}
            </h3>
            
            <p className="text-charcoal/70 leading-relaxed">
              {chapter.short}
            </p>
            
            <motion.div
              initial={false}
              animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-rose/10">
                <p className="text-charcoal/80 font-serif italic text-lg mb-4">
                  {chapter.full}
                </p>
                {chapter.image && (
                  <div className="rounded-xl overflow-hidden shadow-md mt-4">
                    <img 
                      src={chapter.image} 
                      alt={chapter.title} 
                      className="w-full h-48 md:h-64 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="story" className="py-24 md:py-40 bg-ivory px-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-champagne/40 via-ivory to-ivory pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <Heart className="mx-auto text-rose/40 fill-rose/20 mb-6" size={32} />
          <h2 className="text-5xl md:text-7xl font-accent text-rose/80 mb-4">The Story of Us</h2>
          <p className="text-taupe uppercase tracking-widest text-sm font-medium">How it all began</p>
        </div>
        
        <div className="relative space-y-8 md:space-y-16">
          {chapters.map((chapter, i) => (
            <ChapterCard key={i} chapter={chapter} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
