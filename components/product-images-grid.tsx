'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/LibreOffice_7.2.4.1_Impress_screenshot.png/1200px-LibreOffice_7.2.4.1_Impress_screenshot.png', alt: 'Página 1' },
  { src: 'https://i.ytimg.com/vi/1rcIFBhJX_k/maxresdefault.jpg', alt: 'Página 2' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Electronic_medical_record.jpg/330px-Electronic_medical_record.jpg', alt: 'Página 3' },
  { src: 'https://i.ytimg.com/vi/fBV5OeNGiCU/maxresdefault.jpg', alt: 'Página 4' },
  { src: 'https://posstack.com/images/blog/2022/then_I_met_you_PDP.jpg', alt: 'Página 5' },
  { src: 'https://i.ytimg.com/vi/aK4e7oVfJAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBTiuDd5LIDtBdTjSOHl1Z_aRuKFQ', alt: 'Página 6' },
];

export default function ProductImagesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative bg-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}