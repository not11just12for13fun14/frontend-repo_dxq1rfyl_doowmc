import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b3b]/70 via-[#0b1b3b]/80 to-[#0b1b3b] pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Service de livraison pro
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/80 text-lg sm:text-xl"
        >
          Livraison propre. Livraison sûre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <a href="#partnership" className="inline-flex items-center gap-2 bg-white text-[#0b1b3b] px-6 py-3 rounded-full text-base font-semibold shadow hover:shadow-lg transition">
            Devenir partenaire
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <StatCard value="98%" label="de satisfaction client" />
          <StatCard value="24" label="zones couvertes" />
          <StatCard value="300" label="livraisons par jour" />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  );
}
