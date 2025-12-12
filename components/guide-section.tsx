'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { BookOpen, Heart, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';

const contentItems = [
  {
    icon: BookOpen,
    title: 'Formação Espiritual',
    description: 'Conteúdo profundo sobre a fé católica e vida de oração',
  },
  {
    icon: Heart,
    title: 'Vida de Oração',
    description: 'Exercícios práticos e reflexões diárias',
  },
  {
    icon: Calendar,
    title: 'Organização do Dia',
    description: 'Planeje seu cotidiano com foco na fé',
  },
  {
    icon: Sparkles,
    title: 'Crescimento Interior',
    description: 'Ferramentas para uma vida mais plena e santa',
  },
];

export default function GuideSection() {
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop"
                alt="Planner sobre a mesa"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#C19A2E]">
              Um guia para ter os pés no chão e o coração no alto
            </h2>

            <p className="text-lg text-[#6B5B4F] leading-relaxed">
              O Pack Católico é mais do que um material: é um companheiro diário para quem busca viver a fé com autenticidade e profundidade.
            </p>

            <div className="space-y-6">
              {contentItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4E4C1] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C19A2E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#6B5B4F]">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
              target="_blank"
              className="inline-block bg-[#F4C430] hover:bg-[#E5B621] text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero meu Pack Católico
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}