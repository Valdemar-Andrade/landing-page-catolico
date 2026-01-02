"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Sparkles, TrendingDown } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";

const individualPrices = [
  { name: "E-book Católico", price: "2.000 Kz" },
  { name: "Devocional", price: "2.000 Kz" },
  { name: "Planner Diário", price: "1.500 Kz" },
  { name: "Mural de Oração", price: "1.500 Kz" },
];

const packFeatures = [
  "Acesso completo a todos os 4 produtos",
  "Material em PDF de alta qualidade",
  "Conteúdo prático e espiritual profundo",
  "Pode imprimir e usar quantas vezes quiser",
  "Economia de 1.000 Kz",
  "Suporte via WhatsApp para dúvidas",
];

export default function PricingSectionV2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="precos"
      className="py-20 lg:py-32 bg-gradient-to-b from-[#F5F5DC] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-xl text-gray-900 max-w-3xl mx-auto">
            A vida espiritual é um dos pilares mais importantes da vida humana.
            Quando ela está firme, os outros pilares também se fortalecem.
            Investir na sua vida espiritual é investir em paz, clareza,
            propósito e eternidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Individual Prices */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Preços Individuais
            </h3>
            <div className="space-y-4 mb-6">
              {individualPrices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-4 border-b border-gray-200"
                >
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="text-gray-900 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">7.000 Kz</span>
            </div>
          </motion.div>

          {/* Pack Price - Highlighted */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#C19A2E] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">MELHOR OFERTA</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F4E4C1] to-[#D4AF37] rounded-2xl p-1 shadow-soft-hover">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  Devocional Completo
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  Os 4 produtos juntos
                </p>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-gray-500 line-through">
                      7.000 Kz
                    </span>
                    <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-bold">-3.500 Kz</span>
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-gradient-gold mb-2">
                    3.500 Kz
                  </div>
                  <p className="text-gray-600">Economia de 3.500 Kz</p>
                </div>

                <div className="space-y-3 mb-8">
                  {packFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <WhatsAppButton size="lg" className="w-full" />

                <p className="text-center text-sm text-gray-500 mt-4">
                  💚 Pagamento via WhatsApp • Entrega imediata
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-rose rounded-2xl p-8 md:p-12 shadow-soft max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              <strong>Não é um gasto, é um investimento.</strong> Investir em
              sua vida espiritual é investir em paz, clareza, propósito e
              eternidade. E isso não tem preço.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
