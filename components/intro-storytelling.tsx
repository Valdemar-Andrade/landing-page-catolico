'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function IntroStorytelling() {
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
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-[#6B5B4F] leading-relaxed font-serif">
              Há dias em que a vida parece escapar entre as mãos. Compromissos, urgências, distrações... e, sem perceber, <span className="font-semibold text-[#8B7355]">o essencial fica para depois</span>.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-[#6B5B4F] leading-relaxed font-serif">
              O <span className="font-semibold italic">Pack Católico</span> nasceu para te ajudar a reencontrar esse silêncio fecundo — para que cada página se torne um espaço de encontro com Deus.
            </p>
            <p className="text-lg md:text-xl text-[#6B5B4F] leading-relaxed font-serif">
              Com ele, você poderá planejar o seu dia, registrar intenções, acompanhar o tempo litúrgico e manter viva a constância na oração, mesmo nos dias mais corridos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}