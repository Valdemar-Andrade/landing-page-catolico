'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { BookOpen, Calendar, Heart, Layout } from 'lucide-react'

const products = [
  {
    icon: BookOpen,
    title: 'E-book Católico',
    description: 'Conteúdo formativo profundo que ilumina sua jornada de fé, com reflexões teológicas acessíveis, ensinamentos práticos e histórias de santos que inspiram a viver o Evangelho no cotidiano.',
    image: 'https://cdn.abacus.ai/images/f88f0700-80aa-4406-8bac-0cfa02897e7a.png',
    color: 'from-[#F4E4C1] to-[#D4AF37]'
  },
  {
    icon: Heart,
    title: 'Devocional',
    description: 'Exercícios espirituais diários que transformam momentos comuns em encontros sagrados: orações guiadas, meditações bíblicas e práticas devocionais que nutrem a alma e fortalecem sua relação íntima com Deus.',
    image: 'https://cdn.abacus.ai/images/91591dc6-36fe-4eeb-a502-7271bdb9b2bc.png',
    color: 'from-[#F4E4E4] to-[#E8C4C4]'
  },
  {
    icon: Calendar,
    title: 'Planner Diário',
    description: 'Organização que honra o tempo como dom divino: estruture seus dias com espaços dedicados à oração matinal, exame de consciência, gratidão e planejamento com propósito, unindo produtividade e espiritualidade.',
    image: 'https://cdn.abacus.ai/images/5ee9f5eb-bd11-4496-b638-158e701cbb2d.png',
    color: 'from-[#FAFAF8] to-[#F5F5DC]'
  },
  {
    icon: Layout,
    title: 'Mural de Oração',
    description: 'Um altar visual para suas intenções: organize pedidos, agradeça graças alcançadas, registre promessas de oração e mantenha presente aqueles que precisam de suas súplicas, criando um espaço sagrado de intercessão.',
    image: 'https://cdn.abacus.ai/images/0653c4d7-8b73-428d-8a86-fdfd1dcb2cf1.png',
    color: 'from-[#E3F2FD] to-[#87CEEB]'
  }
]

export default function AboutPack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quatro pilares que <span className="text-gradient-gold">transformam</span> sua vida espiritual
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Cada elemento do Pack Católico foi criado com intenção e amor, pensando em católicos como você que desejam viver a fé com mais profundidade, clareza e autenticidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 relative aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Juntos, eles criam uma transformação completa
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Não é apenas sobre ter recursos espirituais — é sobre integrar fé, oração e vida prática em uma jornada coerente que te aproxima de Deus todos os dias, em cada detalhe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
