'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const faqs = [
  {
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos diversas formas de pagamento. Entre em contato via WhatsApp e nossa equipe te apresentará todas as opções disponíveis para você.',
  },
  {
    question: 'Vocês enviam para toda Angola?',
    answer: 'Sim! Por se tratar de materiais digitais em PDF, você receberá tudo por e-mail imediatamente após a confirmação do pagamento, independente de onde você estiver.',
  },
  {
    question: 'Qual é o prazo de entrega?',
    answer: 'Os materiais são digitais, portanto a entrega é imediata! Assim que o pagamento for confirmado, você receberá todos os PDFs no seu e-mail.',
  },
  {
    question: 'Como posso acompanhar meu pedido?',
    answer: 'Nossa equipe te acompanhará durante todo o processo via WhatsApp. Você poderá tirar dúvidas e receber atualizações sobre seu pedido.',
  },
  {
    question: 'Posso alterar ou cancelar meu pedido após a compra?',
    answer: 'Por se tratar de materiais digitais, não é possível cancelamento após o envio. Porém, antes do envio, você pode entrar em contato via WhatsApp para solicitar alterações.',
  },
  {
    question: 'E se o arquivo chegar com defeito ou danificado?',
    answer: 'Como os materiais são digitais (PDF), você receberá arquivos de alta qualidade. Caso tenha algum problema com o download ou abertura dos arquivos, entre em contato e resolveremos imediatamente.',
  },
  {
    question: 'Como posso entrar em contato?',
    answer: 'Você pode entrar em contato com nossa equipe através do WhatsApp clicando no botão abaixo. Estamos sempre prontos para te ajudar!',
  },
  {
    question: 'Os materiais estão disponíveis em formato digital?',
    answer: 'Sim! O Pack Católico é completamente digital, você receberá todos os materiais em formato PDF de alta qualidade, prontos para serem impressos ou usados digitalmente.',
  },
];

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#6B5B4F] mb-12">
            Confira se a sua dúvida está respondida abaixo:
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-lg text-[#6B5B4F] hover:text-[#8B7355] hover:no-underline py-4 font-serif">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B5B4F] leading-relaxed pb-4 font-serif">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 text-center space-y-6"
          >
            <h3 className="text-2xl font-serif font-semibold text-[#6B5B4F]">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-[#6B5B4F] font-serif">
              Entre em contato com nossa equipe
            </p>
            <Link
              href="https://wa.me/244XXXXXXXXX?text=Tenho%20d%C3%BAvidas%20sobre%20o%20Pack%20Cat%C3%B3lico"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              ATENDIMENTO VIA WHATSAPP
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}