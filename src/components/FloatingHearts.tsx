import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; animationDuration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 10 + Math.random() * 20,
          delay: Math.random() * 10,
          size: 10 + Math.random() * 20
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0, x: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.4, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50]
          }}
          transition={{
            duration: heart.animationDuration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: `${heart.left}%`, position: 'absolute' }}
        >
          <Heart size={heart.size} className="text-rose/20 fill-rose/10" strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
