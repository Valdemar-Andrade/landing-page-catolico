"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ComboSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C19A2E]">
              Adquira o combo exclusivo
            </h2>
            <p className="text-lg md:text-xl text-[#6B5B4F] leading-relaxed max-w-3xl mx-auto">
              O Devocional Católico é mais do que um material: é um companheiro
              diário para quem deseja viver a fé com profundidade. Após a
              aquisição, o material é entregue{" "}
              <strong>imediatamente em formato digital.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Composicão de Imagens Profissional */}
            <div className="relative w-full flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md md:max-w-lg">
                {/* Imagem de Fundo (Impressora) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1 }}
                  className="relative w-[85%] md:w-[90%] z-10"
                >
                  <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100 aspect-[4/3]">
                    <Image
                      src="/images/print-devocional.png"
                      alt="Imagem de Devocional para impressão"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Imagem Secundária (Livro) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  // Ajustes mobile: posição relativa, margem negativa para subir sem invadir o texto lateral
                  // Ajustes desktop: volta para absolute e posicionamento lateral
                  className="relative -mt-20 ml-auto mr-4 w-[60%] 
                 md:absolute md:mt-0 md:right-[-5%] md:top-1/2 md:-translate-y-1/2 md:w-[55%] 
                 z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/images/devocional-book.png"
                      alt="Livro Devocional"
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Texto e Lista */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-serif font-bold text-gray-800 border-b border-[#C19A2E]/20 pb-4">
                O que você recebe:
              </h3>
              <ul className="space-y-5 text-lg text-[#6B5B4F]">
                {[
                  {
                    title: "E-book Católico",
                    desc: "conteúdo formativo e inspiracional",
                  },
                  {
                    title: "Devocional Diário",
                    desc: "para aprofundar sua vida de oração",
                  },
                  {
                    title: "Planner Diário",
                    desc: "para organizar seu cotidiano com fé",
                  },
                  {
                    title: "Mural de Oração",
                    desc: "para registrar suas intenções",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C19A2E] text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      <strong className="text-gray-900">{item.title}</strong> —{" "}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xl text-[#C19A2E] italic font-medium pt-4">
                "Tudo que você precisa para transformar sua vida espiritual em
                um só lugar."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
