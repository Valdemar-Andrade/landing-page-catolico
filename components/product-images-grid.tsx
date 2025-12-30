"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const images = [
  {
    src: "images/capa.png",
    alt: "Página 1 - Capa do Devocional Católico",
    caption: "31 Dias com Deus",
  },
  {
    src: "images/planner-diario.png",
    alt: "Página 2 - Planner Diário",
    caption: "Organizando o dia à luz de Deus.",
  },
  {
    src: "images/devocional-diario.jpg",
    alt: "Página 3 - Devocional Diário",
    caption: "Um encontro diário com a Palavra",
  },
  {
    src: "images/mural-de-oracao.png",
    alt: "Página 4 - Mural de Oração",
    caption: "Um espaço para entregar intenções ao Senhor",
  },
];

export default function ProductImagesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rotations = [-2.5, 1.8, -1.2, 2.2];

  return (
    <section ref={ref} className="py-24 bg-[#f6f4ec]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                rotate: rotations[index % rotations.length],
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: rotations[index % rotations.length],
                    }
                  : {}
              }
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#fbfaf5] p-3 border border-[#63562b] shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                <div className="relative aspect-[3/4] w-[220px] md:w-[240px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="mt-4 text-sm text-[#63562b] font-handwritten text-center">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
