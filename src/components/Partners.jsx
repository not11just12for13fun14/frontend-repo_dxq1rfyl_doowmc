import { motion } from 'framer-motion';

export default function Partners() {
  const logos = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'];
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
          Ces entreprises utilisent SEDECO
        </motion.h2>

        <p className="mt-3 text-center text-white/70">Logo des micros entreprises déjà connectées.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map(l => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/80 text-center">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
