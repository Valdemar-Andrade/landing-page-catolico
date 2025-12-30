'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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
              Se todos os anos prometes ler, estudar e meditar a Bíblia, rezar mais, estar mais ligado(a) à Igreja e, consequentemente, a Deus, mas não tens conseguido cumprir, chegaste ao lugar certo.
			  <br />
			  <br />
			  <br />
			  O <strong>Devocional Católico – Edição Janeiro</strong> foi criado para te conduzir, <strong>um dia de cada vez e sem pressão</strong>, a um encontro diário com Deus, por meio da Palavra, da reflexão e da oração.
            </p>
          </div>

          <div className="space-y-6">
            <Image
              src="/images/capa.png"
              alt="Capa do Devocional Católico"
              width={400}
              height={200}
              className="rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}