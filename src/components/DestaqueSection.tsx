import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";

const DestaqueSection = () => (
  <section className="py-20 md:py-28" aria-labelledby="destaque-title">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative bg-festival-dark rounded-3xl overflow-hidden p-8 md:p-14"
      >
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          {/* Placeholder image card */}
          <div className="w-full md:w-80 h-64 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-white/10 flex flex-col items-center justify-center shrink-0">
            <Trophy className="w-16 h-16 text-accent mb-3" aria-hidden="true" />
            <span className="font-display font-bold text-5xl text-white/90">#44</span>
            <span className="text-sm text-white/60 mt-1">Kart</span>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Destaque Especial
            </div>
            <h2 id="destaque-title" className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Piloto João Pedro Simões
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-3">
              Aos 14 anos, João Pedro é piloto de kart e autista. Número 44, ele acelera nas pistas provando
              que limites existem apenas para serem ultrapassados. Sua presença no Festival Luz & Voz
              é um testemunho de velocidade, determinação e protagonismo.
            </p>
            <p className="text-white/50 text-base">
              Venha conhecer sua história e torcer por quem transforma desafios em vitórias.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DestaqueSection;
