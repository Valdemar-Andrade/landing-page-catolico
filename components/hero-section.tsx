'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative">

      {/* Hero Image with Text Overlay */}
      <div className="relative h-[600px] w-full overflow-hidden rounded-3xl mx-auto max-w-[1400px] px-6 mt-10 mb-10">
        <Image
          src="/images/hero-image.png"
          alt="Pack Católico Hero"
          fill
          className="object-cover brightness-80"
          priority
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl ml-12 md:ml-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              Um encontro diário
			  <br />
			  com o Coração de Jesus
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-xl"
            >
              Um <strong>devocional católico</strong> para quem quer rezar mais, mas sente dificuldade em manter constância no dia a dia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico"
                target="_blank"
                className="inline-block bg-[#F4C430] hover:bg-[#E5B621] text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ADQUIRIR MEU PACK CATÓLICO
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}