'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

const features = [
  'E-book com conteúdo formativo e inspiracional',
  'Devocional diário com exercícios espirituais',
  'Planner para organização do cotidiano',
  'Mural de oração para suas intenções',
  'Material em PDF de alta qualidade',
  'Pode imprimir e usar quantas vezes quiser',
];

export default function WhatsNewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-[#F5F5DC]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#C19A2E]">
              O que contém o Pack Católico
            </h2>
            
            <p className="text-lg text-[#6B5B4F] leading-relaxed">
              Um conjunto completo para transformar a sua rotina espiritual e trazer mais organização, paz e propósito para o seu dia a dia.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-5 h-5 text-[#C19A2E] fill-[#C19A2E] flex-shrink-0 mt-1" />
                  <span className="text-[#6B5B4F] text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
              target="_blank"
              className="inline-block bg-[#F4C430] hover:bg-[#E5B621] text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Clique aqui para garantir!
            </Link>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop"
                alt="Pack Católico"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}