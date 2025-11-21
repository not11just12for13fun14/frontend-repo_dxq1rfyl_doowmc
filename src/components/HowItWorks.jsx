import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    'Créer un compte partenaire',
    'Envoyer votre demande',
    'Recevoir l’accord',
    'Suivre vos livraisons',
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
          Comment vous travailler avec SEDECO
        </motion.h2>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
            >
              <div className="text-white/60 text-sm">Étape {i + 1}</div>
              <div className="mt-2 font-semibold">{s}</div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
