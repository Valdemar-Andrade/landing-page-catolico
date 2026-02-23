"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
              Se tens dúvidas ou não compreendes bem a doutrina e as práticas da
              Igreja Católica, e isso te leva à preguiça de ir à Missa ou de
              rezar…
              <br />
              <br />
              Se prometes sempre que vais rezar mais, ler a Bíblia e viver mais
              a tua fé, mas não consegues.
              <br />
              Tentas durante alguns dias… e depois amorneces.
              <br />
              E isso gera em ti um certo aborrecimento, um peso interior…
              <br />
              <br />
              Ou talvez tenhas confiado em Deus, rezado, jejuado, feito o que
              estava ao teu alcance… e ainda assim não alcançaste a graça que
              pediste. E essa frustração te afastou.
              <br />
              Foste perdendo o ânimo de rezar. De ir à Missa com frequência.
            </p>
          </div>

          <div className="space-y-6">
            <Image
              src="/images/capa.jpeg"
              alt="Capa do Diário Católico"
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
