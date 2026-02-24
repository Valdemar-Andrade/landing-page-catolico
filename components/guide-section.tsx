"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { BookOpen, Heart, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

const contentItems = [
  {
    title: "Um espaço simples para organizar o teu dia.",
    description:
      "Aqui colocas no papel o que tens para fazer, o que precisa mesmo da tua atenção e o que pode esperar. Porque quando tudo fica só na cabeça, vem a confusão e o cansaço. O dia tem 24 horas. Não se resolve nem se pensa tudo num só dia. Organizar o teu dia ajuda-te a criar tempo e espaço para Deus.",
    image: "/images/planner-diario.png",
    alt: "Planner diário do Pack Católico",
  },
  {
    title: "Meditar com Direção",
    description:
      "Todos os dias encontrarás um trecho da Palavra já escolhido para aquele dia. Não vais abrir a Bíblia ao acaso, nem ler apenas por ler. A cada dia terás uma reflexão simples, clara e ligada à vida real.",
    image: "/images/devocional-diario.jpeg",
    alt: "Devocional diário do Pack Católico",
  },
  {
    title: "Um Espaço Para Escrever e Descarregar",
    description:
      "Há dias em que a mente está cheia.\nPensamentos acumulados.\nPreocupações.\nCoisas que não conseguimos dizer em voz alta.\nNeste diário, tens um espaço livre para escrever.\nPara colocar no papel o que pesa.\nPara organizar o que está confuso.\nPara esvaziar a mente e trazer clareza ao coração.",
    image: "/images/mural-de-oracao.png",
    alt: "Mural de oração do Pack Católico",
  },
];

export default function GuideSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-[#C19A2E] mb-6">
            Criado para quem quer rezar mais e meditar a Sagrada Escritura
          </h2>
        </motion.div>

        {/* Content Blocks */}
        {contentItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="text-lg text-[#6B5B4F] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        ></motion.div>
      </div>
    </section>
  );
}
