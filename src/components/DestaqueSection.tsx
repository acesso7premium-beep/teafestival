import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";

const DestaqueSection = () => (
  <section className="py-24 md:py-32 bg-background" aria-labelledby="destaque-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative bg-festival-dark rounded-2xl overflow-hidden p-8 md:p-14 max-w-4xl mx-auto"
      >
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          {/* Placeholder card */}
          <div className="w-full md:w-72 h-56 rounded-2xl bg-primary/15 border border-primary/20 flex flex-col items-center justify-center shrink-0">
            <Trophy className="w-14 h-14 text-accent mb-3" aria-hidden="true" />
            <span className="font-display font-bold text-5xl text-white/90">#44</span>
            <span className="text-sm text-white/50 mt-1">Kart</span>
          </div>

          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent rounded-lg px-4 py-2 text-sm font-semibold mb-5">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Destaque Especial
            </div>

            <h2 id="destaque-title" className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
              Piloto João Pedro Simões
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Aos 14 anos, João Pedro é piloto de kart e autista. Número 44, ele acelera nas pistas provando
              que limites existem apenas para serem ultrapassados. Sua presença no Festival Luz & Voz
              é um testemunho de velocidade, determinação e protagonismo.
            </p>

            <p className="text-white/50 text-base leading-relaxed">
              Venha conhecer sua história e torcer por quem transforma desafios em vitórias.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DestaqueSection;
