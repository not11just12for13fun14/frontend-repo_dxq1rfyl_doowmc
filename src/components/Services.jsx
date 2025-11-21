import { Package, Zap, Box, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const items = [
    { icon: Package, title: 'Livraison locale' },
    { icon: Zap, title: 'Livraison express' },
    { icon: Box, title: 'Collecte' },
    { icon: Send, title: 'Dispatch' },
  ];

  return (
    <section className="py-20 bg-[#0b1b3b]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl font-bold text-center"
        >
          Services SEDECO
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white text-center"
            >
              <Icon className="mx-auto text-gray-300" />
              <div className="mt-3 font-medium">{title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
