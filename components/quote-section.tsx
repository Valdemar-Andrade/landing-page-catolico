'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface QuoteSectionProps {
  quote: string;
  author?: string;
  backgroundImage: string;
}

export default function QuoteSection({ quote, author, backgroundImage }: QuoteSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover brightness-[0.4]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-serif">
            {quote}
          </blockquote>
          {author && (
            <p className="text-lg md:text-xl text-white/90 font-serif italic">
              — {author}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}