import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Heart } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const photos = [
  { id: 1, src: `${base}p8.jpg`, alt: "Under the lanterns, just us", span: "col-span-1 row-span-2" },
  { id: 2, src: `${base}p2.JPG`, alt: "Carried away by you", span: "col-span-1 row-span-1" },
  { id: 3, src: `${base}p10.jpg`, alt: "Lost in the snow, found in you", span: "col-span-1 row-span-1" },
  { id: 4, src: `${base}p9.JPG`, alt: "The way you look at me", span: "col-span-2 row-span-1" },
  { id: 5, src: `${base}p5.JPG`, alt: "Sunsets and smiles", span: "col-span-1 row-span-2" },
  { id: 6, src: `${base}p6.JPG`, alt: "Every little moment", span: "col-span-1 row-span-1" },
  { id: 7, src: `${base}p1.JPG`, alt: "Matching hearts", span: "col-span-1 row-span-1" },
  { id: 8, src: `${base}p7.jpg`, alt: "My favorite place is with you", span: "col-span-2 row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-32 md:py-48 px-6 bg-champagne/30 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Heart className="mx-auto text-rose/40 fill-rose/20 mb-6" size={32} />
          <h2 className="text-5xl md:text-7xl font-accent text-rose/80 mb-4">Moments After</h2>
          <p className="text-taupe uppercase tracking-widest text-sm font-medium">What that first day turned into</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg shadow-rose/5 ${photo.span}`}
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/60 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-accent text-2xl md:text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                  {photo.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-6 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-ivory/50 hover:text-rose transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
            />
            <p className="text-rose/90 font-accent text-4xl mt-8 text-center drop-shadow-lg">
              {selectedImage.alt}
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
