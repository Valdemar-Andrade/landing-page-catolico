"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { BookOpen, Heart, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

const contentItems = [
  {
    title: "Planejar o teu dia",
    description:
      "Planeje seu cotidiano com foco na fé, organizando horários, tarefas e prioridades espirituais.",
    image: "/images/planner-diario.png",
    alt: "Planner diário do Pack Católico",
  },
  {
    title: "Organizar os pensamentos",
    description:
      "O devocional diário ajuda a silenciar a mente e direcionar os pensamentos para Deus.",
    image: "/images/devocional-diario.jpg",
    alt: "Devocional diário do Pack Católico",
  },
  {
    title: "Cultivar a calma e a serenidade interior",
    description:
      "O mural de oração mantém vivas as intenções pelas quais você se ajoelha para rezar.",
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
          <p className="text-lg text-[#6B5B4F] leading-relaxed">
            Muitas vezes não conseguimos rezar porque a nossa rotina está cheia;
            outras vezes, pela preguiça espiritual; e, muitas vezes, por não
            sabermos o que dizer em oração. Para ajudar a superar esses
            entraves, o devocional contém ferramentas que vão te auxiliar a:
          </p>
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

        <p className="text-lg text-[#6B5B4F] leading-relaxed text-center max-w-3xl mx-auto">
          Ele inclui ainda um espaço que funciona como um lembrete constante das
          intenções pelas quais te ajoelhas para rezar, ajudando-te a manter
          viva a constância e a devoção, mesmo nos dias mais corridos.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
            target="_blank"
            className="inline-block bg-[#F4C430] hover:bg-[#E5B621] text-gray-900 font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Quero meu Pack Católico
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
