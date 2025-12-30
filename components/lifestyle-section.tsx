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
              Todo ser que vive, louve o Senhor.
            </h2>
            
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              Enquanto há tempo, construa uma vida de oração.
              <br />
              Faça de 2026 um ano de maior intimidade com Deus.
              <br />
              Ele é o teu maior aliado.
            </p>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="">
			  	<Image
					src="/images/capa.png"
					alt="Capa do Devocional Católico"
					width={400}
					height={200}
					className="rounded-2xl shadow-lg mx-auto"
				/>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}