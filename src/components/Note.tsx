import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Note() {
  return (
    <section id="note" className="py-32 md:py-48 px-6 bg-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/60 backdrop-blur-md p-10 md:p-20 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-rose/10 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/2 space-y-6 text-lg md:text-xl text-charcoal/80 font-serif leading-relaxed md:leading-loose">
            <Heart size={24} className="text-rose/40 fill-rose/20 mb-6" />
            <h2 className="text-4xl md:text-5xl font-accent text-rose/80 mb-8">
              Jane,
            </h2>
            <p>
              If you had told me that morning at Arz Hotel that the girl sitting across from me at breakfast would become my entire world, I probably wouldn’t have believed it. I still laugh thinking about how I didn’t know Athénée de Beyrouth, and you had no idea what JM was. We were just two strangers figuring each other out, debating Andrew Tate, and talking about the shows we watch.
            </p>
            <p>
              When I went back to the room to check out, I realized I was terrified. Terrified that I might leave without your number, that our story would end before it even began. I was simply too scared to ask. But life has a funny way of working out. From the ATV ride where you ended up with my brother and I with your sister, to the fake anger joke at the army place... every little moment was pulling us together.
            </p>
            <p>
              When my phone rang and it was you—having taken my number from my brother—I knew something had shifted. We talked about the sun on the drive back, and agreed to meet again someday.
            </p>
            <p className="font-medium text-rose/90 pt-6 font-accent text-3xl">
              'Someday' became everything. This is the story of how it started.
            </p>
            <div className="mt-12 text-right">
              <p className="font-accent text-4xl text-rose/70">— Raphael</p>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_content/images/8537609a-b445-4229-8758-01d754f9a567.jpg" 
                alt="Holding hands" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-rose/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
