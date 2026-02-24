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
      {/* BLOCO 1 — DOR + IMAGEM */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
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

          <div className="flex justify-center">
            <Image
              src="/images/capa.jpeg"
              alt="Capa do Diário Católico"
              width={420}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* SISTEMA UNIFICADO DE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 mt-20"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <div className="bg-[#fffbea] p-10 rounded-xl border border-[#D4AF8C] shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF8C]" />
              <span className="text-[#8B7355]">✝</span>
              <div className="w-8 h-[1px] bg-[#D4AF8C]" />
            </div>

            <h3 className="font-serif text-xl text-[#6B5B4F] mb-6">
              Este diário não é uma fórmula mágica. É um caminho.
            </h3>

            <div className="space-y-4 text-[#6B5B4F] font-serif leading-relaxed">
              <p>Foi criado para caminhar contigo.</p>

              <p>Para te ajudar a sair da mornidão.</p>

              <p>
                Para te ajudar a construir, um dia de cada vez, um
                relacionamento pessoal com Deus — nosso Amigo fiel, nosso Pai,
                nosso socorro bem presente na hora da angústia.
              </p>

              <p className="pt-2 font-semibold">
                Para que possas ter paz, mesmo quando a vida parece um caos.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#fffbea] p-10 rounded-xl border border-[#D4AF8C] shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF8C]" />
              <span className="text-[#8B7355]">✝</span>
              <div className="w-8 h-[1px] bg-[#D4AF8C]" />
            </div>

            <h3 className="font-serif text-xl text-[#6B5B4F] mb-6">
              O Que Vais Viver Nestes 21 Dias
            </h3>

            <p className="font-serif text-[#6B5B4F] mb-6">
              Durante 21 dias, vais saber exatamente:
            </p>

            {/* ITEM 1 */}
            <div className="mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold">1</span>
                </div>

                <div>
                  <p className="font-serif font-semibold text-[#6B5B4F] mb-2">
                    O que orar.
                  </p>

                  <p className="font-serif text-[#6B5B4F] text-sm leading-relaxed">
                    Sem aquele pensamento: “Quero orar… mas não sei o que
                    falar.”
                    <br />
                    “Falo sempre as mesmas coisas quando oro.”
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold">2</span>
                </div>

                <div>
                  <p className="font-serif font-semibold text-[#6B5B4F] mb-2">
                    Um trecho da Bíblia para meditar com direção.
                  </p>

                  <p className="font-serif text-[#6B5B4F] text-sm leading-relaxed">
                    Todos os dias encontrarás um trecho da Palavra já preparado.
                    <br />
                    Não precisarás abrir a Bíblia e ficar perdido(a).
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#8B7355] rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold">3</span>
                </div>

                <div>
                  <p className="font-serif font-semibold text-[#6B5B4F] mb-2">
                    Um encontro marcado com Deus.
                  </p>

                  <p className="font-serif text-[#6B5B4F] text-sm leading-relaxed">
                    Antes de mexeres no telefone.
                    <br />
                    Antes de entrares nas preocupações.
                    <br />
                    Antes de começares o teu dia.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#D4AF8C] pt-6 mt-6 space-y-4 font-serif text-[#6B5B4F] text-sm leading-relaxed">
              <p>
                Todos os dias terás uma estrutura simples de oração, meditação
                da Palavra e organização do teu dia.
              </p>

              <p>Já não vais improvisar.</p>

              <p>
                Esta edição acompanha-nos até março. A partir de abril,
                iniciaremos as edições mensais, para que possas continuar a tua
                caminhada de forma contínua ao longo do ano.
              </p>

              <p className="font-semibold">
                Os 21 dias são o começo de um hábito que transforma vidas.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 — QUALIFICAÇÃO */}
        <div className="mt-12">
          <div className="bg-[#fffbea] p-10 rounded-xl border border-[#D4AF8C] shadow-md">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-[1px] bg-[#D4AF8C]" />
              <span className="text-[#8B7355]">✝</span>
              <div className="flex-1 h-[1px] bg-[#D4AF8C]" />
            </div>

            <h3 className="font-serif text-2xl text-center text-[#6B5B4F] mb-10">
              Este Diário Não É Para Todos
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-serif text-[#8B7355] mb-4">
                  Não é para quem:
                </h4>

                <div className="space-y-3 font-serif text-[#6B5B4F]">
                  <p>✝ procura soluções mágicas ou respostas imediatas</p>

                  <p>✝ quer apenas emoção espiritual sem compromisso</p>

                  <p>✝ não está disposto a separar alguns minutos do dia</p>

                  <p>✝ quer discutir fé… mas não quer vivê-la</p>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-[#6B5B4F] mb-4 font-semibold">
                  Este Diário É Para Quem Deseja Recomeçar
                </h4>

                <div className="space-y-3 font-serif text-[#6B5B4F]">
                  <p>✝ reconhece que precisa aprender a orar</p>

                  <p>✝ deseja sair da mornidão espiritual</p>

                  <p>✝ quer caminhar com Deus mesmo no silêncio</p>

                  <p>✝ quer aprender a fé católica de forma simples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
