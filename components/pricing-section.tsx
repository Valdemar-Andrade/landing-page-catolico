"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="precos" className="relative py-24 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600&h=900&fit=crop"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-serif">
            Adquira agora o seu:
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl text-[#F4C430] font-bold uppercase tracking-wide font-serif">
            PACK CATÓLICO
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Opção 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-[#F4C430] p-8"
          >
            <div className="relative aspect-[3/4] w-48 mx-auto mb-6">
              <Image
                src="https://media.tractorsupply.com/is/image/TractorSupplyCompany/6024000?$456$"
                alt="Pack Católico - Opção 1"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center font-serif">
              Preços Individuais
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-white font-medium">E-book Católico</span>
                <span className="text-white font-bold">2.000 Kz</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-white font-medium">Devocional</span>
                <span className="text-white font-bold">2.000 Kz</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-white font-medium">Planner Diário</span>
                <span className="text-white font-bold">1.500 Kz</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-white font-medium">Mural de Oração</span>
                <span className="text-white-900 font-bold">1.500 Kz</span>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-white mb-4">7.000 Kz</p>
            </div>
            <Link
              href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
              target="_blank"
              className="block w-full bg-[#F4C430] hover:bg-[#E5B621] text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              SOLICITAR INDIVIDUAL
            </Link>
            \n{" "}
          </motion.div>

          {/* Card 2 - Opção 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-[#F4C430] p-8"
          >
            <div className="relative aspect-[3/4] w-48 mx-auto mb-6">
              <Image
                src="https://www.allornonegames.com/wp-content/uploads/2024/10/Promo-Pack-2-square-1.png"
                alt="Pack Católico - Opção 2"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-center font-serif">
              Pack Católico Premium
            </h3>

            <p className="text-white/90 text-center mb-6 leading-relaxed">
              Embalagem especial
              <br />
              Todos os 4 produtos incluídos
              <br />+ Bônus exclusivos
            </p>

            <div className="text-center mb-6">
              <p className="text-white/60 text-lg mb-2">de 7.000 Kz por</p>
              <p className="text-5xl font-bold text-white mb-2">6.000 Kz</p>
              <p className="text-white/80 text-sm">ou em até 12x de 500 Kz</p>
            </div>

            <Link
              href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
              target="_blank"
              className="block w-full bg-[#F4C430] hover:bg-[#E5B621] text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              QUERO O PACK PREMIUM
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
