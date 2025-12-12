'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Compass, Flower2, Shield, Sparkles, Sun } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Rotina espiritual que se torna refúgio',
    description: 'Quando o mundo acelera, sua oração te ancora. Crie momentos sagrados diários que transformam o caos em paz, a pressa em presença e a ansiedade em confiança.',
    gradient: 'from-[#D4AF37] to-[#C19A2E]'
  },
  {
    icon: Compass,
    title: 'Clareza na oração, profundidade no diálogo',
    description: 'Saia da superfície. Aprenda a rezar não por obrigação, mas por amor — com palavras que nascem do coração e silêncios que acolhem a voz de Deus.',
    gradient: 'from-[#E8C4C4] to-[#D4A5A5]'
  },
  {
    icon: Flower2,
    title: 'Crescimento interior que se vê na vida',
    description: 'A fé não é teoria: é transformação. Você vai sentir seus frutos na paciência com os filhos, na paz diante dos desafios, na capacidade de perdoar e amar com mais liberdade.',
    gradient: 'from-[#87CEEB] to-[#6BAED6]'
  },
  {
    icon: Sun,
    title: 'Organização que honra o dom do tempo',
    description: 'Cada hora é uma oportunidade de glorificar a Deus. Organize seu dia não para fazer mais, mas para viver melhor — com propósito, presença e gratidão.',
    gradient: 'from-[#F4E4C1] to-[#E8D4A8]'
  },
  {
    icon: Shield,
    title: 'Disciplina espiritual que liberta',
    description: 'Disciplina não é prisão — é o caminho para a verdadeira liberdade. Com estrutura e constância, você descobre que a oração não é peso, mas asas.',
    gradient: 'from-[#C19A2E] to-[#A67C00]'
  },
  {
    icon: Sparkles,
    title: 'Paz interior em meio às tempestades',
    description: 'O mundo não vai parar, mas você pode encontrar serenidade. Este Pack te ensina a cultivar um jardim interno onde Deus habita, mesmo quando lá fora é deserto.',
    gradient: 'from-[#D4A5A5] to-[#C48C8C]'
  }
]

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que vai <span className="text-gradient-gold">mudar</span> na sua vida
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Não são apenas benefícios — são transformações reais, sentidas no dia a dia, tecidas por Deus através da sua fidelidade e abertura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-[#FAFAF8] rounded-2xl p-8 shadow-soft hover:shadow-soft-hover transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
