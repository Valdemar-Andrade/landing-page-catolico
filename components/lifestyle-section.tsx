'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

export default function LifestyleSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#F5F5DC] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#6B5B4F] leading-tight">
              Permita que 2026 seja um ano de oração, propósito e presença.
            </h2>
            
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              Deixe que cada página te conduza a uma vida mais simples, ordenada e próxima de Deus.
            </p>

            <Link
              href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
              target="_blank"
              className="inline-block bg-[#C19A2E] hover:bg-[#A8861F] text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              COMPRAR AGORA MEU PACK CATÓLICO
            </Link>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=750&fit=crop"
                alt="Ambiente de oração"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}