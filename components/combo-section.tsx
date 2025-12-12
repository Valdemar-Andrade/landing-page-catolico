'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ComboSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#C19A2E]">
              Adquira o combo exclusivo
            </h2>
            <p className="text-xl text-[#6B5B4F] leading-relaxed max-w-3xl mx-auto">
              Que une todos os materiais do Pack Católico para uma transformação completa da sua vida espiritual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop"
                  alt="Combo Pack Católico"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-800">
                Inclui:
              </h3>
              <ul className="space-y-4 text-lg text-[#6B5B4F]">
                <li className="flex items-start gap-3">
                  <span className="text-[#C19A2E] font-bold">•</span>
                  <span><strong>E-book Católico</strong> com conteúdo formativo e inspiracional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C19A2E] font-bold">•</span>
                  <span><strong>Devocional Diário</strong> para aprofundar sua vida de oração</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C19A2E] font-bold">•</span>
                  <span><strong>Planner Diário</strong> para organizar seu cotidiano com fé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C19A2E] font-bold">•</span>
                  <span><strong>Mural de Oração</strong> para registrar suas intenções</span>
                </li>
              </ul>
              <p className="text-lg text-[#6B5B4F] italic">
                Tudo que você precisa para transformar sua vida espiritual em um só lugar.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}