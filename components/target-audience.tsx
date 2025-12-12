'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'

const targetPoints = [
  {
    title: 'Você se sente perdida na correria diária',
    description: 'Entre trabalho, família e responsabilidades, a oração fica para depois — e "depois" nunca chega. Você sabe que precisa de Deus, mas não encontra tempo nem clareza para esse encontro.'
  },
  {
    title: 'Quer rezar, mas não sabe como',
    description: 'As orações decoradas não tocam mais seu coração. Você deseja um diálogo verdadeiro com Deus, mas não sabe por onde começar ou como aprofundar essa conversa sagrada.'
  },
  {
    title: 'Busca intimidade real com Deus',
    description: 'Você não quer uma fé superficial ou automática. Seu coração anseia por um relacionamento profundo, pessoal e transformador com Jesus Cristo — e sabe que isso é possível.'
  },
  {
    title: 'Quer organizar sua vida espiritual',
    description: 'Você percebe que precisa de estrutura: uma rotina que não seja engessada, mas que te ajude a priorizar o que realmente importa e a viver com mais intenção e propósito.'
  },
  {
    title: 'É católica (ou quer se tornar)',
    description: 'Você ama a Igreja, mesmo com suas imperfeições. Deseja conhecer a riqueza da tradição católica, viver os sacramentos com consciência e ser testemunha autêntica do Evangelho.'
  },
  {
    title: 'Deseja criar uma rotina de oração',
    description: 'Você já tentou antes, mas a constância escapou. Agora quer ferramentas práticas, motivação espiritual e um caminho claro para fazer da oração um hábito que sustenta sua alma.'
  }
]

export default function TargetAudience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="para-quem" className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAF8] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Este Pack é para você que...
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Reconheça-se nessas palavras. Se ao menos uma dessas frases ressoa em seu coração, este material foi feito especialmente para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {targetPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-soft-hover transition-all duration-300 border-l-4 border-[#D4AF37] group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C19A2E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-rose rounded-2xl p-8 md:p-12 shadow-soft max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
              "Se você se identificou com pelo menos uma dessas situações, saiba: Deus já está trabalhando em seu coração. Este Pack é a ferramenta que Ele pode usar para te guiar de volta ao centro, ao silêncio, à paz — ao Amor que te criou."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
