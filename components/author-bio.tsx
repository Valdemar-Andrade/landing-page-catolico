'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorBio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="autora" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6B5B4F]">
            Sobre a autora
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              <strong>Juelma Nele Vunge</strong> é mãe, esposa, advogada e professora.
            </p>
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              A sua história com Deus sempre passou pela Igreja Católica: cresceu entre terços, coros, catequeses e a vida comunitária.
            </p>
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              Como muitos católicos que se afastaram da Igreja, buscando soluções em outros Credos, ela também passou por isso. Viveu momentos de dúvidas sobre a veracidade da Igreja e se afastou.
            </p>
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              Mas foi justamente aí que o Senhor a encontrou de novo e reacendeu nela o desejo de compreender melhor a fé e de viver com verdade aquilo que professamos.
            </p>
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              No caminho de estudo, oração e discernimento, foi descobrindo que a Igreja, com toda a sua riqueza, doutrina e tradição, é totalmente Cristocêntrica — tudo que Nela se faz tem em vista Jesus Cristo, o nosso Salvador.
            </p>
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif">
              Essa descoberta mudou a sua forma de rezar, de participar da Missa e de viver a sua vocação.
            </p>
            <p className="text-lg text-[#6B5B4F] leading-relaxed font-serif font-semibold">
              Hoje, coloca os seus dons profissionais e pessoais — do Direito, da educação e do marketing digital — ao serviço da evangelização. Quer ajudar outros católicos a conhecer a sua fé, aprofundá-la e vivê-la com mais consciência, amor e entrega.
            </p>
            <p className="text-lg text-[#8B7355] leading-relaxed font-serif italic">
              Esta é a missão que Deus colocou no seu coração.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://cdn.abacus.ai/images/e0637b3a-b7c4-4c39-80ec-3ae88b3ac34b.png"
                alt="Juelma Nele Vunge"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center space-y-6"
        >
          <p className="text-lg md:text-xl text-[#6B5B4F] max-w-3xl mx-auto font-serif">
            Clique no botão abaixo e tenha sempre com você o material que vai te ajudar a manter viva a chama da oração:
          </p>
          <Link
            href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
            target="_blank"
            className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-300"
          >
            👆 QUERO MEU PACK CATÓLICO
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
