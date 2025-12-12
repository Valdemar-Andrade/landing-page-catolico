'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Beatriz Silva',
    role: 'Mãe de 3 filhos, Luanda',
    text: 'Eu achava que não tinha tempo para Deus. A rotina com as crianças, o trabalho, a casa... tudo era urgente, menos a oração. O Pack Católico me mostrou que eu não precisava de horas — precisava de intenção. Hoje, acordo 20 minutos mais cedo, uso o Devocional, e isso mudou completamente meu dia. Tenho mais paciência, mais clareza e, pela primeira vez em anos, sinto que Deus está perto.',
    rating: 5
  },
  {
    name: 'Mariana Costa',
    role: 'Professora, Benguela',
    text: 'Cresci católica, mas a fé era mecânica. Rezava, mas não sentia. O E-book me ajudou a entender o "porquê" por trás de cada gesto litúrgico, e o Mural de Oração me fez lembrar das pessoas por quem prometi rezar e esqueci. Agora, minha fé tem nome, tem rosto, tem vida. É real.',
    rating: 5
  },
  {
    name: 'Teresa Nunes',
    role: 'Advogada, Huambo',
    text: 'Eu estava em crise de fé. Questionava tudo, me sentia perdida e até pensei em me afastar da Igreja. O Devocional me trouxe de volta. Não com respostas prontas, mas com perguntas que me fizeram olhar para dentro e encontrar Deus no silêncio. Hoje, minha fé é mais madura, mais verdadeira. Sou grata demais.',
    rating: 5
  },
  {
    name: 'Joana Pereira',
    role: 'Empresária, Luanda',
    text: 'O Planner Diário foi um divisor de águas. Eu vivia apagando incêndios, sem direção. Agora, começo cada dia com uma intenção espiritual e termino com gratidão. Minha produtividade aumentou, mas mais importante: minha paz aumentou também. Aprendi que organização não é só tarefa — é honrar o dom do tempo que Deus me dá.',
    rating: 5
  }
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAF8] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Histórias de <span className="text-gradient-gold">transformação</span> real
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Mulheres como você, que encontraram no Pack Católico um caminho de volta para o centro, para a paz, para Deus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-hover transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#F4E4C1] opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
