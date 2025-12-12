'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Heart, Calendar, Layout, ChevronRight } from 'lucide-react'

const contentSections = [
  {
    icon: BookOpen,
    title: 'E-book Católico - Fundamentos da Fé Vivida',
    color: 'from-[#D4AF37] to-[#C19A2E]',
    items: [
      'Capítulo 1: O chamado universal à santidade — você foi criada para ser santa',
      'Capítulo 2: Os pilares da fé católica explicados com clareza e amor',
      'Capítulo 3: A Missa como fonte e ápice da vida cristã',
      'Capítulo 4: Os sacramentos: encontros reais com Cristo',
      'Capítulo 5: Maria, mãe e modelo de oração',
      'Capítulo 6: Santos do cotidiano: como viver a fé no mundo moderno',
      'Capítulo 7: Superando dúvidas e crises de fé com esperança',
      'Capítulo 8: A importância da comunidade e da vida eclesial'
    ]
  },
  {
    icon: Heart,
    title: 'Devocional - 40 Dias de Intimidade com Deus',
    color: 'from-[#E8C4C4] to-[#D4A5A5]',
    items: [
      'Semana 1: Conhecer a Deus — quem Ele é e como Ele te ama',
      'Semana 2: Conhecer a si mesma — identidade em Cristo',
      'Semana 3: A oração que transforma — métodos e práticas',
      'Semana 4: Lectio Divina — orar com a Palavra de Deus',
      'Semana 5: O silêncio interior — aprender a ouvir Deus',
      'Semana 6: Gratidão e louvor — celebrar as pequenas graças',
      'Cada dia inclui: Versículo bíblico, reflexão profunda, oração guiada e desafio prático'
    ]
  },
  {
    icon: Calendar,
    title: 'Planner Diário - Organização com Propósito Divino',
    color: 'from-[#F4E4C1] to-[#E8D4A8]',
    items: [
      'Página de abertura semanal: intenção espiritual e versículo da semana',
      'Oração da manhã: espaço para conversar com Deus ao despertar',
      'Planejamento do dia: tarefas, compromissos e prioridades',
      'Momento de gratidão: registrar 3 bênçãos diárias',
      'Exame de consciência noturno: revisão do dia com Deus',
      'Espaço para reflexões e insights espirituais',
      'Acompanhamento de hábitos espirituais (Missa, terço, leitura bíblica)',
      'Seções mensais para revisão e planejamento espiritual'
    ]
  },
  {
    icon: Layout,
    title: 'Mural de Oração - Seu Altar de Intercessão',
    color: 'from-[#87CEEB] to-[#6BAED6]',
    items: [
      'Seção "Intenções de Oração": organize pedidos por categorias (família, saúde, trabalho, conversões)',
      'Seção "Graças Alcançadas": celebre as respostas de Deus e fortaleça sua fé',
      'Seção "Promessas de Oração": compromissos de intercessão por pessoas específicas',
      'Seção "Versículos que me sustentam": palavras de Deus para momentos difíceis',
      'Calendário litúrgico: acompanhe o ano da Igreja',
      'Devoções marianas e dos santos: organize suas práticas devocionais',
      'Espaço para fotos e lembretes visuais das pessoas por quem você reza'
    ]
  }
]

export default function ContentDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  })

  return (
    <section id="conteudo" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que você vai <span className="text-gradient-gold">encontrar</span> dentro do Pack
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Conteúdo profundo, estruturado e prático — nada genérico. Cada página foi pensada para te acompanhar na jornada de fé.
          </p>
        </motion.div>

        <div className="space-y-8">
          {contentSections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gradient-to-br from-white to-[#FAFAF8] rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${section.color}`} />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 group">
                        <ChevronRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
