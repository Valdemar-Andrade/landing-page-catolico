"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Sparkles, TrendingDown } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";

const individualPrices = [
  { name: "E-book Católico", price: "2.000 Kz" },
  { name: "Diário de Oração e Meditação", price: "2.000 Kz" },
  { name: "Planner Diário", price: "1.500 Kz" },
  { name: "Mural de Oração", price: "1.500 Kz" },
];

const packFeatures = [
  "Acesso completo a todos os 4 produtos",
  "Material em PDF de alta qualidade",
  "Pode imprimir e usar quantas vezes quiser (só não pode repassar nem revender)",
  "Suporte via WhatsApp para dúvidas",
];

const printedFeatures = [
  "Acesso completo aos 4 produtos",
  "Material impresso",
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
            A vida pesa quando a alma está distante de Deus. Encontrá-Lo e
            cultivar um relacionamento profundo com Ele, colocando-O em primeiro
            lugar, traz paz, clareza, propósito, direção e verdadeiro descanso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
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
                <span className="font-bold">MAIS POPULAR</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F4E4C1] to-[#D4AF37] rounded-2xl p-1 shadow-soft-hover">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  Diário de Oração e Meditação Católica
                </h3>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">
                    5.000 Kz
                  </div>
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#F4E4C1] to-[#D4AF37] rounded-2xl p-1 shadow-soft-hover">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  Diário de Oração e Meditação Católica (Impresso)
                </h3>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gradient-gold mb-2">
                    14.000 Kz
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {printedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <WhatsAppButton
                  size="lg"
                  className="w-full"
                  text="Quero o Diário de Oração e Meditação Impresso"
                />

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
              <strong>🎁 BÔNUS EXCLUSIVO:</strong> Na compra do Diário de Oração
              e Meditação Católica, você recebe gratuitamente um{" "}
              <strong>Mural de Oração Digital</strong> que funciona como um
              lembrete poderoso. Neste mural você pode escrever suas intenções e
              colocar fotos de pessoas pelas quais pretende orar, criando um
              espaço sagrado e personalizado para sua vida de fé.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
