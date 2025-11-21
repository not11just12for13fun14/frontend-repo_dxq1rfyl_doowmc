import { Truck, MapPin, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PartnerBenefits() {
  const cards = [
    { icon: Truck, title: 'Livraison rapide', desc: 'Des délais maîtrisés et des tournées optimisées.' },
    { icon: MapPin, title: 'Suivi clair', desc: 'Un suivi en temps réel et des statuts transparents.' },
    { icon: CreditCard, title: 'Paiements simples', desc: 'Facturation claire et versements ponctuels.' },
  ];

  return (
    <section id="partnership" className="relative py-20 bg-[#0b1b3b]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl font-bold text-center"
        >
          Pourquoi vous travailler avec SEDECO
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
            >
              <Icon className="text-gray-300" />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[#0b1b3b] px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition">
            Demander un rendez vous
          </a>
        </div>
      </div>
    </section>
  );
}
