import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0b1b3b]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl font-bold text-center"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white space-y-4">
            <div>
              <label className="text-sm text-white/70">Nom</label>
              <input type="text" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/40" placeholder="Votre nom" />
            </div>
            <div>
              <label className="text-sm text-white/70">Entreprise</label>
              <input type="text" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/40" placeholder="Votre entreprise" />
            </div>
            <div>
              <label className="text-sm text-white/70">Téléphone</label>
              <input type="tel" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/40" placeholder="Votre numéro" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/40" placeholder="Votre message"></textarea>
            </div>
            <button type="button" className="inline-flex items-center gap-2 bg-white text-[#0b1b3b] px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition">
              Envoyer
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white space-y-4">
            <div className="flex items-center gap-3 text-white/80"><Phone className="text-gray-300" size={18}/> <span>+221 77 000 00 00</span></div>
            <div className="flex items-center gap-3 text-white/80"><Mail className="text-gray-300" size={18}/> <span>contact@sedeco.sn</span></div>
            <div className="flex items-center gap-3 text-white/80"><MapPin className="text-gray-300" size={18}/> <span>Dakar, Sénégal</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
