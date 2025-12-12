'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import WhatsAppButton from './whatsapp-button'
import { Heart } from 'lucide-react'

export default function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#FAFAF8]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#D4AF37] to-[#C19A2E] rounded-3xl p-10 md:p-16 shadow-soft-hover text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6"
            >
              <Heart className="w-10 h-10 text-[#D4AF37]" fill="#D4AF37" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Este é o momento de dizer sim para Deus
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Você chegou até aqui porque algo em seu coração reconheceu a verdade: é hora de priorizar sua vida espiritual. É hora de criar espaço para Deus. É hora de orar de verdade, viver com propósito e encontrar a paz que o mundo não pode dar.
            </p>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-white text-lg font-medium italic">
                "O que você faz com sua vida espiritual hoje determina quem você será amanhã. Não espere mais. Comece agora."
              </p>
            </div>

            <WhatsAppButton size="xl" variant="white" />

            <p className="text-white/80 text-sm mt-6">
              ✨ Receba o Pack Católico completo por 6.000 Kz • Entrega imediata via WhatsApp
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-gray-600"
        >
          <p className="mb-2">Pack Católico © 2024 • Criado com amor por Juelma Nele Vunge</p>
          <p className="text-sm">Para a glória de Deus e o bem das almas 🙏</p>
        </motion.div>
      </div>
    </section>
  )
}
